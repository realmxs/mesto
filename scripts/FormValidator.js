export default class FormValidator {
  constructor(popup, settings) {
    this._popup = popup;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._showErrorClass = settings.showErrorClass;

    this._inputList = this._popup.querySelectorAll(settings.inputSelector);
    this._submitButton = this._popup.querySelector(settings.submitButtonSelector);
  }

  _showInputError(input, errorMessage) {
    const inputError = this._popup.querySelector(`#${input.id}-error`);
    input.classList.add(this._inputErrorClass);
    inputError.textContent = errorMessage;
    inputError.classList.add(this._showErrorClass);
  }

  _hideInputError(input) {
    const inputError = this._popup.querySelector(`#${input.id}-error`);
    input.classList.remove(this._inputErrorClass);
    inputError.classList.remove(this._showErrorClass);
    inputError.textContent = '';
  }

  _toggleButtonStatus() {
    if (this._checkPopup()) {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.setAttribute('disabled', true);
    } else {
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.removeAttribute('disabled', true);
    }
  }

  _validateInput(evt) {
    if (!evt.target.validity.valid) {
      this._showInputError(evt.target, evt.target.validationMessage);
    } else {
      this._hideInputError(evt.target);
    }
    this._toggleButtonStatus();
  }

  _checkPopup() {
    const inputArray = Array.from(this._inputList);
    return inputArray.some((input) => {
      return !input.validity.valid;
    });
  }

  clearFormErrors() {
    this._inputList.forEach((input) => {
      this._hideInputError(input);
    });
    this._toggleButtonStatus();
  }

  enableValidation() {
    this._inputList.forEach((input) => {
      input.addEventListener('input', this._validateInput.bind(this));
    });
  }
}
