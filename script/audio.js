function playaudio() {
  const audioChuva = document.getElementById("audioChuva");
  const audioArcticMonkeys = document.getElementById("audioArcticMonkeys");
  const audioButton = document.getElementById("audioButton");

  if (audioChuva.paused && audioArcticMonkeys.paused) {
    // Inicia a reprodução dos áudios
    audioChuva.currentTime = 0;
    audioChuva.play();

    audioArcticMonkeys.currentTime = 0;
    audioArcticMonkeys.play();

    // Atualiza o texto do botão
    audioButton.textContent = "Desativar vibe's";
  } else {
    // Pausa os áudios
    audioChuva.pause();
    audioArcticMonkeys.pause();

    // Atualiza o texto do botão
    audioButton.textContent = "Ligar vibe's";
  }
}
