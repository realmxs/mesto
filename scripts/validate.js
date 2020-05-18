function showInputError(activePopup, input, errorMessage) {
  const inputError = activePopup.querySelector(`#${input.id}-error`);
  input.classList.add(formClassList.inputErrorClass);
  inputError.textContent = errorMessage;
}

function hideInputError(activePopup, input) {
  const inputError = activePopup.querySelector(`#${input.id}-error`);
  inputError.textContent = '';
  input.classList.remove(formClassList.inputErrorClass);
}

function isValid(activePopup, input) {
  if (!input.validity.valid) {
    showInputError(activePopup, input, input.validationMessage);
  } else {
    hideInputError(activePopup, input);
  }
};

function hasInvalidInput(inputList) {
  return inputList.some((input) => {
     return !input.validity.valid;
  })
};

const toggleButtonState = (inputList, submitButton) => {
  if (hasInvalidInput(inputList)) {
    submitButton.classList.add(formClassList.inactiveButtonClass);
    submitButton.setAttribute('disabled', true);
  } else {
    submitButton.classList.remove(formClassList.inactiveButtonClass);
    submitButton.removeAttribute('disabled', true);
  }
};

function setEventListeners(activePopup) {
  const inputList = Array.from(activePopup.querySelectorAll(formClassList.inputSelector));
  const submitButton = activePopup.querySelector(formClassList.submitButtonSelector);
  toggleButtonState(inputList, submitButton);
  inputList.forEach((input) => {
    input.addEventListener('input', () => {
      isValid(activePopup, input);
      toggleButtonState(inputList, submitButton);
    });
  });
};

const enableValidation = (formClassList) => {
  const popupList = Array.from(document.querySelectorAll(formClassList.formSelector));
  popupList.forEach((activePopup) => {
      setEventListeners(activePopup);
  });
};

enableValidation(formClassList);
