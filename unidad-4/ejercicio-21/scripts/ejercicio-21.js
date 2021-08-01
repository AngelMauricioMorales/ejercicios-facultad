"use strict;";
let sueldoBasico, sueldoFinal, horasExtras, categoria, mensaje;
const categoria1 = 2000;
const categoria2 = 3000;
const categoria3 = 4000;
const bonusC1 = 500;
const bonusC3 = 1000;

categoria = prompt("Escriba la categoría a la que pertence.", "EJ: c1, c2, c3");
horasExtras = parseFloat(prompt("Ingrese la cantidad de horas extras realizadas."));
mensaje = "Sueldo mensual de: ";

switch (categoria) {
  case "c1":
    sueldoBasico = categoria1;
    if (horasExtras > 20) {
      sueldoFinal = sueldoBasico + bonusC1;
      mensaje += `u$s${sueldoFinal}<br> No supera los u$s4.000`;
    } else {
      mensaje += `u$s${sueldoBasico}<br> No supera los u$s4.000`;
    }
    break;

  case "c2":
    sueldoBasico = categoria2;
    mensaje += `u$s${sueldoBasico}<br> No supera los u$s4.000`;
    break;

  case "c3":
    sueldoBasico = categoria3;
    if (horasExtras > 30) {
      sueldoFinal = sueldoBasico + bonusC3;
      mensaje += `u$s${sueldoFinal} <br> Supera los u$s4.000`;
    } else {
      mensaje += `u$s${sueldoBasico}<br> No supera los u$s4.000`;
    }
    break;

  default:
    alert("Esa categoría es inexistente.");
    mensaje = `<span style="color: red; font-size: 1em;">ERROR</span>`;
    break;
}

document.write(`
  <hr>
  <p>
    ${mensaje}
  </p>
`);