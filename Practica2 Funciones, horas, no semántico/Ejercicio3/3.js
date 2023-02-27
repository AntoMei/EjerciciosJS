function mensajeBienvenida() {
    document.write('<h1>Bienvenido a mi pagina</h1>');
 
    document.write("Plataforma: ");
    document.write(navigator.appCodeName + "<br>");
    
    var opcion = window.confirm("Aceptar");
    if (opcion == true){
        document.write("continuamos...");
    }else{
        document.write("adios...");
    }
}
mensajeBienvenida();