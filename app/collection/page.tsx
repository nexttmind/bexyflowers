import {Suspense} from 'react';
import {CollectionPage} from '@/components/bexy/pages';
export const metadata={title:'Collections | Bexy Flowers',description:'Explore Bexy floral arrangements for gifting, celebrations, and weddings in Lebanon.'};
export default function Page(){return <Suspense fallback={<div className="loading-surface">Loading…</div>}><CollectionPage/></Suspense>}
