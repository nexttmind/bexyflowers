import {Suspense} from 'react';
import {Studio} from '@/components/bexy/studio';
export const metadata={title:'Design Your Bouquet | Bexy Flowers',description:'Choose your flowers, colors, foliage, and finishing touches in the Bexy bouquet studio.'};
export default function Page(){return <Suspense fallback={<div className="loading-surface">Loading…</div>}><Studio/></Suspense>}
