window.onload = function() {
    var elemento = document.getElementById("capa");
    var boton = document.getElementById("boton");
    elemento.addEventListener("click", mensaje);
    boton.addEventListener("click", cambiarMedidas);
}

function mensaje(event) {
    alert('x: '.concat(event.clientX - this.offsetLeft, '\ny: ', event.clientY - this.offsetTop));
}

function cambiarMedidas(event) {
    with(this.parentNode.style){
        height = Math.round(Math.random() * screen.height) + 'px';
        width = Math.round(Math.random() * screen.width) + 'px';
    }
    event.stopPropagation();
}