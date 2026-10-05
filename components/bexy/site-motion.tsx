'use client';
import {useEffect} from 'react';
import {usePathname} from 'next/navigation';
import {useCmsSafe} from './cms';
import {clearRevealMotionStyles,isDesktopRevealMotionEnabled,DESKTOP_REVEAL_MEDIA} from '@/lib/mobile-motion';

export function SiteMotion(){
  const path=usePathname();
  const editing=useCmsSafe()?.editing??false;
  useEffect(()=>{
    if(path.startsWith('/admin')||editing)return;
    const desktop=window.matchMedia(DESKTOP_REVEAL_MEDIA);
    const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
    const canReveal=()=>isDesktopRevealMotionEnabled();
    if(!canReveal()){
      clearRevealMotionStyles();
      const sync=()=>{if(!canReveal())clearRevealMotionStyles()};
      desktop.addEventListener('change',sync);
      reduceMotion.addEventListener('change',sync);
      return()=>{desktop.removeEventListener('change',sync);reduceMotion.removeEventListener('change',sync)};
    }
    const seen=new WeakSet<Element>();
    const animations=new Set<Animation>();
    let frame=0;
    const observer=new IntersectionObserver(entries=>{
      for(const e of entries){
        if(!e.isIntersecting||!canReveal())continue;
        observer.unobserve(e.target);
        const animation=e.target.animate([{opacity:.15,transform:'translateY(18px)'},{opacity:1,transform:'translateY(0)'}],{duration:850,easing:'cubic-bezier(.22,1,.36,1)'});
        animations.add(animation);
        animation.onfinish=()=>animations.delete(animation);
      }
    },{threshold:.08});
    const scan=()=>{
      frame=0;
      if(!canReveal())return;
      document.querySelectorAll('.story-step,.story-heading,.reference-section-heading,.about-contact,.bexy-discover,.bexy-hero-copy').forEach(el=>{
        if(seen.has(el))return;
        seen.add(el);
        observer.observe(el);
      });
    };
    const changes=new MutationObserver(()=>{if(!frame)frame=requestAnimationFrame(scan)});
    scan();
    changes.observe(document.body,{childList:true,subtree:true});
    const stop=()=>{
      if(canReveal())return;
      observer.disconnect();
      animations.forEach(a=>a.cancel());
      animations.clear();
      clearRevealMotionStyles();
    };
    const onViewportChange=()=>{stop();if(canReveal())scan()};
    desktop.addEventListener('change',onViewportChange);
    reduceMotion.addEventListener('change',onViewportChange);
    return()=>{
      observer.disconnect();
      changes.disconnect();
      cancelAnimationFrame(frame);
      animations.forEach(a=>a.cancel());
      desktop.removeEventListener('change',onViewportChange);
      reduceMotion.removeEventListener('change',onViewportChange);
    };
  },[path,editing]);
  return null;
}
