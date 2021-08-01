"use strict";
let numeroIngresado, multiploDe3, multiploDe5, sumaDeRestos, mensaje;

numeroIngresado = parseFloat(prompt("Ingrese un número."));
mensaje = "El número " + numeroIngresado;
multiploDe3 = numeroIngresado % 3;
multiploDe5 = numeroIngresado % 5;
sumaDeRestos = multiploDe3 + multiploDe5;

if (numeroIngresado <= 0) {
  mensaje += ` NO es multiplo de 3 y de 5.`;
} else if (sumaDeRestos == 0) {
  mensaje += ` SI es multiplo de 3 y de 5.`;
} else if (multiploDe3 == 0) {
  mensaje += ` SI es multiplo de 3.`;
} else if (multiploDe5 == 0) {
  mensaje += ` SI es multiplo de 5.`;
} else {
  mensaje += ` NO es multiplo de 3 y de 5.`;
}

document.write(`
  <hr>
  <p>
    ${mensaje}
  </p>
`);
