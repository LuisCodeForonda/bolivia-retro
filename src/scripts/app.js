//manejar el menu
document.querySelector("#menuBtn").addEventListener("click", () => {
  document.querySelector("#mobile-menu").classList.toggle("-translate-x-full");
  document.querySelector("#menuIcon").classList.toggle("hidden");
  document.querySelector("#closeIcon").classList.toggle("hidden");
});

const navLinks = document.querySelector("#mobile-menu").querySelectorAll("a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document
      .querySelector("#mobile-menu")
      .classList.toggle("-translate-x-full");
    document.querySelector("#menuIcon").classList.toggle("hidden");
    document.querySelector("#closeIcon").classList.toggle("hidden");
  });
});

//lista de estaciones usada en ambos metodos
const audioCards = document.querySelectorAll("#audio-track");

// Escuchar ahora logica boton hero
const escucharBtn = document.querySelector("#escuchar-btn");
escucharBtn.addEventListener("click", () => {
  if (!estaReproduciendo()) {
    const trackAleatorio = audioCards[Math.floor(Math.random() * 3)];
    const audio = trackAleatorio.querySelector("#audio-element");
    const togglePlay = trackAleatorio.querySelectorAll("#toggle-play");
    audio.play();
    trackAleatorio.classList.toggle("play");
    togglePlay.forEach((element) => {
      element.classList.toggle("hidden");
    });
  }
});

// Logica de reproduccion de las playeras
audioCards.forEach((card) => {
  const audio = card.querySelector("#audio-element");
  const button = card.querySelector("#play-btn");
  const togglePlay = card.querySelectorAll("#toggle-play");

  button.addEventListener("click", () => {
    if (!audio.paused) {
      audio.pause();
      card.classList.toggle("play");
      togglePlay.forEach((element) => {
        element.classList.toggle("hidden");
      });
      return;
    }

    audioCards.forEach((otherCard) => {
      const otherAudio = otherCard.querySelector("#audio-element");
      const otherTogglePlay = otherCard.querySelectorAll("#toggle-play");

      if (otherAudio !== audio && !otherAudio.paused) {
        otherAudio.pause();
        otherCard.classList.toggle("play");
        otherTogglePlay.forEach((element) => {
          element.classList.toggle("hidden");
        });
      }
    });

    audio.play();
    card.classList.toggle("play");
    togglePlay.forEach((element) => {
      element.classList.toggle("hidden");
    });
  });
});

// Funciones de apoyo
function estaReproduciendo() {
  let bandera = false;
  audioCards.forEach((audioAux) => {
    const audioElement = audioAux.querySelector("#audio-element");
    if (
      !audioElement.paused &&
      !audioElement.ended &&
      audioElement.currentTime > 0
    ) {
      bandera = true;
    }
  });
  return bandera;
}

// Codigo del mini player
const miniPlayer = document.querySelector("#mini-player");

function setEstacion(card) {
  const titulo = miniPlayer.querySelector('#title');
  const descripcion = miniPlayer.querySelector('#description');
  titulo.innerText = card.querySelector('h3').innerText;
  descripcion.innerText = card.querySelector('p').innerText;
};

function togglePlay(){
  if(estaReproduciendo()){

  }
}

// Simple visibility observer for scroll animations
const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("opacity-100", "translate-y-0");
      entry.target.classList.remove("opacity-0", "translate-y-10");
    }
  });
}, observerOptions);

document.querySelectorAll("article, #players > div > div").forEach((el) => {
  el.classList.add(
    "transition-all",
    "duration-700",
    "opacity-0",
    "translate-y-10",
  );
  observer.observe(el);
});
