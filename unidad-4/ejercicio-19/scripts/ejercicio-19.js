"use strict;";
let primerNumeroIngresado, segundoNumeroIngresado, operadorElegido, resultado;

primerNumeroIngresado = parseFloat(prompt("Ingrese un número."));
segundoNumeroIngresado = parseFloat(prompt("Ingrese otro número."));
operadorElegido = prompt("¿Con cuál operador quiere manipular los números?", "+ - * /");
resultado = "El resultado es: ";

switch (operadorElegido) {
  case "+":
      resultado += primerNumeroIngresado + segundoNumeroIngresado;
    break;

  case "-":
      resultado += primerNumeroIngresado - segundoNumeroIngresado;
    break;

  case "*":
      resultado += primerNumeroIngresado * segundoNumeroIngresado;
    break;

  case "/":
      resultado += primerNumeroIngresado / segundoNumeroIngresado;
    break;

  default:
      resultado = "No se puede realizar el cálculo.";
    break;
}

document.write(`
  <hr>
  <p>
    ${resultado}
  </p>
`);
