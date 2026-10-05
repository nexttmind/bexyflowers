'use client';
import Link from 'next/link';
import {ArrowUpRight,Award,Gem,Heart,Leaf,Sparkles,Star} from 'lucide-react';
import {EditableSection,EditableText} from './cms';

export function AboutReferenceContent(){
  return <>
    <EditableSection className="about-ref-story" id="bexy-story" editKey="about-ref-story">
      <EditableText as="h2" editKey="about-ref-story-title">Our Story</EditableText>
      <div className="about-ref-story-copy">
        <p>
          Founded in <span className="about-ref-em">2024</span>, our flower boutique has quickly become a <span className="about-ref-em">pioneer</span> in Lebanon&apos;s floral industry. We proudly established the country&apos;s first <span className="about-ref-em">glitter flower shop</span>, introducing a unique and creative concept that combines <span className="about-ref-em">beauty</span>, <span className="about-ref-em">artistry</span>, and <span className="about-ref-em">personalization</span>.
        </p>
        <p>
          Whether for <span className="about-ref-em">weddings</span>, <span className="about-ref-em">events</span>, or <span className="about-ref-em">personal gifting</span>, we are committed to redefining the art of floral design in Lebanon, offering products that blend <span className="about-ref-em">tradition</span> with <span className="about-ref-em">modern creativity</span>.
        </p>
      </div>
    </EditableSection>

    <EditableSection className="about-ref-mv" editKey="about-ref-mission-vision">
      <article>
        <span className="about-ref-icon" aria-hidden="true"><Star size={22} strokeWidth={1.4}/></span>
        <EditableText as="h3" editKey="about-ref-mission-label">Our Mission</EditableText>
        <EditableText as="p" editKey="about-bexy-mission">To craft breathtaking floral narratives that turn your cherished moments into unforgettable memories.</EditableText>
      </article>
      <article>
        <span className="about-ref-icon" aria-hidden="true"><Gem size={22} strokeWidth={1.4}/></span>
        <EditableText as="h3" editKey="about-ref-vision-label">Our Vision</EditableText>
        <EditableText as="p" editKey="about-bexy-vision">To be Lebanon&apos;s most sought-after floral couturier, celebrated for our pioneering designs and artistry.</EditableText>
      </article>
    </EditableSection>

    <EditableSection className="about-ref-stats" editKey="about-ref-stats" aria-label="Bexy Flowers highlights">
      <div><strong>15k+</strong><span>Bouquets Delivered</span></div>
      <div><strong>5.0★</strong><span>Average Rating</span></div>
      <div><span className="about-ref-icon about-ref-icon--stat" aria-hidden="true"><Heart size={20} strokeWidth={1.4}/></span><strong>24/7</strong><span>Online Ordering</span></div>
      <div><span className="about-ref-icon about-ref-icon--stat" aria-hidden="true"><Award size={20} strokeWidth={1.4}/></span><strong>25+</strong><span>Years Combined Experience</span></div>
    </EditableSection>

    <EditableSection className="about-ref-values" editKey="about-ref-values">
      <EditableText as="h2" editKey="about-ref-values-title">Our Core Values</EditableText>
      <div className="about-ref-values-grid">
        <article>
          <span className="about-ref-icon about-ref-icon--value" aria-hidden="true"><Sparkles size={22} strokeWidth={1.4}/></span>
          <EditableText as="h3" editKey="about-ref-value-1-title">Innovation</EditableText>
          <EditableText as="p" editKey="about-ref-value-1-copy">Forward-thinking design techniques and trends.</EditableText>
        </article>
        <article>
          <span className="about-ref-icon about-ref-icon--value" aria-hidden="true"><Leaf size={22} strokeWidth={1.4}/></span>
          <EditableText as="h3" editKey="about-ref-value-2-title">Sustainability</EditableText>
          <EditableText as="p" editKey="about-ref-value-2-copy">Responsible sourcing and mindful operations.</EditableText>
        </article>
        <article>
          <span className="about-ref-icon about-ref-icon--value" aria-hidden="true"><Heart size={22} strokeWidth={1.4}/></span>
          <EditableText as="h3" editKey="about-ref-value-3-title">Authenticity</EditableText>
          <EditableText as="p" editKey="about-ref-value-3-copy">Honest craft that honors nature&apos;s beauty.</EditableText>
        </article>
      </div>
    </EditableSection>

    <EditableSection className="about-ref-cta" editKey="about-ref-cta">
      <EditableText as="h2" editKey="about-ref-cta-title">Ready to Create Something Beautiful?</EditableText>
      <EditableText as="p" editKey="about-ref-cta-copy">Whether it&apos;s a gift for a loved one or a stunning centerpiece for your event, let us bring your vision to life.</EditableText>
      <div className="about-ref-cta-actions">
        <Link className="primary" href="/collection">Explore Collections <ArrowUpRight size={18}/></Link>
        <Link className="outline about-ref-cta-secondary" href="/customize">Request a Custom Design ✨</Link>
      </div>
    </EditableSection>
  </>;
}
