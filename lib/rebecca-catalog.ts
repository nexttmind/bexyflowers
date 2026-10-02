import type {Product} from './catalog';

/** Real Bexy arrangements from Rebecca’s asset library (Google Drive export). */
export const rebeccaCatalogProducts: Product[] = [
  {id:'jouri-bouquet',name:'Jouri Bouquet',category:'Signature bouquets',image:'/images/catalog/jouri-bouquet.jpg',description:'20 real roses with glitter and gypsophila. Personalize size and finishing touches with Rebecca.',tag:'Glitter finish',price:8000,cost:3200,kind:'flower',active:true,stock:12,discount:0,years:[2026,2025],occasions:['Just because','Valentine’s Day','Anniversaries']},
  {id:'letter-bouquet',name:'Letter Bouquet',category:'Signature bouquets',image:'/images/catalog/letter-bouquet.jpg',description:'50 real red roses with glitter and a customized letter in gypsophila.',tag:'Custom letter',price:16000,cost:6400,kind:'flower',active:true,stock:8,discount:0,years:[2026,2025],occasions:['Anniversaries','Valentine’s Day','Birthdays']},
  {id:'mini-eternal-bouquet',name:'Mini Eternal Bouquet',category:'Eternal flowers',image:'/images/catalog/mini-eternal-bouquet.jpg',description:'7 eternal flowers in beige with a crown finish.',price:2500,cost:1000,kind:'flower',active:true,stock:20,discount:0,years:[2026,2025],occasions:['Birthdays','Just because','Graduation']},
  {id:'diana-box',name:'Diana Box',category:'Luxury boxes',image:'/images/catalog/diana-box.jpg',description:'Medium luxury box with real roses and a glitter finish.',tag:'Glitter finish',price:8000,cost:3200,kind:'flower',active:true,stock:10,discount:0,years:[2026,2025],occasions:['Valentine’s Day','Mother’s Day','Just because']},
  {id:'eternal-bouquet-red-glitter',name:'Eternal Bouquet',category:'Eternal flowers',image:'/images/catalog/eternal-bouquet-15-red.jpg',description:'15 eternal flowers in red with glitter—a lasting statement piece.',tag:'Eternal · Glitter',price:5000,cost:2000,kind:'flower',active:true,stock:15,discount:0,years:[2026,2025],occasions:['Valentine’s Day','Anniversaries','Just because']},
  {id:'stitch-bouquet',name:'Stitch Bouquet',category:'Character bouquets',image:'/images/catalog/stitch-bouquet.jpg',description:'Eternal flowers in shades of blue with a playful Stitch-inspired finish.',price:7000,cost:2800,kind:'flower',active:true,stock:10,discount:0,years:[2026,2025],occasions:['Birthdays','Just because']},
  {id:'heart-box',name:'Heart Box',category:'Luxury boxes',image:'/images/catalog/heart-box.jpg',description:'Real red roses arranged in a heart-shaped luxury box.',price:10000,cost:4000,kind:'flower',active:true,stock:8,discount:0,years:[2026,2025],occasions:['Valentine’s Day','Anniversaries']},
  {id:'graduation-bouquet-gypsophila',name:'Graduation Bouquet',category:'Graduation',image:'/images/catalog/graduation-bouquet.jpg',description:'10 real roses with gypsophila and a graduation hat detail.',price:5000,cost:2000,kind:'flower',active:true,stock:14,discount:0,years:[2026,2025],occasions:['Graduation']},
  {id:'graduation-box-roses',name:'Graduation Box',category:'Graduation',image:'/images/catalog/graduation-box.jpg',description:'Real roses with gypsophila in a medium graduation gift box.',price:7500,cost:3000,kind:'flower',active:true,stock:12,discount:0,years:[2026,2025],occasions:['Graduation']},
  {id:'customized-bouquet-letter',name:'Customized Bouquet',category:'Custom creations',image:'/images/catalog/customized-bouquet.jpg',description:'30 real white roses with a letter in gypsophila and customized picture details.',tag:'Made for you',price:13000,cost:5200,kind:'flower',active:true,stock:6,discount:0,years:[2026,2025],occasions:['Anniversaries','Birthdays','Just because']},
  {id:'customized-box-medium',name:'Customized Box',category:'Custom creations',image:'/images/catalog/customized-box.jpg',description:'Medium luxury box with real flowers in your chosen color palette (products not included).',tag:'Made for you',price:9000,cost:3600,kind:'flower',active:true,stock:8,discount:0,years:[2026,2025],occasions:['Birthdays','Mother’s Day','Just because']},
  {id:'bridal-bouquet-fake',name:'Bridal Bouquet (Artificial)',category:'Weddings',image:'/images/catalog/bridal-bouquet-fake.jpg',description:'A lasting bridal bouquet with artificial flowers—ideal for keepsake and rehearsal.',price:10000,cost:4000,kind:'flower',active:true,stock:6,discount:0,years:[2026,2025],occasions:['Weddings']},
];

/** Homepage “Latest arrangements” order (Jouri first; user referred to this as “Jewelry/Jouri”). */
export const featuredHomeIds = rebeccaCatalogProducts.map(p => p.id);

export const rebeccaWeddingPortfolio = [
  {id:'portfolio-bridal-fake',image:'/images/catalog/bridal-bouquet-fake.jpg',category:'Weddings' as const,caption:'Bridal bouquet · artificial flowers · $100'},
  {id:'portfolio-custom-bouquet',image:'/images/catalog/customized-bouquet.jpg',category:'Weddings' as const,caption:'Customized bouquet · letter detail · from $130'},
  {id:'portfolio-letter-bouquet',image:'/images/catalog/letter-bouquet.jpg',category:'Weddings' as const,caption:'Letter bouquet · red roses with glitter · $160'},
  {id:'portfolio-heart-box',image:'/images/catalog/heart-box.jpg',category:'Events' as const,caption:'Heart box · real red roses · $100'},
  {id:'portfolio-diana-box',image:'/images/catalog/diana-box.jpg',category:'Events' as const,caption:'Diana box · roses with glitter · $80'},
];

export const rebeccaStudioInspiration = [
  {id:'inspo-stitch',image:'/images/catalog/stitch-bouquet.jpg',name:'Stitch Bouquet',price:7000},
  {id:'inspo-custom-box',image:'/images/catalog/customized-box.jpg',name:'Customized Box',price:9000},
  {id:'inspo-custom-bouquet',image:'/images/catalog/customized-bouquet.jpg',name:'Customized Bouquet',price:13000},
  {id:'inspo-mini-eternal',image:'/images/catalog/mini-eternal-bouquet.jpg',name:'Mini Eternal Bouquet',price:2500},
  {id:'inspo-jouri',image:'/images/catalog/jouri-bouquet.jpg',name:'Jouri Bouquet',price:8000},
  {id:'inspo-letter',image:'/images/catalog/letter-bouquet.jpg',name:'Letter Bouquet',price:16000},
];

export function sortProductsForHome(products: Product[]): Product[] {
  const rank = new Map(featuredHomeIds.map((id, i) => [id, i]));
  return [...products].sort((a, b) => {
    const ra = rank.get(a.id) ?? 999;
    const rb = rank.get(b.id) ?? 999;
    if (ra !== rb) return ra - rb;
    return a.name.localeCompare(b.name);
  });
}
