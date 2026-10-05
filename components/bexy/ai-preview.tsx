'use client';
import {useEffect,useRef,useState} from 'react';
import {Sparkles} from 'lucide-react';
import {AI_LIMIT,type AiAllowance} from '@/lib/ai-policy';
import {abortSignalTimeout} from '@/lib/fetch-timeout';
import {type BouquetConfig} from '@/lib/catalog';
import {EditableText} from './cms';
type Status=Partial<AiAllowance>&{available?:boolean;error?:string;imageUrl?:string};
export function AiPreview({design,valid}:{design:BouquetConfig;valid:boolean}){
 const[status,setStatus]=useState<Status>({});const[busy,setBusy]=useState(false);const[message,setMessage]=useState('');const[image,setImage]=useState('');const[now,setNow]=useState(Date.now());const lock=useRef(false);
 useEffect(()=>{const abort=new AbortController();fetch('/api/bouquet-preview',{signal:abort.signal}).then(r=>r.json()).then(data=>setStatus(data as Status)).catch(()=>{});return()=>abort.abort()},[]);
 useEffect(()=>{if(status.remaining!==0||!status.resetAt)return;const timer=setInterval(()=>{const time=Date.now();setNow(time);if(time>=status.resetAt!){fetch('/api/bouquet-preview').then(r=>r.json()).then(data=>setStatus(data as Status)).catch(()=>{});clearInterval(timer)}},1000);return()=>clearInterval(timer)},[status.remaining,status.resetAt]);
 async function generate(){if(lock.current)return;lock.current=true;setBusy(true);setMessage('');try{const res=await fetch('/api/bouquet-preview',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({design}),signal:abortSignalTimeout(55000)});const data:Status=await res.json();setStatus(v=>({...v,...data}));if(!res.ok)setMessage(data.error??'Please try again shortly.');else if(data.imageUrl)setImage(data.imageUrl)}catch{setMessage('The connection was interrupted. Please try again.')}finally{lock.current=false;setBusy(false)}}
 const limited=status.remaining===0;const minutes=status.resetAt?Math.max(1,Math.ceil((status.resetAt-now)/60000)):60;
 return <div className="atelier-ai"><Sparkles size={19}/><div><EditableText as="h3" editKey="atelier-ai-title">AI image preview</EditableText><EditableText as="p" editKey="atelier-ai-copy">Photorealistic previews and variations are coming soon. Your live 3D design is available now.</EditableText><p className="atelier-caption">{AI_LIMIT} AI previews per hour per network. Live 3D is unlimited. People on the same Wi-Fi share this allowance.</p>{status.available&&<><p role="status">{limited?`Your next preview is available in ${minutes} min.`:`${status.remaining??AI_LIMIT} previews available`}</p><button className="outline" disabled={busy||limited||!valid} onClick={generate}>{busy?'Creating preview…':'Create AI preview'}</button></>}{message&&<p role="alert">{message}</p>}{image&&<img src={image} alt="AI interpretation of your custom bouquet" style={{width:'100%',marginTop:16}}/>}</div></div>
}
