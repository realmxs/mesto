export default class FormValidator {
  constructor(popup, settings) {
    this._popup = popup;
    this._input = settings.inputSelector;
    this._submitButton = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._showErrorClass = settings.showErrorClass;
  }

  _showInputError(input, errorMessage) {
    const inputError = this._popup.querySelector(`#${input.id}-error`);
    input.classList.add(this._inputErrorClass);
    inputError.textContent = errorMessage;
    inputError.classList.add(this._showErrorClass);
  };

  _hideInputError(input) {
    const inputError = this._popup.querySelector(`#${input.id}-error`);
    inputError.classList.remove(this._showErrorClass);
    inputError.textContent = '';
    input.classList.remove(this._inputErrorClass);
  };

  _checkInput(evt) {
    if (!evt.target.validity.valid) {
      this._showInputError(evt.target, evt.target.validationMessage);
    } else {
      console.log(evt.target);
      this._hideInputError(evt.target);
    }
  };

  _checkPopup() {
    const inputList = Array.from(this._popup.querySelectorAll(this._input));
    return inputList.some((input) => {
      return !input.validity.valid;
    })
  };

  _toggleButtonStatus() {
    const submitButton = this._popup.querySelector(this._submitButton);
    if (this._checkPopup()) {
      submitButton.classList.add(this._inactiveButtonClass);
      submitButton.setAttribute('disabled', true);
    } else {
      submitButton.classList.remove(this._inactiveButtonClass);
      submitButton.removeAttribute('disabled', true);
    }
  };

  clearFormErrors() {
    const inputList = this._popup.querySelectorAll(this._input);
    inputList.forEach((input) => {
      this._hideInputError(input);
    });
    this._toggleButtonStatus();
  };

  enableValidation() {
    const inputList = this._popup.querySelectorAll(this._input);
    console.log(inputList)
    inputList.forEach((input) => {
      input.addEventListener('input', (evt) => {
        this._checkInput(evt);
        this._toggleButtonStatus();
      });
    });
  };
};

