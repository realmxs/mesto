import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selectors) {
    super(selectors.popup);
    this._popup = document.querySelector(selectors.popup);
    this._title = this._popup.querySelector(selectors.imageTitle);
    this._image = this._popup.querySelector(selectors.image);
    this._setEventListeners();
  }

  openPicPopup({ name, link }) {
    this._title.textContent = name;
    this._image.alt = name;
    this._image.src = link;
    super.openPopup();
  }
}
