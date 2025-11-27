// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => {
  if(nav.style.display === 'flex'){
    nav.style.display = '';
  } else {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.gap = '1rem';
  }
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
},{threshold:0.15});

reveals.forEach(r => observer.observe(r));
