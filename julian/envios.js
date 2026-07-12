document.getElementById("envioForm").addEventListener("submit",function(e){

e.preventDefault();

const envio={

nombre:document.getElementById("nombre").value,

telefono:document.getElementById("telefono").value,

cp:document.getElementById("cp").value,

estado:document.getElementById("estado").value,

municipio:document.getElementById("municipio").value,

colonia:document.getElementById("colonia").value,

calle:document.getElementById("calle").value,

numero:document.getElementById("numero").value,

referencias:document.getElementById("referencias").value

};

localStorage.setItem("envio",JSON.stringify(envio));

alert("✅ Dirección guardada correctamente.");

window.location.href="pago.html"; // Cambia a pago.html cuando lo tengas

});
