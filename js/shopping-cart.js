const cartList = document.querySelector('.js-cart-list');
const cartitem = document.querySelector('.js-cart-item');
let listProductCart = [];
const totalValue = document.querySelector('.js-cart-total');
const countProducts = document.querySelector('.js-cart-counter');


const addProduct = (e) => {
  e.preventDefault();

  if (e.target.classList.contains('js-btn-add-cart')) {
    const product = e.target.parentElement.parentElement;

    // objeto con la información del producto agregado
    const infoProduct = {
      quantity: 1,
      title: product.querySelector('.js-card-title').textContent,
      price: product.querySelector('.js-card-price').textContent,
      image: product.querySelector(".js-card-image").src,
    };

    // Revisa si un elemento ya existe en el carrito
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
}

const deleteProduct = (e) => {
  
  if (e.target.classList.contains('js-btn-remove-item')) {
    const product = e.target.parentElement;
    const title = product.querySelector('.js-cart-item-name').textContent;

    listProductCart = listProductCart.filter (
      product => product.title !== title
    )
    showItemsCart();
  }

}


const loadEvents = () => {
  // al presionar el botón agregar al carrito
  grid.addEventListener('click', addProduct);

  // eliminar un producto del carrito
  cartList.addEventListener('click', deleteProduct);

  // vaciar carrito
  // emptyCart.addEventListener('click', () => {
  //   listProductCart = [];
  //   limpiarHTML()
  // })
}
loadEvents();

// Mostrar el listado de elementos agregados al carrito
const showItemsCart = () => {

  if(!listProductCart.length) {
    const noItems = `
      <li class=""> El carrito esta vacio</li>
    `;
    cartList.insertAdjacentHTML('beforeend', noItems);
  }

  limpiarHTML();

  let total = 0;
  let totalProducts = 0;


  listProductCart.forEach(product => {

    const item = `
      <li class="c-header__cart-item js-cart-item"> 
        <div class="c-header__cart-wrapper">
          <img class="c-header__cart-image" src="${product.image}">
          <span>${product.quantity}</span>
          <span class="js-cart-item-name">${product.title}</span>
          <span>${product.price}</span>
        </div>
        <button class="c-header__cart-btn js-btn-remove-item i-close" type="button"></button>
      </li>
    `;

      cartList.insertAdjacentHTML('beforeend', item);

      // valor total de los productos y su cantidad
      total = total + parseInt( product.quantity * product.price.slice(1));
      totalProducts = totalProducts + product.quantity;

  })

  totalValue.innerText = `Total: $${total}`;
  countProducts.innerText = totalProducts;
}

// Limpiar el carrito para ingresar el nuevo valor del array
const limpiarHTML = () => {
  while (cartList.firstChild) {
    cartList.removeChild(cartList.lastChild);
  }
}
