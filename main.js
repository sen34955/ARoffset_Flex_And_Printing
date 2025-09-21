
// Smooth scroll for same-page anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    if (!id) return;
    const el = document.getElementById(id);
    if (el) { e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});

// Hero slider
const slides = document.querySelectorAll('.hero-slide');
let si = 0;
setInterval(()=>{
  slides[si].classList.remove('active');
  si = (si + 1) % slides.length;
  slides[si].classList.add('active');
}, 4500);

// Portfolio filter
const tabs = document.querySelectorAll('.tab');
const items = document.querySelectorAll('#gallery .item');
tabs.forEach(tab => tab.addEventListener('click', ()=>{
  tabs.forEach(t=>t.classList.remove('active')); tab.classList.add('active');
  const cat = tab.dataset.cat;
  items.forEach(img => {
    const show = (cat === 'All' || img.dataset.cat === cat);
    img.style.display = show ? 'block' : 'none';
  });
}));

// Lightbox
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lightbox-img');
items.forEach(img => img.addEventListener('click', ()=>{
  lbImg.src = img.src;
  lb.classList.add('show');
}));
lb.addEventListener('click', ()=> lb.classList.remove('show'));

// Testimonials carousel (simple)
const reviews = [
  {text:"Visiting cards की quality और finish बहुत बढ़िया!", who:"Rahul Verma • Rewa"},
  {text:"Flex printing super vibrant, on-time delivery.", who:"Priya Singh • Satna"},
  {text:"Mug & T-shirt gifts came out perfect. Highly recommended!", who:"Amit Sharma • Rewa"}
];
let ri = 0;
setInterval(()=>{
  ri = (ri + 1) % reviews.length;
  const tx = document.getElementById('t-text'); const wh = document.getElementById('t-who');
  if (tx && wh) { tx.textContent = reviews[ri].text; wh.textContent = reviews[ri].who; }
}, 4000);

// WhatsApp submit
const form = document.getElementById('wa-form');
if (form) form.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get('name') || '';
  const mobile = data.get('mobile') || '';
  const req = data.get('requirement') || '';
  const msg = `Hello AR offset & flex printing,%0A%0AName: ${encodeURIComponent(name)}%0AMobile: ${encodeURIComponent(mobile)}%0ARequirement: ${encodeURIComponent(req)}%0A%0AFrom website.`;
  window.open(`https://wa.me/918085002487?text=${msg}`, '_blank');
});

// Year
const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// BLOG MODAL
const modal = document.getElementById('blog-modal');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');
document.querySelectorAll('.readmore').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.dataset.target;
    const source = document.getElementById(id);
    if (!source) return;
    modalContent.innerHTML = source.innerHTML;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  });
});
if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) { modal.classList.remove('show'); document.body.style.overflow = ''; }
  });
}
if (modalClose) {
  modalClose.addEventListener('click', ()=> { modal.classList.remove('show'); document.body.style.overflow=''; });
}
