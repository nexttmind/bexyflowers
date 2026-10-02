import type {AtelierConfig} from './atelier';
export type Product = {id:string;name:string;category:string;image:string;description:string;tag?:string;price?:number;cost?:number;discount?:number;stock?:number;active?:boolean;kind?:'flower'|'accessory';occasions?:string[];years?:number[]};
export const products:Product[]=[
{id:'glitter',name:'The Glitter Bouquet',category:'Signature bouquets',image:'/images/glitter.webp',description:'A statement bouquet of red roses with a sparkling finish. Personalize the size and finishing touches with Rebecca.',tag:'Bexy signature'},
{id:'valentine',name:'A Little Romance',category:'Love & romance',image:'/images/valentine.webp',description:'A romantic floral design from the Bexy collection, made personal for someone you love.'},
{id:'mothers',name:'For Her, Always',category:'Everyday flowers',image:'/images/mothers.webp',description:'A thoughtful arrangement for a thank-you, a celebration, or simply because you thought of her.',tag:'A thoughtful gesture'},
{id:'birthday',name:'Birthday Wishes',category:'Celebrations',image:'/images/birthday.webp',description:'A celebratory floral creation. Add a personal message and make their day a little brighter.'},
{id:'wedding',name:'The Wedding Edit',category:'Weddings',image:'/images/wedding.webp',description:'Floral design for your wedding, tailored to your colors, venue, and vision. Request a consultation with Rebecca.'},
{id:'graduation',name:'A Beautiful Beginning',category:'Celebrations',image:'/images/graduation.webp',description:'Celebrate a new chapter with a floral arrangement designed to mark the moment.'},
];
export const categories=['All flowers','Signature bouquets','Love & romance','Everyday flowers','Celebrations','Weddings','Eternal flowers','Luxury boxes','Graduation','Custom creations','Character bouquets'];
export type BouquetConfig={atelier?:AtelierConfig;roses:number;tulips:number;peonies:number;roseColor:string;tulipColor:string;leaves:boolean;glitter:boolean;stemLength:number;wrap:string;note:string};
export const initialBouquet:BouquetConfig={roses:9,tulips:5,peonies:3,roseColor:'#ed8bab',tulipColor:'#f4ce56',leaves:true,glitter:false,stemLength:65,wrap:'#eeded7',note:''};
export type CartItem={key:string;productId:string;quantity:number;size:string;note:string;config?:BouquetConfig};
export type StoreData={cart:CartItem[];favorites:string[];design:BouquetConfig|null};

export const occasionEdits=[
{id:'weddings',name:'Weddings',image:'original-occasions/weddings'},
{id:'valentine',name:'Valentine’s Day',image:'original-occasions/valentine'},
{id:'mothers',name:'Mother’s Day',image:'original-occasions/mothers'},
{id:'birthdays',name:'Birthdays',image:'original-occasions/birthdays'},
{id:'anniversaries',name:'Anniversaries',image:'original-occasions/anniversaries'},
{id:'corporate',name:'Corporate',image:'original-occasions/corporate'},
{id:'seasonal',name:'Seasonal',image:'original-occasions/seasonal'},
{id:'graduation',name:'Graduation',image:'original-occasions/graduation'},
{id:'luxury',name:'Luxury gifts',image:'original-occasions/luxury'},
{id:'fathers',name:'Father’s Day',image:'graduation'},
{id:'just-because',name:'Just because',image:'mothers'},
];
export const occasions=occasionEdits.map(o=>o.name);
export const occasionProducts:Product[]=[
{id:'anniversary-edit',name:'Letters of Love',category:'Love & romance',image:'/images/anniversary.webp',description:'Personal red rose lettering to celebrate your story. A mock arrangement; Rebecca confirms your letter and final quote.',price:9500,cost:3800,occasions:['Anniversaries','Valentine’s Day']},
{id:'corporate-edit',name:'The Event Arrangement',category:'Events',image:'/images/corporate.webp',description:'Floral styling for receptions, launches and corporate celebrations. Request a tailored quote from Rebecca.',price:22000,cost:8800,occasions:['Corporate','Weddings']},
{id:'seasonal-edit',name:'The Floral Wristlet',category:'Seasonal flowers',image:'/images/seasonal.webp',description:'A delicate floral wristlet inspired by the original seasonal collection. Mock availability; flowers vary with the season.',price:3500,cost:1400,occasions:['Seasonal','Graduation','Birthdays']},
{id:'luxury-edit',name:'The Grand Rose Bouquet',category:'Signature bouquets',image:'/images/glitter.webp',description:'A generous rose bouquet with Bexy’s signature sparkle. A mock luxury edit, finished to your request.',price:15000,cost:6000,occasions:['Luxury gifts','Anniversaries','Just because']},
].map(p=>({...p,kind:'flower',active:true,stock:12,discount:0,years:[2026,2025]} as Product));
export const accessoryCategories=['Crowns','Characters'];
export const accessoryProducts:Product[]=[
{id:'accessory-crown',name:'The Golden Crown',category:'Crowns',kind:'accessory',image:'/images/accessory-crown.webp',description:'A miniature gold crown to finish your bouquet with a royal touch. Mock accessory; final availability confirmed by Rebecca.',price:500,cost:200,stock:30,discount:0,active:true,tag:'Finishing touch',years:[2026,2025],occasions:['Birthdays','Mother’s Day','Valentine’s Day']},
{id:'accessory-spiderman',name:'Spider-Man Bouquet Topper',category:'Characters',kind:'accessory',image:'/images/accessory-spiderman.webp',description:'A playful character accent for your flower arrangement. Third-party example figurine photo, not Rebecca’s actual stock. Final accessory style and availability confirmed by Rebecca.',price:800,cost:300,stock:20,discount:0,active:true,years:[2026,2025],occasions:['Birthdays','Father’s Day']},
{id:'accessory-minion',name:'Minion Bouquet Topper',category:'Characters',kind:'accessory',image:'/images/accessory-minion.webp',description:'A cheerful character accent for a bouquet with personality. Third-party example figurine photo, not Rebecca’s actual stock. Final accessory style and availability confirmed by Rebecca.',price:800,cost:300,stock:20,discount:0,active:true,years:[2026,2025],occasions:['Birthdays','Graduation']}
];
export const bouquetByColor=(color:string|null,saved:BouquetConfig|null=null):BouquetConfig=>color==='red'||color==='blue'?{...initialBouquet,roses:15,tulips:0,peonies:0,roseColor:color==='red'?'#aa253a':'#315dbb',wrap:'#302b2b'}:saved??initialBouquet;
