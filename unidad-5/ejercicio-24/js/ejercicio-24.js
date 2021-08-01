"use strict";
let primerIngresado, segundoIngresado, operadorElegido, rta, resultado;

rta = confirm("¿Comenzar a realizar calculos?");

while (rta) {
  primerIngresado = parseInt(prompt("Ingrese un número."));
  operadorElegido = prompt("¿Con cuál operador quiere manipular los números?", "EJ: + - * /");
  segundoIngresado = parseInt(prompt("Ingrese otro número."));
  resultado = `${primerIngresado} ${operadorElegido} ${segundoIngresado} = `;

  switch (operadorElegido) {
    case "+":
      resultado += primerIngresado + segundoIngresado;
      break;
    case "-":
      resultado += primerIngresado - segundoIngresado;
      break;
    case "*":
      resultado += primerIngresado * segundoIngresado;
      break;
    case "/":
      resultado += primerIngresado / segundoIngresado;
      break;
    default:
      resultado = "Elija un operador correcto.";
      break;
  }

  document.write(`
  <hr>
  <p>
    ${resultado}
  </p>
`);

  rta = confirm("¿Realizar otro cálculo?");
}
