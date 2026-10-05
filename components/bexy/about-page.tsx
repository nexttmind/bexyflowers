'use client';
import {AboutReferenceContent} from './about-reference';
import {PageHero} from './page-hero';

export function AboutPage(){
  return <>
    <PageHero
      id="pages-section-26"
      className="about-page-hero"
      eyebrow="ABOUT BEXY"
      eyebrowKey="pages-p-27"
      title="Rebecca's flowers, made personal."
      titleKey="pages-h1-28"
      image="/images/about-hero.png"
      imageKey="pages-image-31"
      alt="Florist with bouquets by stone windows at Bexy Flowers"
      caption="REBECCA · LEBANON"
      captionKey="pages-figcaption-32"
      actions={[{label:'Our story',href:'#bexy-story'}]}
      contentId="bexy-story"
      footTagline={false}
    />
    <AboutReferenceContent/>
  </>;
}
