function comprobar(){
    var numeroAleatorio = Math.floor((Math.random() * (10 -1 + 1)) +1);
    document.getElementById("valorAleatorio").value = numeroAleatorio;
    if (document.getElementById("numeroUsuario").value == numeroAleatorio) {
        alert("Has acertado!!!!");
    }else{
        alert("Has fallado!!!!");
    }
}