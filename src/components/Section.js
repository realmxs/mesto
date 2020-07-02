export default class Section {
  constructor({ renderer }, containerSelector) {
    this._cardsRender = renderer;
    this._cardsContainer = document.querySelector(containerSelector);
  }

  cardsRenderer(items) {
    items.forEach((item) => {
      this._cardsRender(item);
    });
  }

  addCard(card) {
    this._cardsContainer.prepend(card);
  }
}
