import type {Product} from '@/lib/products';
import {Arrow} from './shared';

export function ProductScreenshot({product,id,compact=false}:{product:Product;id:string;compact?:boolean}){
  const shot=product.screenshot;
  return <figure className={`product-screen ${compact?'compact-screen':''}`}>
    <div className="product-screen-bar"><span>{product.productName}</span><span>{product.platform} / CHART VIEW</span></div>
    <button className="chart-trigger" data-lightbox={id} aria-haspopup="dialog" aria-controls={id} aria-label={`Perbesar screenshot ${product.productName}`}>
      <img src={shot.src} width={shot.width} height={shot.height} alt={shot.alt} loading="lazy" decoding="async"/>
      <span className="chart-zoom">Perbesar chart <Arrow diagonal/></span>
    </button>
    <figcaption>{shot.caption}<span>SCREENSHOT ASLI</span></figcaption>
    <dialog id={id} className="chart-dialog" aria-labelledby={`${id}-title`}>
      <div className="dialog-top"><h2 id={`${id}-title`}>{product.productName} · Screenshot asli</h2><button data-close-dialog aria-label="Tutup screenshot">×</button></div>
      <div className="dialog-image"><img src={shot.original} alt={shot.alt} loading="lazy"/></div>
      <p>Geser untuk membaca chart pada layar kecil. <a href={shot.original} target="_blank" rel="noopener noreferrer">Buka gambar ukuran penuh ↗</a></p>
    </dialog>
  </figure>;
}
