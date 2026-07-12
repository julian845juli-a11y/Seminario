// ===============================
//      MX STORE - LOGIN.JS
// ===============================

// Registrar usuario
const registroForm = document.getElementById("registroForm");

registroForm.addEventListener("submit", function(e){

    e.preventDefault();

    const usuario = document.getElementById("nuevoUsuario").value;
    const correo = document.getElementById("correo").value;
    const password = document.getElementById("nuevaPassword").value;

    const usuarioNuevo = {
        usuario: usuario,
        correo: correo,
        password: password
    };

    localStorage.setItem("usuario", JSON.stringify(usuarioNuevo));

    alert("✅ Cuenta creada correctamente.");

    registroForm.reset();

});


// Iniciar sesión

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    const datos = JSON.parse(localStorage.getItem("usuario"));

    if(datos == null){

        alert("⚠ Primero debes crear una cuenta.");

        return;

    }

    if(usuario === datos.usuario && password === datos.password){

        localStorage.setItem("sesion", "activa");

        alert("Bienvenido " + usuario);

        window.location.href = "inicio.html";

    }else{

        alert("Usuario o contraseña incorrectos.");

    }

});


// Si ya inició sesión anteriormente

if(localStorage.getItem("sesion") === "activa"){

    window.location.href = "inicio.html";

}