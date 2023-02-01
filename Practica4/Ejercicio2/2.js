function aumentarTamanyo(){
    this.style.fontSize = '16pt';
}

function disminuirTamanyo(){
    this.style.fontSize = '12pt';
}

window.onload = function (){
    document.getElementById("parrafo").onmouseover = aumentarTamanyo;
    document.getElementById("parrafo").onmouseout = disminuirTamanyo;   
}