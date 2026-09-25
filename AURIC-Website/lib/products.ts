import {siteConfig} from './site-config';

export type Product = {
  slug: string; productName: string; productType: 'ea' | 'indicator';
  tagline: string; description: string; platform: string; instrument?: string;
  path: string; whatsappMessage: string; price?: string;
  features: {title: string; description: string}[];
  screenshot: {src: string; original: string; width: number; height: number; alt: string; caption: string};
};

export const indicatorPurchase = {
  price: 'Rp110.000',
  model: 'Sekali Bayar · Akses Seumur Hidup',
  includes: ['Full Source Code', 'Penggunaan tanpa batas waktu', 'Tanpa biaya bulanan', 'Tanpa perpanjangan'],
  delivery: 'Full source code diberikan langsung oleh admin setelah pembelian selesai.',
  license: 'Source code boleh digunakan dan dimodifikasi untuk kebutuhan pribadi. Distribusi ulang, publikasi source code, dan penjualan kembali tidak diperbolehkan tanpa izin AURIC.',
};

export const brand = {
  name: 'AURIC', tagline: 'Trading Systems & Market Analysis Tools',
  message: 'Halo, saya tertarik dengan produk AURIC. Saya ingin tanya detail Expert Advisor dan trading indicators.',
};

export const products: Product[] = [
  {
    slug: 'auric-grid-v5', productName: 'AURIC GRID V5', productType: 'ea',
    tagline: 'Automated XAUUSD Trading System', platform: 'MetaTrader 5', instrument: 'XAUUSD',
    path: '/ea/auric-grid-v5/', price: `${siteConfig.price} / ${siteConfig.rentalDays} Hari`,
    description: 'Expert Advisor untuk MetaTrader 5 yang dirancang untuk mengelola proses trading secara otomatis.',
    whatsappMessage: siteConfig.whatsappMessage,
    features: [{title:'Automated Trading',description:'Proses trading dikelola dalam satu siklus sistem.'},{title:'VPS & Setup',description:'Termasuk VPS dan pemasangan awal oleh admin.'}],
    screenshot: {src:siteConfig.screenshot,original:siteConfig.screenshot,width:882,height:255,alt:'Rekap backtest asli AURIC GRID V5',caption:'EA DASHBOARD · BACKTEST / TESTING ENVIRONMENT'},
  },
  {
    slug: 'auric-smc-signal', productName: 'AURIC SMC SIGNAL', productType: 'indicator',
    tagline: 'Smart Money Entry & Structure Indicator', platform: 'TradingView', instrument: 'XAUUSD pada screenshot',
    path: '/indicators/auric-smc-signal/', price: indicatorPurchase.price,
    description: 'Trading indicator yang menggabungkan pembacaan struktur market dan area setup untuk membantu trader melakukan analisis secara lebih terstruktur.',
    whatsappMessage: 'Halo, saya tertarik membeli AURIC SMC SIGNAL seharga Rp110.000. Saya ingin tanya detail pembelian dan full source code indikatornya.',
    features: [
      {title:'Market Structure',description:'Penanda BOS dan CHoCH membantu membaca perubahan struktur harga.'},
      {title:'Entry & Signal Visualization',description:'Label BUY / SELL, area entry, serta visual TP / SL memberi konteks pada setup yang ditampilkan.'},
      {title:'Liquidity',description:'Penanda liquidity sweep membantu mengamati pergerakan harga di sekitar area likuiditas.'},
      {title:'Supply & Demand',description:'Zona supply dan demand menandai area penting untuk diperhatikan dalam analisis.'},
      {title:'Fair Value Gap',description:'Label FVG pada chart menampilkan area ketidakseimbangan harga sebagai konteks analisis.'},
      {title:'Market Bias',description:'Panel bias merangkum konteks arah market yang ditampilkan indikator.'},
    ],
    screenshot: {src:'/assets/smc-signal-chart.webp',original:'/assets/smc-signal-original.png',width:1736,height:851,alt:'Screenshot asli TradingView dengan BUY SELL, BOS, CHoCH, liquidity sweep, zona entry dan panel bias',caption:'AURIC SMC SIGNAL · CHART VIEW'},
  },
  {
    slug: 'auric-momentum', productName: 'AURIC MOMENTUM', productType: 'indicator',
    tagline: 'Momentum Candle Indicator', platform: 'TradingView', instrument: 'XAUUSD pada screenshot',
    path: '/indicators/auric-momentum/', price: indicatorPurchase.price,
    description: 'Indicator yang membantu mengidentifikasi candle dengan momentum kuat untuk memberikan konteks tambahan dalam membaca pergerakan market.',
    whatsappMessage: 'Halo, saya tertarik membeli AURIC MOMENTUM seharga Rp110.000. Saya ingin tanya detail pembelian dan full source code indikatornya.',
    features: [
      {title:'Momentum Detection',description:'Membantu memperhatikan candle dengan pergerakan kuat sebagai bagian dari pembacaan market.'},
      {title:'Candle Visualization',description:'Baca candle dalam konteks pergerakan harga di chart, lalu bandingkan dengan area yang Anda amati.'},
      {title:'Analysis Context',description:'Gunakan momentum sebagai informasi tambahan bersama struktur market dan rencana risiko Anda.'},
    ],
    screenshot: {src:'/assets/momentum-chart.webp',original:'/assets/momentum-original.png',width:1790,height:818,alt:'Cuplikan chart TradingView asli dari referensi indikator momentum pemilik',caption:'AURIC MOMENTUM · CHART REFERENCE'},
  },
];

export const indicators = products.filter(product => product.productType === 'indicator');
