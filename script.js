const people = ['tesla', 'jobs', 'curie', 'altman'];

function toggleAudio(person) {
    const targetAudio = document.getElementById(`audio-${person}`);
    const targetBtn = document.getElementById(`btn-${person}`);

    // Pysäytetään kaikki muut ja nollataan niiden kuvakkeet
    people.forEach(p => {
        const a = document.getElementById(`audio-${p}`);
        const b = document.getElementById(`btn-${p}`);
        if (p !== person) {
            a.pause();
            b.innerText = "▶";
        }
    });

    if (targetAudio.paused) {
        targetAudio.play();
        targetBtn.innerText = "II";
    } else {
        targetAudio.pause();
        targetBtn.innerText = "▶";
    }

    // Päivitetään edistymispalkki vain sille, joka soi
    targetAudio.ontimeupdate = () => {
        const progress = (targetAudio.currentTime / targetAudio.duration) * 100;
        document.getElementById(`bar-${person}`).style.width = progress + "%";
    };

    // Kun tiedosto loppuu
    targetAudio.onended = () => {
        targetBtn.innerText = "▶";
        document.getElementById(`bar-${person}`).style.width = "0%";
    };
}

function seek(event, person) {
    const audio = document.getElementById(`audio-${person}`);
    const container = event.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const width = rect.width;
    audio.currentTime = (x / width) * audio.duration;
}
