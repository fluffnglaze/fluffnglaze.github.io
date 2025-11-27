// Floating Donuts
const floatingDonuts = document.getElementById('floating-donuts');
for(let i=0;i<12;i++){
  let d = document.createElement('div');
  d.className='donut';
  d.style.width=d.style.height=Math.random()*60+40+'px';
  d.style.left=Math.random()*100+'%';
  d.style.animationDuration= Math.random()*5+5+'s';
  floatingDonuts.appendChild(d);
}

// Add-to-Cart
let cart = [];
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');
document.querySelectorAll('.add-cart').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const item = btn.closest('.menu-item');
    const name = item.dataset.name;
    const price = parseFloat(item.dataset.price);
    cart.push({name,price});
    updateCart();
  });
});

function updateCart(){
  cartItems.innerHTML='';
  let total=0;
  cart.forEach(i=>{
    let li = document.createElement('li');
    li.textContent=`${i.name} - $${i.price.toFixed(2)}`;
    cartItems.appendChild(li);
    total+=i.price;
  });
  cartTotal.textContent=total.toFixed(2);
  cartCount.textContent=cart.length;
}

// Cart toggle
document.getElementById('cart-btn').addEventListener('click',()=>{
  document.getElementById('cart').classList.toggle('active');
});

// Donut floating style
const style = document.createElement('style');
style.innerHTML=`
.donut{position:absolute;background:#ffd9e8;border-radius:50%;opacity:.7;animation:float linear infinite;}
@keyframes float{
  0%{transform:translateY(100vh) rotate(0deg);}
  100%{transform:translateY(-100px) rotate(360deg);}
}`;
document.head.appendChild(style);
