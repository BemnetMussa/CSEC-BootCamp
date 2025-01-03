function toggleCartColor() {
  const cartIcon = document.querySelector('.fa-shopping-cart');
  cartIcon.style.backgroundColor = cartIcon.style.backgroundColor === 'rgb(144, 194, 255)' ? '#333' : '#90c2ff'; 
}

const cartIcon = document.querySelector('.fa-shopping-cart');
cartIcon.addEventListener('click', function() {
  alert("Item added to cart!");
});
