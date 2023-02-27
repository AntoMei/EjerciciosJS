window.onload = function(){
    const parrafos = document.getElementById("parrafo");
    parrafos.addEventListener("mouseenter", aumentar);
    parrafos.addEventListener("mouseout", disminuir);
}

function aumentar(){
    this.style.fontSize = '16pt';
}

function disminuir(){
    this.style.fontSize = '12pt';
}