function toggleAudio(person) {
    const ids = ['tesla', 'jobs', 'curie'];
    const targetAudio = document.getElementById(`audio-${person}`);
    const targetBtn = document.getElementById(`btn-${person}`);

    // Pysäytä muut soittimet
    ids.forEach(id => {
        const a = document.getElementById(`audio-${id}`);
        const b = document.getElementById(`btn-${id}`);
        if (id !== person && !a.paused) {
            a.pause();
            b.innerText = "▶";
        }
    });

    if (targetAudio.paused) {
        targetAudio.play();
        targetBtn.innerText = "II"; // Tauko-symboli
    } else {
        targetAudio.pause();
        targetBtn.innerText = "▶";
    }

    // Päivitä edistymispalkki
    targetAudio.ontimeupdate = () => {
        const progress = (targetAudio.currentTime / targetAudio.duration) * 100;
        document.getElementById(`bar-${person}`).style.width = progress + "%";
    };

    // Kun loppuu
    targetAudio.onended = () => {
        targetBtn.innerText = "▶";
        document.getElementById(`bar-${person}`).style.width = "0%";
    };
}

// Mahdollisuus kelaa klikkaamalla raitaa
function seek(event, person) {
    const audio = document.getElementById(`audio-${person}`);
    const container = event.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const width = rect.width;
    const percentage = x / width;
    audio.currentTime = percentage * audio.duration;
}
