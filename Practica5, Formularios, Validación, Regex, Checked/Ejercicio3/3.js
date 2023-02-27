window.onload = function() {
    addEventListener('click', cambiarColor);  
}

function cambiarColor() {
    let texto = document.getElementById("parrafo");
    if (document.getElementById("verde").checked) {
        texto.style.color = "green";
    }
    if (document.getElementById("azul").checked) {
        texto.style.color = "blue";
    }
    if (document.getElementById("rojo").checked) {
        texto.style.color = "red";
    }
}