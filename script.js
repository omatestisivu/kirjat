const audio = document.getElementById('audiobook');
const toggleBtn = document.getElementById('toggleBtn');
const btnText = document.getElementById('btnText');
const statusText = document.getElementById('statusText');

toggleBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        btnText.innerText = "Pysäytä";
        statusText.innerText = "Toistetaan äänikirjaa...";
    } else {
        audio.pause();
        btnText.innerText = "Jatka kuuntelua";
        statusText.innerText = "Keskeytetty";
    }
});

// Kun äänikirja loppuu luonnostaan
audio.onended = () => {
    btnText.innerText = "Aloita alusta";
    statusText.innerText = "Äänikirja päättyi";
};
