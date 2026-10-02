import type {Metadata} from 'next';
import './globals.css';
import './reference.css';
import './atelier.css';
import './editorial.css';
import './bexy-design.css';
import './immersive.css';
import './gift-edits.css';
import './shopping-refinements.css';
import './luxury-motion.css';
import './mobile-menu.css';
import {SiteMotion} from '@/components/bexy/site-motion';
import {VisitorTracker} from '@/components/bexy/visitor-tracker';
import {CmsProvider} from '@/components/bexy/cms';
import {ShopProvider,Shell} from '@/components/bexy/shop';
export const metadata:Metadata={title:'Bexy Flowers | Made for your kind of love',description:'Thoughtfully designed flowers by Rebecca. Explore signature bouquets, celebrate your moments, or design something uniquely yours. Based in Lebanon.',icons:{icon:'/images/logo.webp'}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><CmsProvider><ShopProvider><VisitorTracker/><SiteMotion/><Shell>{children}</Shell></ShopProvider></CmsProvider></body></html>}
