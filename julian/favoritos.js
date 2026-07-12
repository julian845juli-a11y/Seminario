let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

const lista = document.getElementById("listaFavoritos");

function mostrarFavoritos(){

    lista.innerHTML="";

    if(favoritos.length===0){

        lista.innerHTML=`
        <div class="vacio">
            ❤️ Aún no tienes productos favoritos.
        </div>
        `;

        return;
    }

    favoritos.forEach((producto,index)=>{

        lista.innerHTML+=`

        <div class="card">

            <img src="${producto.imagen}">

            <div class="info">

                <h3>${producto.nombre}</h3>

                <div class="precio">
                    $${producto.precio}
                </div>

                <div class="botones">

                    <button class="agregar"
                    onclick="agregarCarrito(${index})">

                    🛒 Comprar

                    </button>

                    <button class="eliminar"
                    onclick="eliminarFavorito(${index})">

                    ❌

                    </button>

                </div>

            </div>

        </div>

        `;

    });

}

function eliminarFavorito(index){

    favoritos.splice(index,1);

    localStorage.setItem("favoritos",JSON.stringify(favoritos));

    mostrarFavoritos();

}

function agregarCarrito(index){

    let carrito=JSON.parse(localStorage.getItem("carrito"))||[];

    carrito.push(favoritos[index]);

    localStorage.setItem("carrito",JSON.stringify(carrito));

    alert("Producto agregado al carrito.");

}

mostrarFavoritos();