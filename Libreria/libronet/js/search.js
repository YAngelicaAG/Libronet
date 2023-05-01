const inputSearch = document.querySelector('.js-search');
const grid = document.querySelector('.js-cards');

// filtro por título
const filter = async () => {
  const text = inputSearch.value.toLowerCase();

  try {
    const response = await fetch('js/catalog.json');
    const data = await response.json();

    grid.innerHTML = '';

    for (let item of data ) {
      let title = item.titulo.toLowerCase();
      if (title.indexOf(text) !== -1) {
        const article = document.createRange().createContextualFragment(`
          <article class="c-card"> 
            <div class="c-card_wrap-img">
              <figure class="c-card_figure">
                <img class="c-card_image" src="${item.imagen}" alt="${item.titulo}">
              </figure>
            </div>
            <div class="c-card_caption"> 
              <h3 class="c-card-title">${item.titulo}</h3>
              <p class="c-card-subtitle">${item.autor}</p>
              <div class="c-card-stars"> 
                <div class="estrella"></div>
              </div>
              <p class="c-card__price">$ ${item.precio}</p>
              <button class="o-btn-primary" type="button">Agregar al carrito</button>
            </div>
          </article>
        `);

        grid.append(article);

      }
    }

  } catch (error) {
    console.log(error);
  }
}

inputSearch.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   filter();
  }
});