window.onload = function(){
    const botones = document.getElementsByTagName("button");
    for (i = 0; i < botones.length; i++){
        botones[i].addEventListener("click", mensaje);
    }
}

function mensaje(){
    alert("Has pulsado sobre un botón");
}