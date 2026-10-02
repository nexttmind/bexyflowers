import {sameOrigin,json} from './server-demo';
import {storeState} from './store-schema';
import {AI_LIMIT} from './ai-policy';
import {networkKey,allowance,reserve,release} from './server-ai-limit';
type Provider={available:boolean;generate:(design:unknown,signal:AbortSignal)=>Promise<{imageUrl:string}>};
// Supply the owner's server-side provider adapter here. Never expose provider keys.
export const previewProvider:Provider={available:false,async generate(){throw new Error('Provider not connected')}};
const unavailable='AI previews are not available yet. Your live 3D design is available now.';
export async function previewStatus(req:Request,provider=previewProvider){
  if(!provider.available)return json({available:false,limit:AI_LIMIT,remaining:AI_LIMIT,resetAt:null});
  try{return json({available:true,...await allowance(await networkKey(req))})}catch{return json({available:false,error:'AI previews are temporarily unavailable.',limit:AI_LIMIT},503)}
}
export async function generatePreview(req:Request,provider=previewProvider){
  if(!sameOrigin(req))return json({error:'Invalid request origin.'},403);
  if(!req.headers.get('content-type')?.startsWith('application/json'))return json({error:'Use a JSON bouquet design.'},415);
  if(Number(req.headers.get('content-length')??0)>16000)return json({error:'Design is too large.'},413);
  let design;try{const raw=await req.text();if(raw.length>16000)return json({error:'Design is too large.'},413);design=storeState.shape.design.unwrap().parse(JSON.parse(raw).design)}catch{return json({error:'Please complete your bouquet design.'},400)}
  // Unavailable previews never spend an allowance or call a provider.
  if(!provider.available)return json({error:unavailable,available:false,limit:AI_LIMIT},503);
  let reservation:string|null=null;
  try{
    const subject=await networkKey(req);reservation=await reserve(subject);
    if(!reservation){const quota=await allowance(subject);const retry=Math.max(1,Math.ceil(((quota.resetAt??Date.now()+3600000)-Date.now())/1000));return Response.json({error:'You have used your three AI previews. Please try again when your allowance resets.',...quota},{status:429,headers:{'Cache-Control':'no-store','Retry-After':String(retry)}})}
    const quota=await allowance(subject);
    const controller=new AbortController();let timer:ReturnType<typeof setTimeout>|undefined;
    try{
      const result=await Promise.race([provider.generate(design,controller.signal),new Promise<never>((_,reject)=>{timer=setTimeout(()=>{controller.abort();reject(new Error('Preview timed out'))},45000)})]);
      return json({...result,...quota});
    }finally{clearTimeout(timer)}
  }catch{
    if(reservation)await release(reservation).catch(()=>{});
    return json({error:'We could not create your preview. Please try again shortly.'},503);
  }
}
