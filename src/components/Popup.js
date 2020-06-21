export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector(".popup__close-button");
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.closePopup();
    }
  }

  _handleBackgroundClose(evt) {
    if (evt.target.classList.contains("popup")) {
      this.closePopup();
    }
  }

  setEventListeners() {
    document.addEventListener("keyup", this._handleEscClose.bind(this));
    this._popup.addEventListener(
      "click",
      this._handleBackgroundClose.bind(this)
    );
    this._closeButton.addEventListener("click", this.closePopup.bind(this));
  }

  openPopup() {
    this._popup.classList.add("popup_opened");
  }

  closePopup() {
    this._popup.classList.remove("popup_opened");
  }
}
