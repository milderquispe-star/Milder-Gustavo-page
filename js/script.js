// Menú sencillo para móviles, año automático y formulario de contacto.
const botonMenu = document.getElementById("menuToggle");
const navegacion = document.getElementById("navegacion");
const enlaces = document.querySelectorAll(".navegacion a");

botonMenu.addEventListener("click", function () {
    navegacion.classList.toggle("abierto");

    const estaAbierto = navegacion.classList.contains("abierto");
    botonMenu.setAttribute("aria-expanded", estaAbierto);
});

enlaces.forEach(function (enlace) {
    enlace.addEventListener("click", function () {
        navegacion.classList.remove("abierto");
        botonMenu.setAttribute("aria-expanded", "false");
    });
});

document.getElementById("anio").textContent = new Date().getFullYear();

const formulario = document.getElementById("formularioContacto");
const estadoFormulario = document.getElementById("estadoFormulario");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    if (!formulario.checkValidity()) {
        formulario.reportValidity();
        return;
    }

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Reemplaza esta dirección por tu correo real.
    const correoDestino = "tu-correo@ejemplo.com";
    const asuntoCorreo = encodeURIComponent(asunto + " - mensaje de " + nombre);
    const cuerpoCorreo = encodeURIComponent(
        "Nombre: " + nombre + "\\n" +
        "Correo de contacto: " + correo + "\\n\\n" +
        "Mensaje:\\n" + mensaje
    );

    estadoFormulario.textContent = "Se abrirá tu aplicación de correo para que puedas enviar el mensaje.";
    window.location.href = "mailto:" + correoDestino +
        "?subject=" + asuntoCorreo + "&body=" + cuerpoCorreo;
});
