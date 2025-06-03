// Función para manejar el audio
const audio = document.getElementById('audioElement');
const playButton = document.getElementById('playButton');
const statusSpan = document.getElementById('status');

playButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playButton.textContent = '⏸️ Pausar';
    statusSpan.textContent = 'Reproduciendo...';
  } else {
    audio.pause();
    playButton.textContent = '▶️ Reproducir';
    statusSpan.textContent = 'Pausado';
  }
});

// Función para el carrusel
const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const scrollOffset = 368; // Ajusta esto si cambias el ancho de las imágenes

prevBtn.addEventListener('click', () => {
  carousel.scrollBy({
    left: -scrollOffset,
    behavior: 'smooth',
  });
});

nextBtn.addEventListener('click', () => {
  carousel.scrollBy({
    left: scrollOffset,
    behavior: 'smooth',
  });
});

// Contador de días desde el 3 de diciembre de 2023
function calcularDiasDesde(fechaString) {
  const fechaInicio = new Date(fechaString);
  const fechaActual = new Date();
  const diferencia = fechaActual - fechaInicio;
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  return dias;
}

// Insertar el resultado en el HTML
const diasSpan = document.getElementById('diasContados');
if (diasSpan) {
  diasSpan.textContent = calcularDiasDesde('2023-12-03');
}
// Corazones flotando
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 2 + Math.random() * 3 + "s";
  document.querySelector(".heart-container").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);
