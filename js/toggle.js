const card = document.querySelector('.js-toggle-cart');
const buttonCart = document.querySelector('.js-btn-shoppin-cart');

buttonCart.addEventListener('click', e => {
  e.preventDefault();
  card.classList.toggle('is-open');
})

// detecta click fuera de la ventana del carrito y la cierra
document.addEventListener("mouseup", e => {
  e.preventDefault();
  if (!card.contains(e.target)) {
      card.classList.remove('is-open')
  }
});