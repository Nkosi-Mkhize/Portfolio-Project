document.querySelectorAll('.carousel').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const prevBtn = carousel.querySelector('.prev');
  const nextBtn = carousel.querySelector('.next');

  let scrollAmount = 0;
  const scrollStep = 320;

  nextBtn.addEventListener('click', () => {
    scrollAmount += scrollStep;
    if (scrollAmount > track.scrollWidth - carousel.offsetWidth) {
      scrollAmount = 0; // Reset if scrolled too far
    }
    track.style.transform = `translateX(-${scrollAmount}px)`;
  });

  prevBtn.addEventListener('click', () => {
    scrollAmount -= scrollStep;
    if (scrollAmount < 0) {
      scrollAmount = 0;
    }
    track.style.transform = `translateX(-${scrollAmount}px)`;
  });
});
