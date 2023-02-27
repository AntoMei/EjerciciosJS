window.onload = function() {
    document.getElementById("name").focus();
    document.getElementById("opciones").onchange = aficiones;
    document.getElementById("formulario").onsubmit = validarFormulario;
    document.getElementById("observaciones").onkeydown = maximoCaracteres;
}

function aficiones() {
   var lista = document.getElementById("opciones");
   var indice = lista.selectedIndex;
   var opcion = lista.options[indice];

   alert("La logitud de la lista es :" + document.getElementById("opciones").length + "\n El indice seleccionado es el " + (indice+1) + 
   "\n El valor del indice seleccionado es " + opcion.text);
}

function maximoCaracteres(event) {
    var texto = document.getElementById("observaciones").value;
    if (texto.length >= 150) {
        alert("Has superado los 150 caracteres")
        event.preventDefault();   
        } 
    }
   

function validarFormulario(event) {

    dni = document.getElementById("dni").value;
    telefono = document.getElementById("telefono").value;
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    if(dni == null || dni.length == 0 || /^\s+$/.test(dni) ) {
        alert("Introduzca el Dni");
        event.preventDefault();
    }else{
        if( !(/^\d{8}[A-Z]$/.test(dni)) ) {
            alert("El formato no es valido");
            event.preventDefault();
          }
          if(dni.charAt(8) != letras[(dni.substring(0, 8))%23]) {
            alert("Dni incorrecto");
            event.preventDefault();
          }
    }
    if ( !(/^\d{9}$/.test(telefono)) ) {
        alert("Numero de telefono incorrecto")
        event.preventDefault(); 
    }
}