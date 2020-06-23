import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__container");
    this._formSubmit = formSubmit;
    this._inputList = this._form.querySelectorAll(".popup__input");
    this._setEventListeners();
  }

  _getInputValues() {
    const inputArray = Array.from(this._inputList);
    const values = {};
    for (const input of inputArray) {
      values[input.id] = input.value;
    }
    return values;
  }

  _popupSubmit(evt) {
    evt.preventDefault();
    this._formSubmit(this._getInputValues());
    this.closePopup();
  }

  _setEventListeners() {
    super._setEventListeners();
    this._form.addEventListener("submit", this._popupSubmit.bind(this));
  }

  closePopup() {
    super.closePopup();
    this._inputList.forEach((input) => (input.value = ""));
  }
}
