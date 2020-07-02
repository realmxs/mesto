export default class Card {
  constructor(
    data,
    myId,
    cardTemplateSelector,
    clickOnImage,
    clickOnDeleteButton,
    setLike,
    removeLike
  ) {
    this._cardTemplateSelector = cardTemplateSelector;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._cardId = data._id;
    this._cardOwnerId = data.owner._id;
    this._clickOnImage = clickOnImage;
    this._setLike = setLike;
    this._removeLike = removeLike;
    this._clickOnDeleteButton = clickOnDeleteButton;
    this._myId = myId;
  }

  _getCard() {
    return document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", this._like.bind(this));
    this._deleteButton.addEventListener("click", () => {
      this._clickOnDeleteButton({
        card: this._card,
        cardId: this._cardId,
      });
    });
    this._image.addEventListener("click", () => {
      this._clickOnImage({
        name: this._name,
        link: this._link,
      });
    });
  }

  _setDeleteButton() {
    if (this._myId == this._cardOwnerId) {
      this._deleteButton.classList.add("card__delete-button_visiable");
    }
  }

  _toggleLikeStatus() {
    this._likeButton.classList.toggle("card__like-button_clicked");
  }

  _like() {
    this._toggleLikeStatus();
    if (this._likeButton.classList.contains("card__like-button_clicked")) {
      this._setLike(this._cardId);
      this._likeCounter.textContent = this._likes.length += 1;
    } else {
      this._removeLike(this._cardId);
      this._likeCounter.textContent = this._likes.length -= 1;
    }
  }

  _checkLike() {
    if (this._likes.find((like) => like._id == this._myId)) {
      this._toggleLikeStatus();
    }
  }

  getCardElement() {
    this._card = this._getCard();
    this._likeButton = this._card.querySelector(".card__like-button");
    this._deleteButton = this._card.querySelector(".card__delete-button");
    this._title = this._card.querySelector(".card__title");
    this._image = this._card.querySelector(".card__image");
    this._likeCounter = this._card.querySelector(".card__like-counter");

    this._title.textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;
    this._likeCounter.textContent = this._likes.length;

    this._setDeleteButton();
    this._setEventListeners();
    this._checkLike();
    return this._card;
  }
}
