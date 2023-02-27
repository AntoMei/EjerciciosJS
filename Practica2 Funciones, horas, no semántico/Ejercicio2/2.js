function decirMes() {
    var mes = prompt("Dime un mes: ");
    switch (mes){
        case "diciembre":
        case "enero":
        case "febrero":
            alert("Estamos a invierno");
            break;
        case "marzo":
        case "abril":
        case "mayo":
            alert("Estamos en primavera");
            break;
        case "junio":
        case "julio":
        case "agosto":
            alert("Estamos en verano");
            break;
        case "septiembre":
        case "octubre":
        case "noviembre":
            alert("Estamos en otoño");
            break;
        default:
            alert("Opcion no valida");
            break;
    }
}
decirMes();