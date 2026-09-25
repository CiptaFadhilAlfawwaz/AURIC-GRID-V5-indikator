import {type Product,indicatorPurchase} from '@/lib/products';
import {Arrow,SectionLabel,WhatsAppLink} from './shared';

export function IndicatorPricing({product}:{product:Product}){
  return <section className="section container indicator-purchase" id="pricing">
    <div className="indicator-purchase-copy">
      <SectionLabel number="04">ONE-TIME PURCHASE</SectionLabel>
      <h2>Satu kali pembelian.<br/><span>Untuk penggunaan pribadi.</span></h2>
      <p>Miliki full source code indikator untuk dipakai tanpa batas waktu. Anda dapat memodifikasinya sesuai kebutuhan analisis pribadi.</p>
      <div className="indicator-license"><h3>Ketentuan penggunaan</h3><p>{indicatorPurchase.license}</p></div>
    </div>
    <div className="indicator-price-panel">
      <p className="eyebrow">{product.productName}</p>
      <p className="purchase-tagline">{product.tagline}</p>
      <p className="purchase-price">{product.price}</p>
      <p className="purchase-model">{indicatorPurchase.model}</p>
      <ul>{indicatorPurchase.includes.map(item=><li key={item}>{item}</li>)}</ul>
      <WhatsAppLink message={product.whatsappMessage}>Beli via WhatsApp <Arrow diagonal/></WhatsAppLink>
      <p className="purchase-delivery">{indicatorPurchase.delivery}</p>
    </div>
  </section>;
}

export function IndicatorFAQ(){
  const items=[
    ['Berapa harga indikator AURIC?',`AURIC SMC SIGNAL dan AURIC MOMENTUM masing-masing ${indicatorPurchase.price}. Harga tersebut berlaku per indikator, bukan untuk paket gabungan.`],
    ['Apakah pembayaran dilakukan setiap bulan?','Tidak. Pembelian indikator dilakukan sekali bayar, tanpa biaya bulanan dan tanpa perpanjangan.'],
    ['Berapa lama indikator dapat digunakan?','Akses seumur hidup berarti indikator dapat digunakan tanpa batas waktu setelah pembelian.'],
    ['Apakah saya mendapatkan full source code?',`Ya. ${indicatorPurchase.delivery} Website tidak menyediakan unduhan source code secara publik.`],
    ['Apakah source code boleh dimodifikasi?','Ya. Anda boleh memodifikasi source code untuk kebutuhan dan penggunaan pribadi.'],
    ['Apakah source code boleh dijual atau dibagikan kembali?','Tidak. Distribusi ulang, publikasi source code, dan penjualan kembali tidak diperbolehkan tanpa izin AURIC.'],
    ['Apakah indikator menjamin profit?','Tidak. Indikator merupakan alat bantu analisis, bukan jaminan hasil. Keputusan trading dan pengelolaan risiko tetap berada pada pengguna.'],
  ];
  return <section className="section container faq-layout brand-faq" id="indicator-faq"><div><SectionLabel number="05">INDICATOR FAQ</SectionLabel><h2>Detail pembelian.<br/><span>Jelas sejak awal.</span></h2><p className="intro-copy">Ketentuan ini berlaku untuk produk indikator AURIC.</p></div><div className="faq-list">{items.map(([q,a],i)=><details key={q}><summary><span className="faq-number">0{i+1}</span><span>{q}</span><span className="faq-plus">+</span></summary><p>{a}</p></details>)}</div></section>;
}
