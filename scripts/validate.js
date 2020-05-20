function showInputError(popup, input, errorMessage, settings) {
  const inputError = popup.querySelector(`#${input.id}-error`);
  input.classList.add(settings.inputErrorClass);
  inputError.textContent = errorMessage;
  inputError.classList.add(settings.errorClass);
};

function hideInputError(popup, input, settings) {
  const inputError = popup.querySelector(`#${input.id}-error`);
  inputError.classList.remove(settings.errorClass);
  inputError.textContent = '';
  input.classList.remove(settings.inputErrorClass);
};

function checkInput(popup, input, settings) {
  if (!input.validity.valid) {
    showInputError(popup, input, input.validationMessage, settings);
  } else {
    hideInputError(popup, input, settings);
  }
};

function checkPopup(popup, settings) {
  const inputList = Array.from(popup.querySelectorAll(settings.inputSelector));
  return inputList.some((input) => {
     return !input.validity.valid;
  })
};

const toggleButtonStatus = (popup, settings) => {
  const submitButton = popup.querySelector(settings.submitButtonSelector);
  if (checkPopup(popup, settings)) {
    submitButton.classList.add(settings.inactiveButtonClass);
    submitButton.setAttribute('disabled', true);
  } else {
    submitButton.classList.remove(settings.inactiveButtonClass);
    submitButton.removeAttribute('disabled', true);
  }
};

function setEventListeners(popup, settings) {
  const inputList = popup.querySelectorAll(settings.inputSelector);
  inputList.forEach((input) => {
    input.addEventListener('input', () => {
      checkInput(popup, input, settings);
      toggleButtonStatus(popup, settings);
    });
  });
};

const enableValidation = (settings) => {
  const popupList = document.querySelectorAll(settings.formSelector);
  popupList.forEach((popup) => {
      setEventListeners(popup, settings);
  });
};

function clearFormErrors(popup, settings) {
  const inputList = popup.querySelectorAll(settings.inputSelector);
  inputList.forEach((input) => {
    hideInputError(popup, input, settings);
  });
  toggleButtonStatus(popup, settings);
};
