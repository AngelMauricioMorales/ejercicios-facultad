"use strict";
let rangoMinimo,
    rangoMaximo,
    parImpar,
    diferencia,
    resultado,
    numeroAnalizado = true,
    rta = confirm("¿Quiere determinar un rango mínimo y un rango máximo?");  //Esta mierda devuelve TRUE o FALSE.

if (rta) {
  rangoMinimo = parseFloat(prompt("Ingrese un número que determine un rango mínimo."));
  rangoMaximo = parseFloat(prompt("Ingrese un número que determine un rango máximo."));
  diferencia = rangoMinimo + 5;
  if (isNaN(rangoMinimo) || isNaN(rangoMaximo) || rangoMaximo < diferencia) {
    document.write(`
    <hr>
      <p>
        <span style="color: red; font-size: 1em;">
        La diferencia entre los rangos debe ser de al menos 5 números.<br>
        Ingrese los valores correctamente.
        </span>
      </p>
    `);
  } else {
    document.write(`
    <hr>
      <ul>
        <li>
          Rango mínimo: ${rangoMinimo}
        </li>
        <li>
          Rango máximo: ${rangoMaximo}
        </li>
      </ul>
    `);

    rta = confirm("¿Comenzar a agregar números?");
    
    if (rta) {
      while (numeroAnalizado) {
        numeroAnalizado = parseFloat(prompt("Ingrese un número cualquiera."));
        parImpar = numeroAnalizado % 2;
        if (numeroAnalizado >= rangoMinimo && numeroAnalizado <= rangoMaximo) {
          resultado = numeroAnalizado + " está dentro del rango designado. ";
          if (parImpar == 0 && numeroAnalizado != 0) {
            resultado += numeroAnalizado + " es PAR.";
          }
        } else {
            resultado = numeroAnalizado + " está fuera del rango designado. ";
            if (parImpar != 0 && numeroAnalizado != 0) {
              resultado += numeroAnalizado + " es IMPAR.";
            }
          }
        document.write(`
        <hr>
          <p>
            ${resultado}
          </p>
        `);
      }
    }
  }
}
