import { togglePopup, closePopup } from './utility.js'

const picPopup = document.querySelector('#pic-popup');
const popupImageTitle = picPopup.querySelector('.popup__image-title');
const popupImage = picPopup.querySelector('.popup__image');

export default class Card {
  constructor(item) {
    this._name = item.name;
    this._link = item.link;
  }

  _getTemplate() {
    const template = document
      .querySelector('#photo-card')
      .content
      .querySelector('.card')
      .cloneNode(true);

    return template;
  }

  _setEventListeners() {
    this._cardLikeButton = this._card.querySelector('.card__like-button');
    this._cardDeleteButton = this._card.querySelector('.card__delete-button');
    this._cardImage = this._card.querySelector('.card__image');

    this._cardLikeButton.addEventListener('click', this._likeCard);
    this._cardDeleteButton.addEventListener('click', this._deleteCard);
    this._cardImage.addEventListener('click', this._openPicPopup);
  }

  _openPicPopup(evt) {
    popupImageTitle.textContent = evt.target.textContent;
    popupImage.src = evt.target.src;
    popupImage.alt = evt.target.textContent;
    document.addEventListener('keyup', closePopup);
    togglePopup(picPopup);
  };

  _likeCard(evt) {
    evt.target.classList.toggle('card__like-button_clicked');
  };

  _deleteCard(evt) {
    const currentCard = evt.target.closest('.card');
    currentCard.querySelector('.card__like-button').removeEventListener('click', this._likeCard);
    currentCard.querySelector('.card__delete-button').removeEventListener('click', this._deleteCard);
    currentCard.querySelector('.card__image').removeEventListener('click', this._openPicPopup);
    currentCard.remove();
  };

  createCard() {
    this._card = this._getTemplate();
    this._card.querySelector('.card__title').textContent = this._name;
    this._card.querySelector('.card__image').src = this._link;
    this._card.querySelector('.card__image').alt = this._name;
    this._setEventListeners();

    return this._card;
  }
}
