$(document).ready(function () {
    // User Class Definition
    class Usuario {
        constructor(nombre, correoElectronico, fechaNacimiento) {
            this.nombre = nombre;
            this.correoElectronico = correoElectronico;
            this.fechaNacimiento = fechaNacimiento;
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
                        var user = new Usuario(nombre, email, fechaNac);
                        localStorage.setItem("user", JSON.stringify(user));
                    }
                    form.classList.add('was-validated')
                }, false)
            })
    })()
});
