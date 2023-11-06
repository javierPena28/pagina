document.getElementById("contactForm").addEventListener("submit", function (event) {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var mensaje = document.getElementById("mensaje").value;

    if (!nombre || !correo || !mensaje) {
        alert("Por favor, complete todos los campos.");
        event.preventDefault();
    }
});
