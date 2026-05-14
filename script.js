function toggleAudio(person) {
    const teslaAudio = document.getElementById('audio-tesla');
    const jobsAudio = document.getElementById('audio-jobs');
    
    const targetAudio = person === 'tesla' ? teslaAudio : jobsAudio;
    const otherAudio = person === 'tesla' ? jobsAudio : teslaAudio;
    
    const targetBtn = document.getElementById(`btn-${person}`);
    const targetStatus = document.getElementById(`status-${person}`);

    // Pysäytetään se toinen, jos se on päällä
    if (!otherAudio.paused) {
        otherAudio.pause();
        resetUI();
    }

    if (targetAudio.paused) {
        targetAudio.play();
        targetBtn.innerText = "Pysäytä";
        targetStatus.innerText = "Toistetaan...";
    } else {
        targetAudio.pause();
        targetBtn.innerText = "Jatka kuuntelua";
        targetStatus.innerText = "Keskeytetty";
    }

    // Automaattinen lopetus kun tiedosto loppuu
    targetAudio.onended = () => {
        targetBtn.innerText = "Aloita alusta";
        targetStatus.innerText = "Äänikirja päättyi";
    };
}

function resetUI() {
    // Palautetaan nappien tekstit alkutilaan jos ne keskeytettiin toisen toimesta
    document.getElementById('btn-tesla').innerText = "Jatka kuuntelua";
    document.getElementById('status-tesla').innerText = "Keskeytetty";
    document.getElementById('btn-jobs').innerText = "Jatka kuuntelua";
    document.getElementById('status-jobs').innerText = "Keskeytetty";
}
