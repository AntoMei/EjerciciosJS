 
   window.onload = function(){

    document.getElementById("formulario").onsubmit = cancelar;
}

function cancelar(event) {

    var nombreFormulario = document.getElementById("name");
    var contrasenyaFormulario = document.getElementById("password");
    var emailFormulario = document.getElementById("email");

    if (nombreFormulario.value == "" || contrasenyaFormulario.value == "" || emailFormulario.value == "") {
        alert("Introduzca los datos")
        event.preventDefault();
    }else
    {
        //document.getElementById("formulario").submit
        this.submit;
    }
}