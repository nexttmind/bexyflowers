import {Suspense} from 'react';
import {Catalogue} from '@/components/bexy/catalogue';
export const metadata={title:'Accessories | Bexy Flowers',description:'Crowns and playful character toppers for a personal flower arrangement.'};
export default function Page(){return <Suspense fallback={<div className="loading-surface">Loading accessories…</div>}><Catalogue accessories/></Suspense>}
