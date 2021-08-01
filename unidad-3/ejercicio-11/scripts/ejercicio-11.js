"use strict";
var num1, num2, num3, num4, suma, promedio;

num1 = parseFloat(prompt("Ingrese el primer valor numérico"));
num2 = parseFloat(prompt("Ingrese el segundo valor numérico"));
num3 = parseFloat(prompt("Ingrese el tercer valor numérico"));
num4 = parseFloat(prompt("Ingrese el cuarto valor numérico"));

suma = num1 + num2 + num3 + num4;
promedio = suma / 4;

document.write(`
<hr>
  <ul>
    <li>
      <p style="font-size: 1em">
        La suma total es igual a: <span style="color: red; font-size: 1em">${suma}</span>
      </p> 
    </li>
    <li>
      <p style="font-size: 1em">
        El promedio de la suma es igual a: <span style="color: red; font-size: 1em">${promedio}</span>
      </p> 
    </li>
  </ul>
`);
