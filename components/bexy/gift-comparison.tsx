'use client';
import Link from 'next/link';
import {useState,type PointerEvent} from 'react';
import {ArrowRight,MoveHorizontal} from 'lucide-react';
import {EditableImage,EditableSection,EditableText} from './cms';

export function GiftComparison(){
  const [split,setSplit]=useState(50);
  const [dragging,setDragging]=useState(false);
  function movePointer(e:PointerEvent<HTMLInputElement>){
    const bounds=e.currentTarget.getBoundingClientRect();
    if(bounds.width>0)setSplit(Math.max(0,Math.min(100,(e.clientX-bounds.left)/bounds.width*100)));
  }
  function startDrag(e:PointerEvent<HTMLInputElement>){
    if(!e.isPrimary||(e.pointerType==='mouse'&&e.button!==0))return;
    e.preventDefault();
    e.currentTarget.focus({preventScroll:true});
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
    movePointer(e);
  }
  function endDrag(e:PointerEvent<HTMLInputElement>){
    if(e.currentTarget.hasPointerCapture(e.pointerId))e.currentTarget.releasePointerCapture(e.pointerId);
    setDragging(false);
  }
  return <EditableSection className="gift-comparison-section" editKey="home-discover-color">
    <div className="gift-comparison-heading">
      <EditableText as="p" className="eyebrow" editKey="gift-comparison-eyebrow">ONE BOX. TWO MOODS.</EditableText>
      <EditableText as="h2" editKey="home-color-title">Discover your color</EditableText>
      <EditableText as="p" editKey="gift-comparison-intro">Slide from a love note to a celebration.</EditableText>
    </div>
    <div className={`gift-comparison${dragging?' is-dragging':''}`} style={{'--split':split+'%'} as React.CSSProperties}>
      <div className="gift-scene gift-scene-birthday"><EditableImage editKey="gift-birthday-scene" src="/images/gift-birthday.webp" alt="Blue and ivory roses in a black gift box with a gold crown and birthday accents" width="1536" height="1024" loading="lazy"/></div>
      <div className="gift-scene gift-scene-valentine" style={{clipPath:`inset(0 ${100-split}% 0 0)`}}><EditableImage editKey="gift-valentine-scene" src="/images/gift-valentine.webp" alt="Red roses in a black gift box with a gold heart and Valentine chocolates" width="1536" height="1024" loading="lazy"/></div>
      <div className="gift-scene-fade" aria-hidden="true"/>
      <div className="gift-side-note gift-side-note-left"><EditableText as="p" editKey="home-red-story">For a love like yours.</EditableText><EditableText as="span" editKey="home-red-story-detail">Red roses. A golden heart.</EditableText></div>
      <div className="gift-side-note gift-side-note-right"><EditableText as="p" editKey="home-blue-story">Their day. Their moment.</EditableText><EditableText as="span" editKey="home-blue-story-detail">Blue blooms. A little crown.</EditableText></div>
      <div className="gift-comparison-line" aria-hidden="true"><span><MoveHorizontal size={22}/></span></div>
      <input className="gift-comparison-range" type="range" min="0" max="100" step="1" value={split} onChange={e=>setSplit(Number(e.target.value))} onPointerDown={startDrag} onPointerMove={e=>{if(e.currentTarget.hasPointerCapture(e.pointerId))movePointer(e)}} onPointerUp={endDrag} onPointerCancel={endDrag} onLostPointerCapture={()=>setDragging(false)} aria-label="Reveal the Valentine or birthday flower box" aria-valuetext={`${Math.round(split)}% Valentine arrangement, ${Math.round(100-split)}% birthday arrangement`}/>
      <div className="gift-theme-switch" aria-label="Choose an arrangement to reveal"><button aria-pressed={split===100} onClick={()=>setSplit(100)}>Valentine’s</button><span aria-hidden="true">/</span><button aria-pressed={split===0} onClick={()=>setSplit(0)}>Birthday</button></div>
      <div className="gift-comparison-links"><div><EditableText as="h3" editKey="gift-valentine-label">The Valentine edit</EditableText><Link href="/customize?theme=valentine#bouquet-workspace">Make it romantic <ArrowRight size={16}/></Link></div><div><EditableText as="h3" editKey="gift-birthday-label">The birthday edit</EditableText><Link href="/customize?theme=birthday#bouquet-workspace">Make it a celebration <ArrowRight size={16}/></Link></div></div>
    </div>
    <p className="gift-comparison-note">Styled inspiration · Rebecca confirms your final flowers and accessories.</p>
  </EditableSection>
}
