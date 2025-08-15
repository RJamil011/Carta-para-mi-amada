const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const flap = document.querySelector(".flap");
const music = document.getElementById("bg-music");

// Estado de la carta
let isOpen = false;

// Click en sobre para abrir carta
envelope.addEventListener("click", () => {
    if (!isOpen) {
        flap.style.transform = "rotateX(180deg)";
        setTimeout(() => {
            letter.classList.add("show");
            music.play(); // 🎶 inicia la música
        }, 300);
        isOpen = true;
    }
});

// Click en carta para guardarla en sobre
letter.addEventListener("click", () => {
    if (isOpen) {
        letter.classList.remove("show");
        setTimeout(() => {
            flap.style.transform = "rotateX(0deg)";
            music.pause();       // ⏸ pausa la música
            music.currentTime = 0; // reinicia desde el inicio
        }, 300);
        isOpen = false;
    }
});

// Generar corazones flotantes
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 300);