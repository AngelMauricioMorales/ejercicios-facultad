"use strict";
var bonus = 0.15;
var valorHora, cantidadHoras, antiguedad, bonoMensual, sueldoBase, sueldoFinal;

cantidadHoras = parseFloat(prompt("Ingrese la cantidad de horas trabajadas en un mes."));
valorHora = parseFloat(prompt("Ingrese el valor de una hora trabajada."));
antiguedad = parseFloat(prompt("Ingrese la cantidad de años de antigüedad."));
sueldoBase = cantidadHoras * valorHora;
bonoMensual = sueldoBase * bonus * antiguedad;
sueldoFinal = sueldoBase + bonoMensual;

document.write(`
  <hr>
  <ul>
    <li>
      <p style="font-size: 1em;">
        Sueldo mensual básico de: <span style="color: red; font-size: 1em;">$${sueldoBase}</span>
      </p>
    </li>
    <li>
      <p style="font-size: 1em;">
        Sueldo mensual básico + bonificación por antigüedad: <span style="font-size: 1em; color: red;">$${sueldoFinal}</span>
      </p>
    </li>
  </ul>
`);
