$(document).ready(function () {
    //  Getting User LocalStorage Data Back
    var user = JSON.parse(localStorage.getItem("user"));

    // Alert
    let aviso = document.createElement("p");
    $(aviso).html("Ese usuario no existe o no está registrado");
    $("button[type=submit]").after(aviso);
    $(aviso).addClass("mt-3");
    $(aviso).css("display", "none");

    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    event.preventDefault()
                    event.stopPropagation()
                    let username = $("#username").val();
                    let password = $("#inputPassword4").val();
                    if (user === null || !checkUser(username, password, user)) {
                        $(aviso).css("display", "block");
                    } else {
                        localStorage.setItem("logged", "true");
                        window.location.href = "./profile.html";
                    }
                }, false)
            })
    })()

    function checkUser(username, password, localUser) {
        return localUser.nombre == username && localUser.contrasenha == password;
    }
});
