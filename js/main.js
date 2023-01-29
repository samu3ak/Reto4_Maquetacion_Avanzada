$(document).ready(function () {
    var sesionIniciada = localStorage.getItem("logged");
    if (sesionIniciada !== null) {
        $("#loginButton").remove();
        $("#registerButton").remove();
        $("#profileButton").removeAttr("hidden");
        $("#logoutButton").removeAttr("hidden");
    } else {
        $("#logoutButton").remove();
        $("#profileButton").remove();
    }

    $("#logoutButton").click(function (e) {
        e.preventDefault();
        localStorage.removeItem("logged");
        location.reload();
    });
});