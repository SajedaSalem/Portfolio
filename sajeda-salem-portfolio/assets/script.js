
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href');
    if(id.length>1){
      const el=document.querySelector(id);
      if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'});}
    }
  });
});
const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

document.addEventListener('DOMContentLoaded',()=>{
  const lightbox=document.getElementById('imageLightbox');
  if(!lightbox) return;

  const lightboxImg=lightbox.querySelector('img');
  const lightboxCaption=lightbox.querySelector('.image-lightbox-caption');
  const closeBtn=lightbox.querySelector('.image-lightbox-close');

  function openLightbox(img){
    lightboxImg.src=img.currentSrc || img.src;
    lightboxImg.alt=img.alt || 'Expanded project screenshot';
    lightboxCaption.textContent=img.dataset.caption || img.alt || '';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden','false');
    document.body.classList.add('lightbox-open');
  }

  function closeLightbox(){
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden','true');
    document.body.classList.remove('lightbox-open');
    lightboxImg.removeAttribute('src');
  }

  document.addEventListener('click',e=>{
    const img=e.target.closest('.evidence-image.zoomable');
    if(img){
      e.preventDefault();
      openLightbox(img);
      return;
    }

    if(e.target===lightbox || e.target===closeBtn){
      closeLightbox();
    }
  });

  document.addEventListener('keydown',e=>{
    if(e.key==='Escape' && lightbox.classList.contains('open')){
      closeLightbox();
    }
  });
});
