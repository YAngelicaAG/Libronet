let numeroUno = 0;
let numeroDos = 0;
let operator = "";

function ingresarNumero(mensaje) {
  let numero = NaN;
  while (isNaN(numero)) {
    numero = parseInt(prompt(mensaje));
    if (isNaN(numero)) {
      alert("El valor ingresado no es un número");
    }
  }
  return numero;
}

function ingresarOperacion() {
  let operacionValida = false;
  let operacion = "";
  while (!operacionValida) {
    operacion = prompt("¿Qué operación desea realizar? (+, -, *, /)");
    if (operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/") {
      operacionValida = true;
    } else {
      alert("El operador ingresado no es válido");
    }
  }
  return operacion;
}

function realizarOperacion(numeroUno, numeroDos, operator) {
  let resultado = 0;
  switch (operator) {
    case "*":
      resultado = numeroUno * numeroDos;
      break;
    case "+":
      resultado = numeroUno + numeroDos;
      break;
    case "-":
      resultado = numeroUno - numeroDos;
      break;
    case "/":
      resultado = numeroUno / numeroDos;
      break;
  }
  alert(`El resultado de la operación ${numeroUno} ${operator} ${numeroDos} es: ${resultado}`);
}

numeroUno = ingresarNumero("Ingrese un primer número");
numeroDos = ingresarNumero("Ingrese un segundo número");
operator = ingresarOperacion();
realizarOperacion(numeroUno, numeroDos, operator);