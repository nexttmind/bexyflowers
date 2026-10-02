import {ProductPage} from '@/components/bexy/product-page';
export const metadata={title:'Flower arrangements | Bexy Flowers'};
export default async function Page({params}:{params:Promise<{id:string}>}){const{id}=await params;return <ProductPage id={id}/>}
