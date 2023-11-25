/* Crear una web con un reloj que muestre la siguiente información: dia, hora , año
minutos y segundos */


const datos = Date()
console.log(datos)

const reloj = ()=>{
  horas = Date.getHours(),
  ampm,
  minutos = Date.getMinutes(),
  segundos = Date.getSeconds(),
  dia = Date.getDay(),
  diaSemana = Date.getDay(),
  mes = Date.getMonth(),
  anio = Date.getFullYeaDate
}

//traemos los elementos

const parametroHoras = document.getElementById('horas'),
parametroAMPM = document.getElementById('ampm'),
parametroMinutos = document.getElementById('minutos'),
parametroSegundos = document.getElementById('segundos'),
parametroDia = document.getElementById('dia'),
parametroSemana = document.getElementById('diaSemana'),
parametroMes = document.getElementById('mes'),
parametroAnio = document.getElementById('anio')

//creamos los dias de la semana 

const semana = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']