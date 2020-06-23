export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._defaultCards = items;
    this._cardsRender = renderer;
    this._cardsContainer = document.querySelector(containerSelector);
  }

  cardsRenderer() {
    this._defaultCards.forEach((item) => {
      this._cardsRender(item);
    });
  }

  addItem(card, isNewCard) {
    if (isNewCard) {
      this._cardsContainer.prepend(card)
    } else {
      this._cardsContainer.append(card)
    }
  }
}
