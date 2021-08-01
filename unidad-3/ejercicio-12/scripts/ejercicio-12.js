"use strict";
var cantidadHoras, valorHora, sueldo;

cantidadHoras = parseFloat(prompt("Ingrese la cantidad de horas trabajadas por mes."));
valorHora = parseFloat(prompt("Ingrese la ganancia por hora trabajada."));
sueldo = cantidadHoras * valorHora;

document.write(`
<hr>
  <ul>
    <li>
      <p style="font-size: 1em;">
        Cantidad de horas trabajadas: <span style="color: red; font-size: 1em;">${cantidadHoras}hs</span>
      </p>
    </li>
    <li>
      <p style="font-size: 1em">
        Valor por hora: <span style="color: red; font-size: 1em;">$${valorHora}</span>
      </p>
    </li>
    <li>
      <p style="font-size: 1em">
        Su sueldo actual es de: <span style="color: red; font-size: 1em;">$${sueldo}</span>
      </p>
    </li>
  </ul>
`);
