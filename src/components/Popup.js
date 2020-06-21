export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);

    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleFormClose = this. _handleFormClose.bind(this);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.closePopup();
    }
  }

  _handleFormClose(evt) {
    if (evt.target.classList.contains("popup") || evt.target.classList.contains("popup__close-button")) {
      this.closePopup();
    }
  }

  _setEventListeners() {
    this._popup.addEventListener("click", this._handleFormClose);
  }

  openPopup() {
    document.addEventListener("keyup", this._handleEscClose);
    this._popup.classList.add("popup_opened");
  }

  closePopup() {
    document.removeEventListener("keyup", this._handleEscClose);
    this._popup.classList.remove("popup_opened");
  }
}
