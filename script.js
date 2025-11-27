// Optional: make extra donuts appear randomly on screen
const body = document.body;

function createDonut() {
  const donut = document.createElement('div');
  donut.className = 'donut';
  donut.style.width = donut.style.height = Math.random() * 30 + 20 + 'px';
  donut.style.background = `radial-gradient(circle at 30% 30%, #ffcade, #ffd700)`;
  donut.style.position = 'absolute';
  donut.style.left = Math.random() * window.innerWidth + 'px';
  donut.style.top = Math.random() * window.innerHeight + 'px';
  donut.style.borderRadius = '50%';
  donut.style.animation = `float ${3+Math.random()*4}s linear infinite`;
  body.appendChild(donut);
  setTimeout(()=> donut.remove(), 6000); // remove after animation
}

setInterval(createDonut, 800);
