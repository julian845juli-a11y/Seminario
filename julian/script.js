let total = 0;

function agregar(nombre, precio){

let lista = document.getElementById("lista");

let item = document.createElement("li");

item.innerHTML = nombre + " - $" + precio;

lista.appendChild(item);

total += precio;

document.getElementById("total").innerHTML = total;

}

const buscar = document.getElementById("buscar");

buscar.addEventListener("keyup",function(){

let texto = buscar.value.toLowerCase();

let cards = document.querySelectorAll(".card");

cards.forEach(card=>{

let nombre = card.querySelector("h3").innerText.toLowerCase();

if(nombre.includes(texto)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});