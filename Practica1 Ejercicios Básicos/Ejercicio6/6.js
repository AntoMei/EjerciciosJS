var cadena = prompt("Introduzca una cadena: ");
var cadenaMayusculas = cadena.toUpperCase();
var cadenaMinisculas = cadena.toLowerCase();
var palabras = cadena.split(" ");
var palabrasReverse = cadena.split(" ").reverse();

document.write(cadena.length + "<br>");
document.write(cadenaMayusculas + "<br>");
document.write(cadenaMinisculas + "<br>");

for (var i = 0; i < palabras.length; i++) {
    document.write(palabras[i] + "<br>");
}
for (var i = 0; i < palabrasReverse.length; i++) {
    document.write(palabrasReverse[i] + "<br>");  
}