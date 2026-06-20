const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

document.querySelectorAll('.quote-form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    if (!button) return;
    const originalText = button.textContent;
    button.textContent = 'Quote Request Sent!';
    button.disabled = true;
    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
      form.reset();
    }, 2200);
  });
});

const galleryShell = document.querySelector('.gallery-shell');

if (galleryShell) {
  const slides = [...galleryShell.querySelectorAll('.comparison-slide')];
  const previousButton = galleryShell.querySelector('.gallery-arrow.prev');
  const nextButton = galleryShell.querySelector('.gallery-arrow.next');
  const dotsWrap = galleryShell.querySelector('.gallery-dots');
  let currentSlide = 0;

  const setSlide = (index) => {
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle('is-active', slideIndex === currentSlide);
    });
    dotsWrap?.querySelectorAll('.gallery-dot').forEach((dot, dotIndex) => {
      dot.classList.toggle('is-active', dotIndex === currentSlide);
      dot.setAttribute('aria-current', dotIndex === currentSlide ? 'true' : 'false');
    });
  };

  slides.forEach((slide, index) => {
    const comparison = slide.querySelector('.comparison');
    const range = slide.querySelector('.comparison-range');

    range?.addEventListener('input', (event) => {
      comparison?.style.setProperty('--position', `${event.target.value}%`);
    });

    const dot = document.createElement('button');
    dot.className = 'gallery-dot';
    dot.type = 'button';
    dot.setAttribute('aria-label', `Show transformation slide ${index + 1}`);
    dot.addEventListener('click', () => setSlide(index));
    dotsWrap?.appendChild(dot);
  });

  previousButton?.addEventListener('click', () => setSlide(currentSlide - 1));
  nextButton?.addEventListener('click', () => setSlide(currentSlide + 1));
  setSlide(0);
}
