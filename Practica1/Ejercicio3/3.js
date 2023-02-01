var mes = prompt("Dime un mes: ");

if (mes == "diciembre" || mes == "enero" || mes == "febrero") {
    alert("invierno");
}else if (mes == "marzo" || mes =="abril" || mes == "mayo") {
    alert("primavera");
}else if (mes == "junio" || mes == "julio" || mes == "agosto") {
    alert("verano");
}else if (mes == "septiembre" || mes == "octubre" || mes == "noviembre") {
    alert("otoño"); 
}else{
    alert("Error");
}