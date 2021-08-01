"use strict";
let letraIngresada, mensaje;

letraIngresada = prompt("Ingrese una letra.");
mensaje = `La letra <span style="color: red; font-size: 1em;">${letraIngresada}</span>`;

switch (letraIngresada) {
  case "A":
  case "a":
  case "á":
    mensaje += ` es la 1er vocal.`;
    break;

  case "E":
  case "e":
  case "é":
    mensaje += ` es la 2da vocal.`;
    break;

  case "I":
  case "i":
  case "í":
    mensaje += ` es la 3ra vocal.`;
    break;

  case "O":
  case "o":
  case "ó":
    mensaje += ` es la 4ta vocal.`;
    break;

  case "U":
  case "u":
  case "ú":
    mensaje += ` es la 5ta vocal.`;
    break;

  default:
    mensaje += ` no es una vocal.`;
    break;
}

document.write(`
  <hr>  
  <p>
    ${mensaje}
  </p>
`);
