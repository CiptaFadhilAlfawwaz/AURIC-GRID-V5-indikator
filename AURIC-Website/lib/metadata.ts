import type {Metadata} from 'next';
import {siteConfig} from './site-config';
export function pageMetadata(title:string,description:string,path:string,image:string=siteConfig.robotImage):Metadata {
  return {title,description,alternates:{canonical:path},openGraph:{type:'website',locale:'id_ID',siteName:'AURIC',title,description,url:path,images:[{url:image,alt:title}]},twitter:{card:'summary_large_image',title,description,images:[image]}};
}
