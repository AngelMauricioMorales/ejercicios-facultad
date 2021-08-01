"use strict;"
let lado1, lado2, lado3, mensaje;

lado1 = parseInt(prompt('Ingrese el valor del primer lado.'));
lado2 = parseInt(prompt('Ingrese el valor del segundo lado.'));
lado3 = parseInt(prompt('Ingrese el valor del tercer lado.'));
mensaje = "Es un triángulo "

if (lado1 == lado2 && lado1 == lado3) {
  mensaje += "equilátero.";
} else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
  mensaje += "isósceles.";
} else {
  mensaje += "escaleno.";
}

document.write(`
  <hr>  
  <p>
    ${mensaje}
  </p>
`)