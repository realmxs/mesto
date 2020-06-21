import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selectors) {
    super(selectors.popup);
    const picPopup = document.querySelector(selectors.popup);
    this._title = picPopup.querySelector(selectors.imageTitle);
    this._image = picPopup.querySelector(selectors.image);
    this._setEventListeners();
  }

  openPicPopup(evt) {
    this._title.textContent = evt.target.alt;
    this._image.alt = evt.target.alt;
    this._image.src = evt.target.src;
    super.openPopup();
  }
}
