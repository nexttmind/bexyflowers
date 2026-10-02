'use client';
import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import {money} from '@/lib/demo-data';
import {rebeccaStudioInspiration} from '@/lib/rebecca-catalog';

export function RebeccaStudioGallery() {
  return (
    <section className="atelier-inspiration section" aria-labelledby="atelier-inspiration-heading">
      <div className="atelier-inspiration-heading">
        <p className="eyebrow">FROM REBECCA&apos;S STUDIO</p>
        <h2 id="atelier-inspiration-heading">Real arrangements you can request</h2>
        <p>Photos from Bexy&apos;s collection. Share a reference when you order—or start from one of these in the atelier above.</p>
      </div>
      <div className="atelier-inspiration-grid">
        {rebeccaStudioInspiration.map(item => (
          <figure key={item.id}>
            <img src={item.image} alt={item.name} width={480} height={600} loading="lazy"/>
            <figcaption>
              <span>{item.name}</span>
              <strong>{money(item.price)}</strong>
            </figcaption>
          </figure>
        ))}
      </div>
      <Link className="outline atelier-inspiration-cta" href="/collection">
        View full collection <ArrowRight size={16}/>
      </Link>
    </section>
  );
}
