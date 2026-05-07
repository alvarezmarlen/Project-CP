/* obtiene la fecha y la hora */
const fecha = new Date();
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const listaDias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];



/*formatea una cadena*/
const dia = fecha.getDate() + " " + meses[fecha.getMonth()] + " " + fecha.getFullYear();
const nombreDelDia = listaDias[fecha.getDay()];

/* muestra la fecha */
document.getElementById("fecha-dia").innerHTML = "<p>" + dia+ ", " + nombreDelDia + "</p>";


