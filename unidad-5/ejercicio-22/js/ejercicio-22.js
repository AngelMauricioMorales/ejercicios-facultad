"use strict";
let numerosIngresados, mensaje, restoDe3, restoDe5, sumaDeRestos;

for (let i = 0; i < 3; i++) {
  numerosIngresados = parseInt(prompt("Ingrese un número."));
  restoDe3 = numerosIngresados % 3;
  restoDe5 = numerosIngresados % 5;
  sumaDeRestos = restoDe3 + restoDe5;

  if (restoDe3 > 0 && restoDe5 > 0 || numerosIngresados <= 0) {
    mensaje = "NO es multiplo de ninguno.";
  } else if (sumaDeRestos == 0) {
    mensaje = "SI multiplo de ambos.";
  } else if (restoDe3 == 0) {
    mensaje = "SI multiplo de 3."
  } else if (restoDe5 == 0) {
    mensaje = "SI multiplo de 5.";
  }
  
document.write(`
  <hr>
  <p>
    El número ${numerosIngresados} ${mensaje}
  </p>
`);
}
