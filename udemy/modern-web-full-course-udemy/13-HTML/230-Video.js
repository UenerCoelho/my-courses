function configurarVideo(id) {
  const video = document.getElementById(id);
  video.oncontextmenu = () => false;

  document.querySelector(`[stop=${id}]`).onclick = e => video.stop()
  document.querySelector(`[play=${id}]`).onclick = e => video.play()
  document.querySelector(`[pause=${id}]`).onclick = e => video.pause()

  setInterval(() => {
    const percentual = (video.currentTime / video.duration) * 100;
    const valorDiv = document.querySelector(`[progresso=${id}] > div`);
    valorDiv.style.width = `${percentual}%`;
    valorDiv.innerHTML = `${percentual.toFixed(1)}%`;
  });
}

configurarVideo('meuVideo');