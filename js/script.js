// Selecciona el botón de "Volver Atrás" por su ID
const botonVolverAtras = document.getElementById('volverAtras');

// Agrega un evento de clic al botón para retroceder en la historia
botonVolverAtras.addEventListener('click', function() {
    window.history.back(); // Retrocede en la historia del navegador
});
