$(document).ready(function () {
    // User Class Definition
    class Usuario {
        constructor(nombre, correoElectronico, fechaNacimiento, contrasenha) {
            this.nombre = nombre;
            this.correoElectronico = correoElectronico;
            this.fechaNacimiento = fechaNacimiento;
            this.contrasenha = contrasenha;
        }
    }

    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    } else {
                        let nombre = $("#username").val();
                        let email = $("#inputEmail4").val();
                        let fechaNac = $("#fechaNac").val();
                        let contrasenha = $("#inputPassword4").val();
                        var user = new Usuario(nombre, email, fechaNac, contrasenha);
                        localStorage.setItem("user", JSON.stringify(user));
                        let success = document.createElement("h1");
                        $(success).html("Usuario creado satisfactoriamente");
                        $(success).addClass("display-6");
                        $(form).after(success);
                        $(form).remove();
                    }
                    form.classList.add('was-validated')
                }, false)
            })
    })()
});
