import type {Product} from './catalog';
import type {CmsEntry} from './demo-data';
type Entries=Record<string,CmsEntry>;
export const bouquetSizes=['Petite','Signature','Grand'] as const;
export function sizeBasePrice(p:Product,size:string,entries:Entries={}){
 const raw=entries[`product-${p.id}-price-${size.toLowerCase()}`]?.text?.trim();
 const custom=raw?Number(raw):NaN;
 if(p.kind!=='accessory'&&Number.isFinite(custom)&&custom>=0&&custom<=1000000)return Math.round(custom*100);
 const multiplier=p.kind==='accessory'?1:size==='Petite'?.7:size==='Grand'?1.4:1;
 return Math.round((p.price??0)*multiplier);
}
export function productUnitPrice(p:Product,size:string,entries:Entries={}){return Math.round(sizeBasePrice(p,size,entries)*(1-(p.discount??0)/100))}
export function sizeDescription(p:Product,size:string,entries:Entries={}){return entries[`product-${p.id}-size-${size.toLowerCase()}`]?.text||({Petite:'A smaller gesture.',Signature:'Our signature presentation.',Grand:'A fuller statement.'} as Record<string,string>)[size]||'One size'}
export const productHref=(id:string)=>'/product/'+encodeURIComponent(id);
