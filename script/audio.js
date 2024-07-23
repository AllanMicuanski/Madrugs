function playaudio() {
  const audioChuva = document.getElementById('audioChuva');
  const audioArcticMonkeys = document.getElementById('audioArcticMonkeys');

  if (audioChuva.paused && audioArcticMonkeys.paused) {
    audioChuva.currentTime = 0;
    audioChuva.play();

    audioArcticMonkeys.currentTime = 0;
    audioArcticMonkeys.play();
  } else {
    audioChuva.pause();
    audioArcticMonkeys.pause();
  }
}
