import Popup from "./Popup.js";

export default class DeletePopup extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__container");
    this._formSubmit = formSubmit;
    this._setEventListeners();
    this._submitButton = this._form.querySelector(".popup__submit-button");
  }

  _popupSubmit(evt) {
    evt.preventDefault();
    this._formSubmit({ card: this._card, cardId: this._cardId });
  }

  _setEventListeners() {
    super._setEventListeners();
    this._form.addEventListener("submit", this._popupSubmit.bind(this));
  }

  openPopup({ card, cardId }) {
    super.openPopup();
    this._card = card;
    this._cardId = cardId;
  }

  loadingStatus(isDeleting) {
    if (isDeleting) {
      this._submitButton.textContent = "Удаление...";
    } else {
      this._submitButton.textContent = "Да";
    }
  }
}
