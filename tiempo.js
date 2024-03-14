// JavaScript para el contador de tiempo

// Fecha objetivo: 26 de marzo de 2024
const targetDate = new Date('2024-03-26T00:00:00');

function updateCountdown() {
    const currentDate = new Date();
    const difference = targetDate - currentDate;

    if (difference <= 0) {
        // Si ya ha pasado la fecha objetivo
        document.getElementById('countdown').innerHTML = "¡Ha llegado el día!";
    } else {
        // Calcula el tiempo restante
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Actualiza el contenido en el elemento con id 'countdown'
        document.getElementById('contadordtiempo').innerHTML = `
            Faltan ${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos para la salida del juego`;
    }
}

// Actualiza el contador cada segundo
setInterval(updateCountdown, 1000);

// Llama a updateCountdown() una vez al cargar la página para evitar un retraso inicial
updateCountdown();