$(document).ready(function () {
    // User LocalStorage Data Get
    var user = JSON.parse(localStorage.getItem("user"));

    if (localStorage.getItem("logged") !== null) {
        $("#nombreUsuario").html(user.nombre);
        $("#fechaNacimiento").html(`Fecha de nacimiento: ${user.fechaNacimiento}`);
    }
});