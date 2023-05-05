const card = document.querySelector('.js-toggle-cart');
const buttonCart = document.querySelector('.js-btn-shoppin-cart');

buttonCart.addEventListener('click', e => {
  e.preventDefault();

  card.classList.toggle('is-open');

})
