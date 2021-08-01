'use stric';

var nombre,
    apellido,
    saludo;

nombre = prompt('Ingrese su nombre');
apellido = prompt('Ingrese su apellido');
saludo = "¡Bienvenido";

document.write(`
  <hr>
  <p style="color: red">
    ${saludo} ${nombre} ${apellido}!
  </p>
`);