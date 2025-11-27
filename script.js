// Floating donuts animation
const container = document.querySelector('.donut-container');
const donutImages = [
  'https://i.ibb.co/qY6K9Wp/strawberry-donut.png',
  'https://i.ibb.co/Kr7ZzNc/choco-donut.png',
  'https://i.ibb.co/9TzYh1f/pink-donut.png'
];

for(let i=0;i<15;i++){
  const donut = document.createElement('div');
  donut.classList.add('donut');
  donut.style.backgroundImage = `url(${donutImages[Math.floor(Math.random()*donutImages.length)]})`;
  donut.style.left = `${Math.random()*100}%`;
  donut.style.top = `${Math.random()*100}%`;
  donut.style.width = `${30+Math.random()*40}px`;
  donut.style.height = donut.style.width;
  donut.speed = 0.2 + Math.random()*0.5;
  container.appendChild(donut);
}

// Animate donuts floating slowly
function animateDonuts(){
  const donuts = document.querySelectorAll('.donut');
  donuts.forEach(d=>{
    let top = parseFloat(d.style.top);
    top -= d.speed;
    if(top < -50) top = 100;
    d.style.top = top + '%';
  });
  requestAnimationFrame(animateDonuts);
}
animateDonuts();

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('visible'); observer.unobserve(entry.target);}
  });
},{threshold:0.1});
reveals.forEach(r=>observer.observe(r));

// Smooth scroll for nav links
const links = document.querySelectorAll('header nav a');
links.forEach(link=>link.addEventListener('click',e=>{
  e.preventDefault();
  document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  links.forEach(l=>l.classList.remove('active'));
  link.classList.add('active');
}));

// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click',()=>{
  if(nav.style.display==='flex'){nav.style.display='';menuBtn.innerHTML='&#9776;'}
  else{nav.style.display='flex';nav.style.flexDirection='column';nav.style.gap='1.4rem';menuBtn.innerHTML='&#10005;'}
});
