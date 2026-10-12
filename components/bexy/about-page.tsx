'use client';
import {AboutReferenceContent} from './about-reference';
import {PageHero} from './page-hero';

export function AboutPage(){
  return <>
    <PageHero
      id="pages-section-26"
      className="about-page-hero"
      eyebrow="MEET BEXY FLOWERS"
      eyebrowKey="pages-p-27"
      title={<>Personal flowers,<br/>from Rebecca&apos;s studio.</>}
      titleKey="pages-h1-28"
      description="In Lebanon, Rebecca designs bouquets for everyday love, milestone celebrations, and weddings—each one shaped around your colors, your story, and the feeling you want to leave behind."
      descriptionKey="pages-about-hero-description"
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
