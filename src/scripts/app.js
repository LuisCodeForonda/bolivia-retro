//manejar el menu
document.querySelector('#menuBtn').addEventListener('click', () => {
    console.log("ingreso")
    document.querySelector('#mobile-menu').classList.toggle('-translate-y-full')
    document.querySelector('#menuIcon').classList.toggle('hidden');
    document.querySelector('#closeIcon').classList.toggle('hidden');
})


// Logica de reproduccion de las playeras
const audioCards = document.querySelectorAll('#audio-track');

audioCards.forEach(card => {
    const audio = card.querySelector('#audio-element');
    const button = card.querySelector('#play-btn');
    const togglePlay = card.querySelectorAll('#toggle-play');

    button.addEventListener('click', () => {
        if (!audio.paused) {
            audio.pause();
            card.classList.toggle('play');
            togglePlay.forEach((element) => {element.classList.toggle('hidden')});
            return;
        }

        audioCards.forEach(otherCard => {
            const otherAudio = otherCard.querySelector('#audio-element')
            const otherTogglePlay = otherCard.querySelectorAll('#toggle-play')

            if (otherAudio !== audio && !otherAudio.paused) {
                otherAudio.pause();
                otherCard.classList.toggle('play');
                otherTogglePlay.forEach((element) => {element.classList.toggle('hidden')})
            }
        })

        audio.play();
        card.classList.toggle('play');
        togglePlay.forEach((element) => {element.classList.toggle('hidden')});
    })
})

// Codigo del mini player
const miniPlayer = document.querySelector('#mini-player');

const setPlayer = (title) => {
    const titulo = miniPlayer.querySelector('#title');
    titulo.innerText = title;
}

// Simple visibility observer for scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
    });
}, observerOptions);

document.querySelectorAll('article, #players > div > div').forEach(el => {
    el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
    observer.observe(el);
});