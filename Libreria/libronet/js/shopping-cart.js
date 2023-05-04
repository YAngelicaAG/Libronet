const cartList = document.querySelector('.js-cart-list');
const cartitem = document.querySelector('.js-cart-item');


let listProductCart = [];

const totalValue = document.querySelector('.js-cart-total');

const countProducts = document.querySelector('.js-cart-counter');


grid.addEventListener('click', e => {
  if (e.target.classList.contains('js-btn-add-cart')) {
    const product = e.target.parentElement;

    const infoProduct = {
      quantity: 1,
      title: product.querySelector('.js-card-title').textContent,
      price: product.querySelector('.js-card-price').textContent,
    };

    const exist = listProductCart.some(product => product.title === infoProduct.title);

    if(exist) {
      const products = listProductCart.map(product => {
        if (product.title === infoProduct.title) {
          product.quantity++;
          return product;
        } else {
          return product;
        }
      })

      listProductCart = [...products];
    } else {
      listProductCart = [...listProductCart, infoProduct];
    }

    showItemsCart();

  }
  
})

cartList.addEventListener('click', (e) => {
  
  if (e.target.classList.contains('js-btn-remove-item')) {
    const product = e.target.parentElement;
    const title = product.querySelector('.js-cart-item-name').textContent;

    listProductCart = listProductCart.filter (
      product => product.title !== title
    )
    showItemsCart();
  }
  
})

// Mostrar el listado de elementos agregados al carrito
const showItemsCart = () => {

  if(!listProductCart.length) {
    const noItems = `
      <li class=""> El carrito esta vacio</li>
    `;
    cartList.insertAdjacentHTML('beforeend', noItems);
  }

  cartList.innerHTML = '';

  let total = 0;
  let totalProducts = 0;


  listProductCart.forEach(product => {

    const item = `
      <li class="c-header__cart-item js-cart-item"> 
        <span>${product.quantity}</span>
        <span class="js-cart-item-name">${product.title}</span>
        <span>${product.price}</span>
        <button class="c-header__cart-btn js-btn-remove-item i-close" type="button"></button>
      </li>
    `;

      cartList.insertAdjacentHTML('beforeend', item);

      // valor total de los productos y su cantidad
      total = total + parseInt( product.quantity * product.price.slice(1));
      totalProducts = totalProducts + product.quantity;

  })

  totalValue.innerText = `$${total}`;
  countProducts.innerText = totalProducts;
}