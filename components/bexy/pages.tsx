'use client';
import {EditableText,EditableImage,EditableSection} from "./cms";
import Link from 'next/link';
import {AboutTimeline} from './about-timeline';
import {StudioMoments,CustomerStories} from './store-content';
import {PageHero} from './page-hero';
import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, Flower2, Heart, Gift, Sparkles, Search, SlidersHorizontal } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { products as originalProducts, categories as originalCategories } from '@/lib/catalog';
import { useCms } from './cms';
import { ProductCard, useShop } from './shop';
export {HomePage} from './home';
export {Catalogue as CollectionPage} from './catalogue';
export function AboutPage() { const {cms}=useCms();const whatsapp='https://wa.me/'+(cms.entries['settings-phone']?.text??'96176104882').replace(/[^0-9]/g,'');const instagram='https://www.instagram.com/'+(cms.entries['settings-instagram']?.text??'bexyflowers').replace(/[^a-zA-Z0-9_.]/g,'')+'/';return <><PageHero id="pages-section-26" eyebrow="THE HEART OF BEXY" eyebrowKey="pages-p-27" title={<>A love for flowers.<br/>An eye for you.</>} titleKey="pages-h1-28" description="Bexy Flowers is Rebecca’s floral world in Lebanon: thoughtful gifts, personal details, and arrangements that feel like the person receiving them." descriptionKey="pages-p-29" image="/images/about.jpg" imageKey="pages-image-31" alt="Rebecca’s floral world, from the original Bexy Flowers About page" caption="WITH LOVE, REBECCA" captionKey="pages-figcaption-32" actions={[{label:'Meet the Bexy spirit',href:'#bexy-story'}]} contentId="bexy-story"/><AboutTimeline/><StudioMoments/><CustomerStories/><EditableSection className="about-contact" editKey="pages-section-42"><EditableText className="eyebrow" editKey="pages-p-43" as="p">LET’S CREATE SOMETHING LOVELY</EditableText><EditableText editKey="pages-h2-44" as="h2">Tell Rebecca what <em>you’re imagining.</em></EditableText><EditableText editKey="pages-p-45" as="p">For custom requests, wedding flowers, and questions about an arrangement.</EditableText><div className="hero-actions"><a className="primary" href={whatsapp} target="_blank" rel="noreferrer">Chat on WhatsApp <ArrowUpRight size={18}/></a><a className="text-link" href={instagram} target="_blank" rel="noreferrer">Follow @{cms.entries['settings-instagram']?.text??'bexyflowers'} <ArrowUpRight size={17}/></a></div></EditableSection></>; }
