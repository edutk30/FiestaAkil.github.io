// Agregar interactividad al botón de confirmar asistencia
document.getElementById("confirmar").addEventListener("click", () => {
    // Muestra la alerta cuando se confirma asistencia
    alert("¡Gracias por confirmar tu asistencia! 🎉 Nos vemos en el cumpleaños.");
    
    // Mostrar confeti al hacer clic en el botón
    startConfetti();
});

// Función para iniciar el confeti
function startConfetti() {
    // Usamos la librería canvas-confetti para generar el confeti
    confetti({
        particleCount: 100, // número de piezas de confeti
        spread: 70,         // cuán disperso es el confeti
        origin: { y: 0.6 }, // comienza en la mitad inferior de la pantalla
        colors: ['#ff0', '#f0f', '#0ff'], // colores del confeti
    });
}
