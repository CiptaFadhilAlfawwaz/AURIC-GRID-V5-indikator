import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const root=path.resolve('out');let checks=0;
function assert(value,message){if(!value)throw Error(message);checks++;}
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);}
const headers=fs.readFileSync('out/_headers','utf8');
const routes=['/','/ea/auric-grid-v5/','/indicators/','/indicators/auric-smc-signal/','/indicators/auric-momentum/'];
const messages={
 '/ea/auric-grid-v5/':'Halo, saya tertarik dengan AURIC GRID V5. Saya ingin tanya detail sistem sewa dan pemasangannya.',
 '/indicators/auric-smc-signal/':'Halo, saya tertarik membeli AURIC SMC SIGNAL seharga Rp110.000. Saya ingin tanya detail pembelian dan full source code indikatornya.',
 '/indicators/auric-momentum/':'Halo, saya tertarik membeli AURIC MOMENTUM seharga Rp110.000. Saya ingin tanya detail pembelian dan full source code indikatornya.'
};
const titles=new Set();
for(const file of walk(root)){
 assert(!/\.(mq5|ex5|pine|map|env|pem|key|log)$/.test(file),'Forbidden public file '+file);
 assert(!/\/(\.git|node_modules|api|admin)\//.test(file),'Forbidden directory '+file);
 if(!file.endsWith('.html'))continue;
 const html=fs.readFileSync(file,'utf8');
 for(const m of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g))if(!m[1].includes('src=')&&m[2])assert(headers.includes(crypto.createHash('sha256').update(m[2]).digest('base64')),'Missing CSP hash: '+file);
 assert(!/<form\b|type="password"|dangerouslySetInnerHTML/.test(html),'Forbidden credential form');
}
for(const route of routes){
 const html=fs.readFileSync(path.join(root,route,'index.html'),'utf8');
 assert((html.match(/<h1\b/g)||[]).length===1,'Expected one h1: '+route);
 assert(html.includes('lang="id"'),'Missing document language');
 const title=html.match(/<title>(.*?)<\/title>/)[1];assert(!titles.has(title),'Duplicate title');titles.add(title);
 assert(html.includes(`rel="canonical" href="https://auric-grid-v5-cipta.ciptagame1234.chatgpt.site${route}"`),'Wrong canonical '+route);
 assert(html.includes('property="og:title"')&&html.includes('name="twitter:image"'),'Missing social metadata');
 assert(!/lorem ipsum|example\.com/i.test(html),'Placeholder');
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert(new Set(ids).size===ids.length,'Duplicate IDs');
 for(const m of html.matchAll(/(?:src|href)="([^" ]+)"/g)){
  const value=m[1].replaceAll('&amp;','&');
  if(!value.startsWith('/')&&!value.startsWith('#'))continue;
  const url=new URL(value,'https://test.local'+route);
  let target=path.join(root,url.pathname);
  if(fs.existsSync(target)&&fs.statSync(target).isDirectory())target=path.join(target,'index.html');
  assert(fs.existsSync(target),'Broken local target '+route+' '+value);
  if(url.hash)assert(fs.readFileSync(target,'utf8').includes(`id="${url.hash.slice(1)}"`),'Broken fragment '+value);
 }
 for(const m of html.matchAll(/<a\b([^>]+)>/g)){
  const attrs=m[1];if(attrs.includes('target="_blank"'))assert(attrs.includes('rel="noopener noreferrer"'),'Unsafe external link');
  const href=attrs.match(/href="([^"]+)"/)?.[1];if(href?.startsWith('https://wa.me/')){
   const url=new URL(href.replaceAll('&amp;','&'));assert(url.pathname==='/62895322449706','Wrong WhatsApp number');
   const message=url.searchParams.get('text');assert(message?.startsWith('Halo, saya tertarik '),'Missing message');
   if(messages[route])assert(message===messages[route],'Wrong product message '+route);
  }
 }
 for(const m of html.matchAll(/<img\b([^>]+)>/g))assert(/\balt="[^"]+"/.test(m[1]),'Missing image alternative text');
 for(const m of html.matchAll(/data-lightbox="([^"]+)"/g))assert(ids.includes(m[1]==='true'?'screenshot-dialog':m[1]),'Missing image dialog');
 assert(html.includes('id="risk"'),'Missing trading risk');
 if(route.startsWith('/indicators/auric-')){
  assert(!html.includes('Rp370.000'),'EA price leaked onto indicator page');
  for(const value of ['Rp110.000','Sekali Bayar · Akses Seumur Hidup','Full Source Code','Tanpa biaya bulanan','Tanpa perpanjangan','Beli via WhatsApp','id="indicator-faq"'])assert(html.includes(value),'Missing indicator purchase term '+value);
  assert(!/Ask for details|Detail harga dan akses melalui admin|30 [Hh]ari/.test(html),'Stale indicator offer');
 }
}
const ea=fs.readFileSync('out/ea/auric-grid-v5/index.html','utf8');
for(const value of ['81,99%','+18.352,38','Rp3.258.465','+7.385,81','+10.966,57','Rp370.000','September 2026'])assert(ea.includes(value),'EA data changed: '+value);
assert(headers.includes("frame-ancestors 'none'")&&!headers.includes('unsafe-inline')&&!headers.includes('unsafe-eval'),'Weak CSP');
for(const key of ['X-Frame-Options: DENY','X-Content-Type-Options: nosniff','Referrer-Policy: strict-origin-when-cross-origin','Permissions-Policy:','Cross-Origin-Opener-Policy: same-origin'])assert(headers.includes(key),'Missing header '+key);
const hash=file=>crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
for(const name of ['backtest-original.png','smc-signal-original.png','momentum-original.png'])assert(hash('public/assets/'+name)===hash('out/assets/'+name),'Original screenshot changed');
const sitemap=fs.readFileSync('out/sitemap.xml','utf8');for(const route of routes)assert(sitemap.includes('https://auric-grid-v5-cipta.ciptagame1234.chatgpt.site'+route+'</loc>'),'Missing sitemap route');
console.log(`PASS: ${checks} checks across ${routes.length} routes: assets, fragments, WhatsApp messages, metadata, CSP, screenshots and prohibited files.`);
