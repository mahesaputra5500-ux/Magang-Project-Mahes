/* ========================= */
/* 🎵 MUSIK DENGAN TOMBOL */
/* ========================= */
const music = new Audio("Yeji.mp3");
music.loop = true;
music.volume = 0.5;

const musicBtn = document.getElementById("musicBtn");
let isPlaying = false;

musicBtn.addEventListener("click", () => {
    if (!isPlaying) {
        music.play();
        musicBtn.textContent = "⏸ Pause Music";
        isPlaying = true;
    } else {
        music.pause();
        musicBtn.textContent = "▶ Play Music";
        isPlaying = false;
    }
});

/* ========================= */
/* 🌸 ANIMASI ANIME SAKURA */
/* ========================= */
function buatSakuraAnime() {
    setInterval(() => {
        const sakura = document.createElement("div");
        sakura.className = "sakura";
        sakura.textContent = "🌸";

        sakura.style.left = Math.random() * 100 + "vw";
        sakura.style.fontSize = (14 + Math.random() * 10) + "px";
        sakura.style.animationDuration = (6 + Math.random() * 4) + "s";

        document.body.appendChild(sakura);

        setTimeout(() => {
            sakura.remove();
        }, 12000);
    }, 1200);
}

/* ========================= */
/* JALANKAN */
/* ========================= */
window.addEventListener("load", () => {
    buatSakuraAnime();
});
