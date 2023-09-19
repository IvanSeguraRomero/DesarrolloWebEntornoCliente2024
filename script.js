window.addEventListener("resize", function() {
    const centro = document.getElementById(".mensajes");
    const botonMovil = document.getElementById("boton");
    if (window.innerWidth <= 768) {
        centro.style.display = "none"; // Oculta el contenido en el centro
        botonMovil.style.display = "block"; // Muestra el botón
    } else {
        centro.style.display = "block"; // Muestra el contenido en el centro
        botonMovil.style.display = "none"; // Oculta el botón
    }
});

