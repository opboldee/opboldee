document.querySelectorAll('.asset-image').forEach((image) => {
  image.addEventListener('error', () => {
    image.hidden = true;
  }, { once: true });
});

const courseSelect = document.querySelector('#course-select');
const paymentNote = document.querySelector('#payment-note');
const statusLine = document.querySelector('#form-status');

document.querySelectorAll('.pay-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const course = button.dataset.course;
    courseSelect.value = course;
    paymentNote.textContent = `${course} selected. Complete the form below; payment gateway handoff is ready for integration.`;
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

document.querySelector('#enquiry-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.checkValidity()) {
    statusLine.textContent = 'Please complete the required details before submitting.';
    form.reportValidity();
    return;
  }
  statusLine.textContent = 'Thank you. Our admissions counsellor will call you shortly.';
  form.reset();
});
