function showInputError(activePopup, input, errorMessage, settings) {
  const inputError = activePopup.querySelector(`#${input.id}-error`);
  input.classList.add(settings.inputErrorClass);
  inputError.textContent = errorMessage;
}

function hideInputError(activePopup, input, settings) {
  const inputError = activePopup.querySelector(`#${input.id}-error`);
  inputError.textContent = '';
  input.classList.remove(settings.inputErrorClass);
}

function isValid(activePopup, input, settings) {
  if (!input.validity.valid) {
    showInputError(activePopup, input, input.validationMessage, settings);
  } else {
    hideInputError(activePopup, input, settings);
  }
};

function hasInvalidInput(inputList) {
  return inputList.some((input) => {
     return !input.validity.valid;
  })
};

const toggleButtonState = (inputList, submitButton, settings) => {
  if (hasInvalidInput(inputList)) {
    submitButton.classList.add(settings.inactiveButtonClass);
    submitButton.setAttribute('disabled', true);
  } else {
    submitButton.classList.remove(settings.inactiveButtonClass);
    submitButton.removeAttribute('disabled', true);
  }
};

function setEventListeners(activePopup, settings) {
  const inputList = Array.from(activePopup.querySelectorAll(settings.inputSelector));
  const submitButton = activePopup.querySelector(settings.submitButtonSelector);
  toggleButtonState(inputList, submitButton, settings);
  inputList.forEach((input) => {
    input.addEventListener('input', () => {
      isValid(activePopup, input, settings);
      toggleButtonState(inputList, submitButton, settings);
    });
  });
};

const enableValidation = (settings) => {
  const popupList = Array.from(document.querySelectorAll(settings.formSelector));
  popupList.forEach((activePopup) => {
      setEventListeners(activePopup, settings);
  });
};

enableValidation(classList);
