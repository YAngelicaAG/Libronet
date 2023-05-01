async function traerDatos() {
  const grid = document.querySelector('.js-cards');

  try {
    const response = await fetch('js/catalog.json');
    const data = await response.json();

    
    data.forEach(element => {
     
      const article = document.createRange().createContextualFragment(`
        <article class="c-card"> 
          <div class="c-card_wrap-img">
            <figure class="c-card_figure">
              <img class="c-card_image" src="${element.imagen}" alt="${element.titulo}">
            </figure>
          </div>
          <div class="c-card_caption"> 
            <h3 class="c-card-title">${element.titulo}</h3>
            <p class="c-card-subtitle">${element.autor}</p>
            <div class="c-card-stars"> 
              <div class="estrella"></div>
            </div>
            <p class="c-card__price">$ ${element.precio}</p>
            <button class="o-btn-primary" type="button">Agregar al carrito</button>
          </div>
        </article>
      `);

      grid.append(article);

    });

  } catch (error) {
    console.log(error);
  }
}

traerDatos();