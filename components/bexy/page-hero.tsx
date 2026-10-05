'use client';
import Link from 'next/link';
import {ArrowDown,ArrowUpRight} from 'lucide-react';
import {type CSSProperties, type ReactNode} from 'react';
import {EditableSection,EditableText,EditableImage,useCms} from './cms';
import {portraitHeroEditKey} from '@/lib/hero-portrait';

type HeroProps={
  id:string;eyebrow:string;title:ReactNode;description?:string;image?:string;imageMobile?:string;alt?:string;imageKey?:string;
  titleKey?:string;eyebrowKey?:string;descriptionKey?:string;caption?:string;captionKey?:string;
  actions?:{label:string;href?:string;onClick?:()=>void}[];feature?:boolean;contentId?:string;compact?:boolean;contain?:boolean;
  dynamicTitle?:boolean;footTagline?:boolean;className?:string;
};

function HeroArt({id,image,imageMobile,imageKey,alt,feature,objectPosition}:{id:string;image:string;imageMobile?:string;imageKey?:string;alt:string;feature?:boolean;objectPosition?:CSSProperties['objectPosition']}){
  const{cms}=useCms();
  const desktopKey=imageKey??id+'-image';
  const img=<EditableImage editKey={desktopKey} src={image} alt={alt} width="1600" height="1100" fetchPriority={feature?'auto':'high'} loading={feature?'lazy':'eager'} style={{objectPosition}}/>;
  if(!imageMobile)return <figure className="bexy-hero-art">{img}</figure>;
  const mobileKey=portraitHeroEditKey(imageKey);
  const mobileSrc=(mobileKey?cms.entries[mobileKey]?.src:undefined)??imageMobile;
  return <figure className="bexy-hero-art"><picture><source media="(max-width: 760px)" srcSet={mobileSrc}/>{img}</picture></figure>;
}

export function PageHero({id,eyebrow,title,description,image='/images/editorial-signature.webp',imageMobile,alt='',imageKey,titleKey,eyebrowKey,descriptionKey,caption='DESIGNED BY REBECCA · LEBANON',captionKey,actions=[],contentId,dynamicTitle=false,feature=false,footTagline=true,className}:HeroProps){
  const objectPosition=imageKey==='reference-hero-image'?'64% center':id==='pages-section-26'?'50% 35%':'center';
  return <EditableSection editKey={id} className={'bexy-page-hero bexy-immersive-hero'+(feature?' bexy-feature-hero':'')+(className?' '+className:'')}><div className="bexy-hero-layout"><HeroArt id={id} image={image} imageMobile={imageMobile} imageKey={imageKey} alt={alt} feature={feature} objectPosition={objectPosition}/><div className="bexy-hero-shade" aria-hidden="true"/><div className="bexy-hero-copy"><EditableText as="p" className="bexy-hero-eyebrow" editKey={eyebrowKey??id+'-eyebrow'}>{eyebrow}</EditableText>{dynamicTitle?<h1>{title}</h1>:<EditableText as={feature?'h2':'h1'} editKey={titleKey??id+'-title'}>{title}</EditableText>}{description?.trim()?<EditableText as="p" className="bexy-hero-description" editKey={descriptionKey??id+'-description'}>{description}</EditableText>:null}{actions.length>0&&<div className="bexy-hero-actions">{actions.map((a,i)=>a.onClick?<button key={a.label} onClick={a.onClick} className={i===0?'primary':'bexy-quiet-link'}>{a.label}<ArrowUpRight size={17}/></button>:<Link key={a.label} href={a.href??'/collection'} className={i===0?'primary':'bexy-quiet-link'}>{a.label}{i===0?<ArrowUpRight size={17}/>:<ArrowDown size={16}/>}</Link>)}</div>}</div><div className="bexy-hero-foot"><EditableText as="span" editKey={captionKey??id+'-caption'}>{caption}</EditableText>{contentId&&<a href={'#'+contentId} className="bexy-scroll-cue">Scroll to explore <ArrowDown size={17}/></a>}{footTagline?<span>MADE PERSONAL, IN LEBANON</span>:null}</div></div></EditableSection>;
}

export function DiscoverBexy(){return <EditableSection editKey="shared-discover-bexy" className="bexy-discover"><div><EditableText as="p" className="eyebrow" editKey="shared-discover-eyebrow">MORE FROM BEXY</EditableText><EditableText as="h2" editKey="shared-discover-title">Find your next beautiful thing.</EditableText></div><div className="bexy-discover-links">{[{name:'The flower collection',href:'/collection',copy:'From everyday gestures to grand declarations.'},{name:'Made by you',href:'/customize',copy:'Your flowers, your palette, your finishing touch.'},{name:'Weddings & events',href:'/wedding-and-events',copy:'For the moments that become memories.'}].map((a,i)=><Link href={a.href} key={a.href}><span>0{i+1}</span><div><EditableText as="h3" editKey={'shared-discover-card-title-'+i}>{a.name}</EditableText><EditableText as="p" editKey={'shared-discover-card-copy-'+i}>{a.copy}</EditableText></div><ArrowUpRight size={23}/></Link>)}</div></EditableSection>}
