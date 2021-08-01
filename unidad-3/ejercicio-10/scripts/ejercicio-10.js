'use strict';

var diametro,
    perimetro,
    area,
    pi = 3.1416;

diametro = parseFloat(prompt('Ingrese un valor numérico para el diámetro.'));
perimetro = pi * diametro;
area = pi * ((diametro / 2) ** 2);

document.write(`
  <hr>
  <ul>
    <li>
      <p style="font-size: 1em">
        El perímetro del círculo es: <span style="color: red; font-size: 1em">${perimetro}</span>
      </p> 
    </li>
    <li>
      <p style="font-size: 1em">
        El área del círculo es: <span style="color: red; font-size: 1em">${area}</span>
      </p> 
    </li>
  </ul>
`);