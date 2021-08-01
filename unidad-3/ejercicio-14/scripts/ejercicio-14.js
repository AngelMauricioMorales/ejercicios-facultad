"use strict";
var bonusSeguroCaro = 0.5;
var bonusSueldo = 0.25;
var bonusAntiguedad = 0.15;
var sueldoMensual,
    sueldoFinal,
    valorHora,
    cantidadHorasMes,
    antiguedad,
    segurosVendidos,
    seguroMasCaro,
    valorHoraPromedio;

valorHora = parseFloat(prompt("Ingrese el valor por hora trabajada."));
cantidadHorasMes = parseFloat(prompt("Ingrese la cantidad de horas trabajadas."));
antiguedad = parseFloat(prompt("Ingrese la cantidad de años de antigüedad."));
segurosVendidos = parseFloat(prompt("Ingrese la cantidad de seguros vendidos."));
seguroMasCaro = parseFloat(prompt("Ingrese el valor del seguro más caro vendido."));
sueldoMensual = valorHora * cantidadHorasMes;

sueldoFinal =
  seguroMasCaro * bonusSeguroCaro +
  sueldoMensual * bonusSueldo * segurosVendidos +
  sueldoMensual * bonusAntiguedad * antiguedad;
  
valorHoraPromedio = sueldoFinal / cantidadHorasMes;

document.write(`
  <hr>
  <ul>
    <li>
      <p style="font-size: 1em;">
        Sueldo básico mensual de: <span style="font-size: 1em; color: red;">$${sueldoMensual}</span>
      </p>
    </li>
    <li>
      <p style="font-size: 1em;">
      Sueldo bonificado mensual final de: <span style="font-size: 1em; color: red;">$${sueldoFinal}</span>
      </p>
    </li>
    <li>
      <p style="font-size: 1em;">
      Valor promedio por hora trabajada bonificada de: <span style="font-size: 1em; color: red;">$${valorHoraPromedio}</span>
      </p>
    </li>
  </ul>
`);
