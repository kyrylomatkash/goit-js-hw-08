// Імпорт
import throttle from 'lodash.throttle';
// Основні змінні
const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');
const thanksMessage = document.querySelector('.message')
// Збереження данних форми до сховища
const saveFormDataToStorage = throttle(() => {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500);

emailInput.addEventListener('input', saveFormDataToStorage);
messageTextarea.addEventListener('input', saveFormDataToStorage);
// Прівент перезавантаження при сабміті
feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };

  console.log(formData);
// Стирання данних після сабміту
  emailInput.value = '';
  messageTextarea.value = '';
  localStorage.removeItem('feedback-form-state');
});
// Ввведення збереженних данних
const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

emailInput.value = savedFormData.email || '';
messageTextarea.value = savedFormData.message || '';

