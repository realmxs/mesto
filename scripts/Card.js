import { openPicPopup } from './utils.js';

export default class Card {
  constructor(item, cardSelector) {
    this._cardSelector = cardSelector;
    this._name = item.name;
    this._link = item.link;
  }

  _getCard() {
    return document
      .querySelector('#photo-card')
      .content
      .querySelector(this._cardSelector)
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
    this._card = this._getCard();
    this._likeButton = this._card.querySelector('.card__like-button');
    this._deleteButton = this._card.querySelector('.card__delete-button');
    this._title = this._card.querySelector('.card__title');
    this._image = this._card.querySelector('.card__image');

    this._title.textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;

    this._setEventListeners();

    return this._card;
  }
}
