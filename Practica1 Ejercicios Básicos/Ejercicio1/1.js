var suma = 0;
var contador = 0;

for (var index = 0; index < 5; index++) {
    var numero = parseInt(prompt("Introduce 5 numeros:",""));

    suma += numero;

    if (numero >= 100) {
        contador++;
    }
}
alert(suma + " " + contador);