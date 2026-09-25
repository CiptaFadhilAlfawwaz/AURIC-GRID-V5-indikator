import type {Metadata} from 'next';
import {siteConfig} from '@/lib/site-config';
import {pageMetadata} from '@/lib/metadata';
import './globals.css';
export const metadata:Metadata={metadataBase:new URL(siteConfig.siteUrl),...pageMetadata('AURIC | Trading Systems & Market Analysis Tools','AURIC menyediakan automated trading system dan market analysis tools untuk trader MetaTrader dan TradingView.','/'),icons:{icon:'/favicon.svg'},robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="id"><body>{children}<script src="/interactions.js" defer/></body></html>}
