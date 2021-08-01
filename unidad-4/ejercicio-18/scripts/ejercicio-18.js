"use strict";
let numeroAnalizado, rangoMinimo, rangoMaximo, parImpar, mensaje;

rangoMinimo = parseFloat(prompt("Ingrese un número que determine un rango mínimo."));
rangoMaximo = parseFloat(prompt("Ingrese un número que determine un rango máximo."));
numeroAnalizado = parseFloat(prompt("Ingrese un número cualquiera."));
parImpar = numeroAnalizado % 2;
mensaje = "El número " + numeroAnalizado;

if (numeroAnalizado >= rangoMinimo && numeroAnalizado <= rangoMaximo) {
  mensaje += " está dentro del rango designado. <br>";
  if (parImpar == 0) {
    mensaje += numeroAnalizado + " es PAR.";
  } 
} else {
  mensaje += " está fuera del rango designado. <br>";
    if (parImpar != 0) {
      mensaje += numeroAnalizado + " es IMPAR.";
    }
}

document.write(`
  <hr>
  <p>
    ${mensaje}
  </p>
`);
