const revealables = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

revealables.forEach((element) => observer.observe(element));

document.querySelector('#booking')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const concern = data.get('concern') || 'your facial-care concern';
  const status = form.querySelector('.form-status');
  status.textContent = `Your checkup is reserved. Azah will prepare a ${concern.toString().toLowerCase()} plan before the session.`;
  form.reset();
});

document.querySelectorAll('.cart-button').forEach((button) => {
  button.addEventListener('click', () => {
    button.textContent = 'Added — checkout next';
  });
});
