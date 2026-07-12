let metodo="";

function mostrar(tipo){

metodo=tipo;

document.getElementById("formulario").style.display="none";

document.getElementById("mensaje").style.display="none";

if(tipo==="tarjeta"){

document.getElementById("formulario").style.display="block";

}

if(tipo==="paypal"){

document.getElementById("mensaje").style.display="block";

document.getElementById("mensaje").innerHTML="Serás redirigido a PayPal para completar el pago.";

}

if(tipo==="transferencia"){

document.getElementById("mensaje").style.display="block";

document.getElementById("mensaje").innerHTML=`
<b>Banco:</b> BBVA<br><br>

Cuenta: 1234567890<br><br>

CLABE: 012345678901234567
`;

}

if(tipo==="contra"){

document.getElementById("mensaje").style.display="block";

document.getElementById("mensaje").innerHTML="Pagarás cuando recibas tu pedido.";

}

}

function finalizarCompra(){

if(metodo===""){

alert("Selecciona un método de pago.");

return;

}

alert("🎉 ¡Gracias por comprar en MOTOCROSS LAND!");

localStorage.removeItem("carrito");

window.location.href="inicio.html";

}
