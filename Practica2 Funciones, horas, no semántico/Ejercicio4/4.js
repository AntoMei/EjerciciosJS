function redimensionar(){
var navegador = navigator.userAgent;
if (navegador != "msie") {
    document.write("Operacion no permitida con este navegador")    
}else{
        miVentana.resizeTo(500, 500);
    }
}
redimensionar();