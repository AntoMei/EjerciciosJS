window.onload = function() {
    addEventListener("click", cambiarColor);
}

function cambiarColor(){ 
    let colorParrafo = document.getElementById("color");
    let texto = document.getElementById("parrafo");
    texto.style.color = colorParrafo.value;
}