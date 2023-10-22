import throttle from 'lodash/throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');

const saveFormDataToStorage = throttle(() => {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500);

emailInput.addEventListener('input', saveFormDataToStorage);
messageTextarea.addEventListener('input', saveFormDataToStorage);

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };

  console.log(formData);

  emailInput.value = '';
  messageTextarea.value = '';
  localStorage.removeItem('feedback-form-state');
});

const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

emailInput.value = savedFormData.email || '';
messageTextarea.value = savedFormData.message || '';

