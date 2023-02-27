function calcularIva() {
    var precio = parseInt(prompt("Introduce el precio del articulo: "));
    var iva = 1.21;
    var precioTotal = precio * iva;
    alert(precioTotal.toFixed(2));
}
calcularIva();