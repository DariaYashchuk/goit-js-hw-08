var throttle = require("lodash.throttle");

const refs = {
  form: document.querySelector(".feedback-form"),
  email: document.querySelector(".feedback-form input"),
  textarea: document.querySelector(".feedback-form textarea"),
};

const formData = {};

const FEEDBACK_FORM = "feedback-form-state";

populateTextarea();

refs.form.addEventListener("input", throttle(onTextareaInput, 500));

refs.form.addEventListener("submit", onFormSubmit);

// refs.form.addEventListener("input", (e) => {
//   formData[e.target.name] = e.target.value;
//   console.log(formData);
//   localStorage.setItem(FEEDBACK_FORM, formData);
// });

function onTextareaInput(e) {
  //   const message = e.target.value;

  //   localStorage.setItem(FEEDBACK_FORM, message);

  formData[e.target.name] = e.target.value;
  console.log(formData);
  localStorage.setItem(FEEDBACK_FORM, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();

  localStorage.removeItem(FEEDBACK_FORM);
}

function populateTextarea() {
  const savedFeedbackStorage = localStorage.getItem(FEEDBACK_FORM);
  const savedFeedback = JSON.parse(savedFeedbackStorage);
  //   console.log(savedFeedback);

  if (savedFeedbackStorage) {
    if (savedFeedback.message) {
      refs.textarea.value = savedFeedback.message;
      // refs.email.value = savedFeedback.email;
    }
    if (savedFeedback.email) {
      //   refs.textarea.value = savedFeedback.message;
      refs.email.value = savedFeedback.email;
    }
  }
}
