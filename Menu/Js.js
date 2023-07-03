
//Llamando el local store del login 
document.addEventListener("DOMContentLoaded", function() {
    var Usuario = localStorage.getItem('Usuario');
    if (Usuario) {
        var iconoUsuario = '<img src="/Menu/Imagenes/IconoUser.png" alt="Usuario" style="width: 30px; height: 30px; margin-left: 43px;">';
        var nombreUsuario = '<a style="padding-left: 40px;" class="dropdown-item" href="#">' + Usuario + '</a>';
        document.getElementById('PalabraRegistrar').innerHTML = iconoUsuario + nombreUsuario;
    }
});


//Funcion para cerrar sesion y no pueda regresar 

    document.getElementById("cerrarSesion").addEventListener("click", function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace

    // Realiza la redirección al login
    window.location.href = "/login/index.html";

    // Reemplaza el historial del navegador para que no se pueda regresar
    history.replaceState(null, null, "/login/index.html");
    });