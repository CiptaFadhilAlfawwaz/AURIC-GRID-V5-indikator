import {IndicatorPage} from '@/components/IndicatorPage';
import {products} from '@/lib/products';
import {pageMetadata} from '@/lib/metadata';
const product=products.find(p=>p.slug==='auric-momentum')!;
export const metadata=pageMetadata(product.productName+' | '+product.tagline,product.description,product.path,product.screenshot.src);
export default function Page(){return <IndicatorPage product={product}/>}
