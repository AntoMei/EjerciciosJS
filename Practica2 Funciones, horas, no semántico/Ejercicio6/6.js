function horaActual() {
    var tiempo = new Date();
    if (tiempo.getHours() < 14) {
        alert("Buenos días, son las " + tiempo.toLocaleTimeString() + " horas")
    }else if (tiempo.getHours() < 20) {
        alert("Buenas tardes, son las " + tiempo.toLocaleTimeString() + " horas")
    }else{
        alert("Buenas noches, son las " + tiempo.toLocaleTimeString() + " horas")
    }
}