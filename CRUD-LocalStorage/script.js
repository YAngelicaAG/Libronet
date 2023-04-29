const idForm = document.querySelector("#id-form");
const idActivities = document.querySelector("#id-activities");
let arrayActivities = [];

// funciones
const crearItem = (actividad) => {
  let item = {
    actividad: actividad,
    estado: false,
  };

  arrayActivities.push(item);

  return item;
};

// guarda el objeto en el local storage
const guardarDB = () => {
  localStorage.setItem("rutina", JSON.stringify(arrayActivities));
  mostrarInfo();
};

// cambiar las alertas (roja o verde de acuerdo al caso)
const mostrarInfo = () => {
  idActivities.innerHTML = "";
  // convertir en array y traer datos del local storage
  arrayActivities = JSON.parse(localStorage.getItem("rutina"));

  if (arrayActivities === null) {
    arrayActivities = [];
  } else {
    arrayActivities.forEach((element) => {
      if (element.estado) {
        idActivities.innerHTML += `<div  class="alert alert-success item-alert" role="alert"><b class="id-label-activiti"> ${element.actividad} </b> - ${element.estado}<span class="float-right"><span class="material-symbols-outlined">done</span><span class="material-symbols-outlined">delete</span></span></div>`;
      } else {
        idActivities.innerHTML += `<div  class="alert alert-danger item-alert" role="alert"><b class="id-label-activiti"> ${element.actividad} </b> - ${element.estado}<span class="float-right"><span class="material-symbols-outlined">done</span><span class="material-symbols-outlined">delete</span></span></div>`;
      }
    });
  }
};

// elimina la alerta al hacer click en el icono de la basura
const eliminar = (actividad) => {
  let indexArray;
  arrayActivities.forEach((elm, index) => {
    if (elm.actividad === actividad) {
      indexArray = index;
    }

    arrayActivities.splice(indexArray, 1);
    guardarDB();
  });
};

// selecciona el indec y cambia el estado a completada
const editar = (actividad) => {
  let indexArray = arrayActivities.findIndex(
    (elemento) => elemento.actividad === actividad
  );
  arrayActivities[indexArray].estado = true;
  guardarDB();
};

// Eventos

// crea la alerta y resetea el formulario
idForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const uniqueActiviti = document.querySelector("#actividad").value;

  crearItem(uniqueActiviti);
  guardarDB();

  // resetea el formulario
  idForm.reset();
});

// trae la informacion del objeto establecido en el local storage
document.addEventListener("DOMContentLoaded", mostrarInfo);

idActivities.addEventListener("click", (e) => {
  if (e.target.innerHTML === "done" || e.target.innerHTML === "delete") {
    let text =
      e.target.parentElement.parentElement.childNodes[0].innerText.trim();
    if (e.target.innerHTML === "delete") {
      eliminar(text);
    }
    if (e.target.innerHTML === "done") {
      editar(text);
    }
  }
});
