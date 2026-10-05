'use client';
import {useEffect} from 'react';
import {PHONE_STATIC_MEDIA} from '@/lib/mobile-motion';

/** Lock full-screen hero height on phones so URL-bar show/hide does not resize cover images (fake “zoom”). */
export function MobileViewportLock(){
  useEffect(()=>{
    const mq=window.matchMedia(PHONE_STATIC_MEDIA);
    const apply=()=>{
      if(!mq.matches){
        document.documentElement.style.removeProperty('--bexy-stable-vh');
        return;
      }
      document.documentElement.style.setProperty('--bexy-stable-vh',`${window.innerHeight*0.01}px`);
    };
    apply();
    const onOrientation=()=>window.setTimeout(apply,150);
    window.addEventListener('orientationchange',onOrientation);
    mq.addEventListener('change',apply);
    return()=>{
      window.removeEventListener('orientationchange',onOrientation);
      mq.removeEventListener('change',apply);
    };
  },[]);
  return null;
}
