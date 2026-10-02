import {env} from 'cloudflare:workers';
import {isIP} from 'node:net';
import {AI_LIMIT,AI_WINDOW_MS} from './ai-policy';
let signingKey:Promise<CryptoKey>|undefined;
function key(){return signingKey??=(async()=>{
  // Private database key: never exposed through CMS, logs, or the client.
  await env.DB.prepare("INSERT INTO ai_limit_settings (id,secret) VALUES ('ip-hmac',?) ON CONFLICT(id) DO NOTHING").bind(crypto.randomUUID()+crypto.randomUUID()).run();
  const row=await env.DB.prepare("SELECT secret FROM ai_limit_settings WHERE id='ip-hmac'").first<{secret:string}>();
  if(!row)throw new Error('Rate limiter unavailable');
  return crypto.subtle.importKey('raw',new TextEncoder().encode(row.secret),{name:'HMAC',hash:'SHA-256'},false,['sign']);
})().catch(e=>{signingKey=undefined;throw e})}
export function clientIp(req:Request){
  // Only the Cloudflare edge header; never accept X-Forwarded-For or body IPs.
  // Deployment must preserve the edge header through Sites dispatch.
  const raw=req.headers.get('cf-connecting-ip')?.trim()??'';
  if(!isIP(raw))throw new Error('Visitor network unavailable');
  const normalized=raw.includes(':')?new URL('http://['+raw+']/').hostname.slice(1,-1):raw;
  // Cross-zone Worker placeholder is not a visitor identity. Fail closed.
  if(normalized==='2a06:98c0:3600::103')throw new Error('Visitor network unavailable');
  return normalized;
}
export async function networkKey(req:Request){
  const ip=clientIp(req);
  return Array.from(new Uint8Array(await crypto.subtle.sign('HMAC',await key(),new TextEncoder().encode(ip))),v=>v.toString(16).padStart(2,'0')).join('');
}
export async function allowance(subject:string,now=Date.now()){
  const row=await env.DB.prepare('SELECT COUNT(*) used,MIN(created_at) oldest FROM ai_preview_attempts WHERE subject=? AND created_at>?').bind(subject,now-AI_WINDOW_MS).first<{used:number;oldest:number|null}>();
  return {limit:AI_LIMIT,remaining:Math.max(0,AI_LIMIT-(row?.used??0)),resetAt:row?.oldest==null?null:row.oldest+AI_WINDOW_MS};
}
export async function reserve(subject:string,now=Date.now()){
  const id=crypto.randomUUID();
  // One atomic INSERT...SELECT, not a separate read-then-write. All isolates share D1.
  const result=await env.DB.prepare('INSERT INTO ai_preview_attempts (id,subject,created_at) SELECT ?,?,? WHERE (SELECT COUNT(*) FROM ai_preview_attempts WHERE subject=? AND created_at>?)<?').bind(id,subject,now,subject,now-AI_WINDOW_MS,AI_LIMIT).run();
  // Bound cleanup work; expired rows never count even before cleanup runs.
  await env.DB.prepare('DELETE FROM ai_preview_attempts WHERE id IN (SELECT id FROM ai_preview_attempts WHERE created_at<=? ORDER BY created_at LIMIT 100)').bind(now-AI_WINDOW_MS).run();
  return result.meta.changes===1?id:null;
}
export async function release(id:string){await env.DB.prepare('DELETE FROM ai_preview_attempts WHERE id=?').bind(id).run()}
