'use strict';
const header=document.getElementById('navbar'),menu=document.getElementById('mobile-menu'),toggle=document.getElementById('menu-toggle');
function closeMenu(){if(menu&&toggle){menu.hidden=true;toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Buka menu');}}
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Tutup menu':'Buka menu');menu.hidden=!open;});
menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
window.addEventListener('scroll',()=>header?.classList.toggle('scrolled',window.scrollY>24),{passive:true});
const openers=new WeakMap();
document.querySelectorAll('[data-lightbox]').forEach(button=>button.addEventListener('click',()=>{
  const id=button.getAttribute('data-lightbox');
  const dialog=document.getElementById(id==='true'?'screenshot-dialog':id);
  if(!(dialog instanceof HTMLDialogElement))return;
  openers.set(dialog,button);dialog.showModal();document.body.classList.add('dialog-open');
}));
document.querySelectorAll('dialog').forEach(dialog=>{
  dialog.querySelector('[data-close-dialog],#close-dialog')?.addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
  dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');openers.get(dialog)?.focus();});
});
