window.onload = function () {
    document.getElementById("formulario").onkeypress = validarFormulario
}

function validarFormulario(event) {
    var elemento = event;
    var elementoParseado = parseInt(String.fromCharCode(elemento.charCode));
    if (elementoParseado > 0 && elementoParseado < 9 ) {
    } 
    else {
        elemento.preventDefault();
    }
}