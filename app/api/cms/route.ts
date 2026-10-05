import {z} from 'zod';
import {initialCms,upgradeCms} from '@/lib/demo-data';
import {CMS_IMAGE_ERROR,isValidCmsImageSrc} from '@/lib/cms-image';
import {identity,sameOrigin,readData,writeData,json} from '@/lib/server-demo';
const image=z.string().max(1000).refine(isValidCmsImageSrc,CMS_IMAGE_ERROR);
const optionalImage=z.preprocess(v=>(typeof v==='string'&&!v.trim()?undefined:v),image.optional());
const schema=z.object({entries:z.record(z.object({text:z.string().max(5000).optional(),src:optionalImage,alt:z.string().max(300).optional(),hidden:z.boolean().optional()})),products:z.array(z.object({id:z.string().min(1).max(100),name:z.string().min(1).max(200),category:z.string().min(1).max(100),image,description:z.string().max(2000),tag:z.string().max(100).optional(),price:z.number().int().min(0).max(100000000),cost:z.number().int().min(0).max(100000000),discount:z.number().min(0).max(100),stock:z.number().int().min(0).max(100000),active:z.boolean(),kind:z.enum(['flower','accessory']).optional(),occasions:z.array(z.string().max(100)).max(20).optional(),years:z.array(z.number().int().min(2000).max(2100)).max(30).optional()})).max(300)});
// Coalesce simultaneous catalogue reads within each Worker. Orders still read fresh prices.
let cached:ReturnType<typeof upgradeCms>|undefined,expires=0,pending:Promise<ReturnType<typeof upgradeCms>>|undefined;
let revision=0;
async function catalogue(){if(cached&&Date.now()<expires)return cached;if(pending)return pending;const generation=revision;const work=readData('cms',initialCms).then(upgradeCms).then(data=>{if(generation===revision){cached=data;expires=Date.now()+15000}return data});pending=work;try{return await work}finally{if(pending===work)pending=undefined}}
export async function GET(){try{return json(await catalogue())}catch{return json({error:'Unable to load the store content.'},503)}}
export async function POST(req:Request){try{if(!sameOrigin(req)||(await identity(req))?.role!=='admin')return json({error:'Admin sign-in required.'},403);const raw=await req.text();if(raw.length>1000000)return json({error:'Content is too large.'},413);const data=schema.parse(JSON.parse(raw));if(new Set(data.products.map(p=>p.id)).size!==data.products.length)return json({error:'Product IDs must be unique.'},400);await writeData('cms',data);revision++;cached=upgradeCms(data);expires=Date.now()+15000;pending=undefined;return json(data)}catch(e){return json({error:e instanceof z.ZodError?e.issues[0].message:'Could not save your changes.'},400)}}
