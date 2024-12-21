const slides = document.querySelector('.slides');
    const slideElements = document.querySelectorAll('.slide');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const dotsContainer = document.getElementById('dots');

    let currentSlide = 0;

    function updateSlider() {
      slides.style.transform = `translateX(-${currentSlide * 100}%)`;
      prevButton.disabled = currentSlide === 0;
      nextButton.disabled = currentSlide === slideElements.length - 1;
      updateDots();
    }

    function createDots() {
      slideElements.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === currentSlide) dot.classList.add('active');
        dot.addEventListener('click', () => {
          currentSlide = index;
          updateSlider();
        });
        dotsContainer.appendChild(dot);
      });
    }

    function updateDots() {
      const dots = document.querySelectorAll('.dot');
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
      });
    }

    prevButton.addEventListener('click', () => {
      if (currentSlide > 0) {
        currentSlide--;
        updateSlider();
      }
    });

    nextButton.addEventListener('click', () => {
      if (currentSlide < slideElements.length - 1) {
        currentSlide++;
        updateSlider();
      }
    });

    createDots();
    updateSlider();