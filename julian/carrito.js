// ==========================
//      MX STORE CARRITO
// ==========================

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const contenedor = document.getElementById("listaProductos");
const totalHTML = document.getElementById("total");

function mostrarCarrito() {

    if (!contenedor) return;

    contenedor.innerHTML = "";

    let total = 0;

    if (carrito.length === 0) {
        contenedor.innerHTML = `
            <h2 style="text-align:center;">
                🛒 Tu carrito está vacío
            </h2>
        `;
        totalHTML.textContent = "0";
        return;
    }

    carrito.forEach((producto, index) => {

        total += producto.precio * producto.cantidad;

        contenedor.innerHTML += `
        <div class="producto">

            <div class="info">

                <img src="${producto.imagen}" alt="${producto.nombre}">

                <div>
                    <h2>${producto.nombre}</h2>
                    <p>${producto.descripcion}</p>
                    <h3>$${producto.precio}</h3>
                </div>

            </div>

            <div class="acciones">

                <button onclick="restarCantidad(${index})">
                    -
                </button>

                <span>${producto.cantidad}</span>

                <button onclick="sumarCantidad(${index})">
                    +
                </button>

                <br><br>

                <button onclick="eliminarProducto(${index})">
                    Eliminar
                </button>

            </div>

        </div>
        `;
    });

    totalHTML.textContent = total.toLocaleString();
}

// Agregar producto desde la tienda
function agregarAlCarrito(nombre, precio, descripcion, imagen) {

    let productoExistente = carrito.find(
        producto => producto.nombre === nombre
    );

    if (productoExistente) {

        productoExistente.cantidad++;

    } else {

        carrito.push({
            nombre,
            precio,
            descripcion,
            imagen,
            cantidad: 1
        });

    }

    guardarCarrito();

    alert("✅ Producto agregado al carrito");
}

// Aumentar cantidad
function sumarCantidad(index) {

    carrito[index].cantidad++;

    guardarCarrito();
}

// Disminuir cantidad
function restarCantidad(index) {

    if (carrito[index].cantidad > 1) {

        carrito[index].cantidad--;

    } else {

        carrito.splice(index, 1);

    }

    guardarCarrito();
}

// Eliminar producto
function eliminarProducto(index) {

    carrito.splice(index, 1);

    guardarCarrito();
}

// Guardar cambios
function guardarCarrito() {

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    mostrarCarrito();
}

// Vaciar carrito completo
function vaciarCarrito() {

    carrito = [];

    localStorage.removeItem("carrito");

    mostrarCarrito();
}

// Cargar al abrir la página
mostrarCarrito();