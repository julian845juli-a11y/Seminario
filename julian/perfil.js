
const datos = JSON.parse(localStorage.getItem("usuario"));

if(datos){

document.getElementById("nombreUsuario").innerHTML=datos.usuario;

document.getElementById("correoUsuario").innerHTML=datos.correo;

}

function cerrarSesion(){

localStorage.removeItem("sesion");

window.location.href="index.html";

}
