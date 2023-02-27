function fechaActual(){
    var d = new Date(); 
    //var dia = ["domingo", "lunes"]
    var dia=new Array(7);
    dia[0]="Domingo";
    dia[1]="Lunes";
    dia[2]="Martes";
    dia[3]="Miercoles";
    dia[4]="Jueves";
    dia[5]="Viernes";
    dia[6]="Sabado";

    var mes = new Date();
    var meses = new Array(12);
    meses[0]="Enero";
    meses[1]="Febrero";
    meses[2]="Marzo";
    meses[3]="Abril";
    meses[4]="Mayo";
    meses[5]="Junio";
    meses[6]="Julio";
    meses[7]="Agosto";
    meses[8]="Septiembre";
    meses[9]="Octubre";
    meses[10]="Noviembre";
    meses[11]="Diciembre";

   alert(dia[d.getDay()] + ", " + d.getDate() + " de " + meses[mes.getMonth()] + " de " + d.getFullYear());
}