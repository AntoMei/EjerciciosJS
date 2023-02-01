function numeroEnlaces() {
    var enlaces = document.getElementsByTagName("a");
    alert("Numero de enlaces: " + enlaces.length); 
}

function referenciaEnlaces() {
    var enlaces = document.links;
    var resultado = "";

    for (i = 0; i < enlaces.length; i++) { 
        resultado += enlaces[i] + "\n";
    }

    alert("Enlaces: \n" + resultado);
}

function referenciaEnlacesParrafo() {
    var parrafo = document.getElementsByTagName("p");
    var resultado = "";
    var nombre = "";
    var enlaces = "";

    for (i = 0; i < parrafo.length; i++) {
        nombre = parrafo[i].getAttribute('id');
        enlaces = parrafo[i].getElementsByTagName("a");
        console.log(enlaces);

        for (j = 0; j < enlaces.length; j++) {
            resultado += nombre + " " + enlaces[j] + "\n"; 
        }
    }
    alert(resultado);
}

function colorVerde() {
    var parrafo = document.getElementsByTagName("p");

    for (i = 0; i < parrafo.length; i++) {
        parrafo[i].style.backgroundColor = "green";        
    }
}

function restaurarColor() {
    var parrafo = document.getElementsByTagName("p");

    for (i = 0; i < parrafo.length; i++) {
     parrafo[i].style.backgroundColor = "";
    }
}