function abrir() {
 var abrirVentana = window.open("", "pagina", "toolbar=yes, location=no, menubar=yes" + "width=500,height=500" );
 abrirVentana.document.write("<input type='button' " + "value='Cerrar' onClick='window.close();'>\n")
}

function cerrar() { 
}