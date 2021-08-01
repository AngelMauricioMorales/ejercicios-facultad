"use strict";
let numeroIngresado, parImpar, mensaje;

numeroIngresado = parseFloat(prompt("Ingrese un número"));
mensaje = "El número " + numeroIngresado;
parImpar = numeroIngresado % 2;

if (numeroIngresado == 0) {
  mensaje += ` es NEUTRO` ;
} else if (parImpar == 0) {
  mensaje += ` es PAR`;
} else {
  mensaje += ` es IMPAR`;
}

document.write(`
  <hr>
  <p>
    ${mensaje}
  </p>
`);
