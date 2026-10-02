'use client';
import {useEffect} from 'react';
import {usePathname} from 'next/navigation';
import {useCms} from './cms';
let current:{page:string;viewId:string}|null=null;
let queue:Promise<unknown>=Promise.resolve();
let pending=0;
function send(type:string,extra:Record<string,unknown>={}){if(!current||(type==='heartbeat'&&pending>0))return;const body=JSON.stringify({id:crypto.randomUUID(),...current,type,...extra});pending++;queue=queue.catch(()=>{}).then(()=>fetch('/api/analytics',{method:'POST',headers:{'Content-Type':'application/json'},body,keepalive:true,signal:AbortSignal.timeout(8000)}).catch(()=>{})).finally(()=>{pending--});}
export function recordCartAddition(productId:string,quantity:number){send('cart_add',{productId,quantity})}
export function VisitorTracker(){const path=usePathname();const{user,authLoaded}=useCms();useEffect(()=>{current=null;if(!authLoaded||user?.role==='admin'||!/^\/(?:collection|accessories|about|customize|wedding-and-events|product\/[a-zA-Z0-9_-]+)?$/.test(path))return;current={page:path,viewId:crypto.randomUUID()};let lastInteraction=Date.now(),lastScroll=0,lastPing=Date.now();const reached=new Set<number>();
const ping=()=>{const now=Date.now();if(document.visibilityState!=='visible'||now-lastInteraction>60000)return;if(now-lastPing<15000)return;lastPing=now;send('heartbeat',{scrolling:now-lastScroll<15000})};
const interact=()=>{lastInteraction=Date.now()};
const scroll=()=>{interact();lastScroll=Date.now();const range=document.documentElement.scrollHeight-window.innerHeight;const depth=range>0?Math.min(100,Math.round(window.scrollY/range*100)):0;for(const milestone of [25,50,75,100])if(depth>=milestone&&!reached.has(milestone)){reached.add(milestone);send('scroll',{depth:milestone,scrolling:true})}ping()};
const visible=()=>{if(document.visibilityState==='visible'){interact();ping()}};
if(document.visibilityState==='visible')send('page_view');
const firstVisible=()=>{if(document.visibilityState==='visible'){send('page_view');document.removeEventListener('visibilitychange',firstVisible)}};
if(document.visibilityState!=='visible')document.addEventListener('visibilitychange',firstVisible);
const timer=setInterval(ping,15000);window.addEventListener('scroll',scroll,{passive:true});window.addEventListener('pointerdown',interact,{passive:true});window.addEventListener('keydown',interact);document.addEventListener('visibilitychange',visible);
return()=>{current=null;clearInterval(timer);window.removeEventListener('scroll',scroll);window.removeEventListener('pointerdown',interact);window.removeEventListener('keydown',interact);document.removeEventListener('visibilitychange',visible);document.removeEventListener('visibilitychange',firstVisible)};
},[path,authLoaded,user?.role]);return null}
