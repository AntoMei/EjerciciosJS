function informacion(){
    var URLActual = window.location;
    var pathname = window.location.pathname;
    var protocol = window.location.protocol;


    document.write("La URL actual es: " + URLActual + "<br>");
    document.write("El pathname es: " + pathname + "<br>");
    document.write("El protocolo es: " + protocol + "<br>");
}

function botonGoogle() {
    window.location.href = "https://www.google.es/";

}
informacion();