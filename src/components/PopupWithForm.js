import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector);
    const popup = document.querySelector(popupSelector);
    this._form = popup.querySelector(".popup__container");
    this._formSubmit = formSubmit;
    this._inputList = this._form.querySelectorAll(".popup__input");
  }

  _getInputValues() {
    const inputArray = Array.from(this._inputList);
    const values = {};
    for (var input of inputArray) {
      values[input.id] = input.value;
    }
    return values;
  }

  _popupSubmit(evt) {
    evt.preventDefault();
    this._formSubmit(this._getInputValues());
    this.closePopup();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", this._popupSubmit.bind(this));
  }

  closePopup() {
    super.closePopup();
    this._inputList.forEach((input) => (input.value = ""));
  }
}
