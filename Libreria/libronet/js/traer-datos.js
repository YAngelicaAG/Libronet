const grid = document.querySelector('.js-cards');
const inputSearch = document.querySelector('.js-search');

async function mostrarCards(text = '', key) {

  try {
    const response = await fetch('js/catalog.json');
    const data = await response.json();
    grid.innerHTML = '';

    const createCard = (card) => {
      
      const article = `
        <article class="c-card"> 
          <div class="c-card_wrap-img">
            <figure class="c-card_figure">
              <img class="c-card_image" src="${card.imagen}" alt="${card.titulo}">
            </figure>
          </div>
          <div class="c-card_caption"> 
            <h3 class="c-card-title js-card-title">${card.titulo}</h3>
            <p class="c-card-subtitle">${card.autor}</p>
            <p class="c-card__price js-card-price">$ ${card.precio}</p>
            <button class="o-btn-primary js-btn-add-cart" type="button">Agregar al carrito</button>
          </div>
        </article>
      `;

      grid.insertAdjacentHTML('beforeend', article);
    }

    data.forEach((item) => {
      if (key === 'Enter') {
        const title = item.titulo.toLowerCase();
        if(title.includes(text.toLowerCase())) {
          createCard(item);
        }
      } else {
        createCard(item);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

mostrarCards();

inputSearch.addEventListener('keyup', (event) => {
  mostrarCards(event.target.value, event.key);
});