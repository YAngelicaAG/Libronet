
async function traerDatos() {
  try {
    const response = await fetch('/Libreria/catalog.json');
    const data = await response.json();
    const answer = document.querySelector('#res');
    answer.innerHTML = '';

    for (const item of data) {
      answer.innerHTML += `<div class="col s12 m4">
      <div class="c-card">
        <div class="c-card-image">
          <img class="c-card-image__file responsive-img" src="${item.imagen}">
          <span class="c-card-title">${item.titulo}</span>
          <span>${item.autor}</span>
          <span>${item.idioma}</span>
          <span>${item.categoria}</span>
        </div>
        <div class="card-action">
          <a href="#">Ver libro</a>
        </div>
      </div>
    </div>`;
    }
  } catch (error) {
    console.log(error);
    const answer = document.querySelector('#res');
    answer.innerHTML = '<tr><td colspan="4" class="center-align">Ocurrió un error al cargar los datos.</td></tr>';
  }
}

traerDatos();