
document.addEventListener('click', () => {
  const video = document.querySelector('.hero-video');
  if (video.muted) {
    video.muted = false;
    video.play();
  }
});
