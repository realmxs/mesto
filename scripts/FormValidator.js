export default class FormValidator {
  constructor(popup, settings) {
    this._input = settings.inputSelector;
    this._submitButton = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._popup = popup;
  }

  _showInputError(popup, input, errorMessage, settings) {
    const inputError = popup.querySelector(`#${input.id}-error`);
    input.classList.add(settings.inputErrorClass);
    inputError.textContent = errorMessage;
    inputError.classList.add(settings.errorClass);
  };

  _hideInputError(popup, input, settings) {
    const inputError = popup.querySelector(`#${input.id}-error`);
    inputError.classList.remove(settings.errorClass);
    inputError.textContent = '';
    input.classList.remove(settings.inputErrorClass);
  };

  _checkInput(popup, input, settings) {
    if (!input.validity.valid) {
      this._showInputError(popup, input, input.validationMessage, settings);
    } else {
      this._hideInputError(popup, input, settings);
    }
  };

  _checkPopup(popup, settings) {
    const inputList = Array.from(popup.querySelectorAll(settings.inputSelector));
    return inputList.some((input) => {
      return !input.validity.valid;
    })
  };

  _toggleButtonStatus(popup, settings) {
    const submitButton = popup.querySelector(settings.submitButtonSelector);
    if (this._checkPopup(popup, settings)) {
      submitButton.classList.add(settings.inactiveButtonClass);
      submitButton.setAttribute('disabled', true);
    } else {
      submitButton.classList.remove(settings.inactiveButtonClass);
      submitButton.removeAttribute('disabled', true);
    }
  };

  clearFormErrors(popup, settings) {
    const inputList = popup.querySelectorAll(settings.inputSelector);
    inputList.forEach((input) => {
      this._hideInputError(popup, input, settings);
    });
    this._toggleButtonStatus(popup, settings);
  };

  enableValidation(popup, settings) {
    const inputList = popup.querySelectorAll(settings.inputSelector);
    inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInput(popup, input, settings);
        this._toggleButtonStatus(popup, settings);
      });
    });
  }
};


