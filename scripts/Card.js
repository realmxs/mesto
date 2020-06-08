import { openPicPopup } from './utils.js';

export default class Card {
  constructor(item, selectors) {
    this._card = this._getCard(selectors);
    this._likeButton = this._card.querySelector(selectors.likeButton);
    this._deleteButton = this._card.querySelector(selectors.deleteButton);
    this._title = this._card.querySelector(selectors.title);
    this._image = this._card.querySelector(selectors.image);

    this._title.textContent = item.name;
    this._image.src = item.link;
    this._image.alt = item.name;

    this._setEventListeners();
  }

  _getCard(selectors) {
    return document
      .querySelector(selectors.templateId)
      .content
      .querySelector(selectors.card)
      .cloneNode(true);
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', this._like.bind(this));
    this._deleteButton.addEventListener('click', this._delete.bind(this));
    this._image.addEventListener('click', openPicPopup);
  }

  _like() {
    this._likeButton.classList.toggle('card__like-button_clicked');
  }

  _delete() {
    this._likeButton.removeEventListener('click', this._like);
    this._deleteButton.removeEventListener('click', this._delete);
    this._image.removeEventListener('click', openPicPopup);
    this._card.remove();
    this._card = null;
  }

  getCard() {
    return this._card;
  }
}
