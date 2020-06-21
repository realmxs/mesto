const profileEditButton = document.querySelector(".profile__edit-button");
const openNewCardPopupButton = document.querySelector(
  ".open-newcard-popup-button"
);

const profileEditPopupElement = document.querySelector("#profile-edit-popup");
const inputProfileTitle = profileEditPopupElement.querySelector(
  "#input-profile-title"
);
const inputProfileSubtitle = profileEditPopupElement.querySelector(
  "#input-profile-subtitle"
);

const newCardPopupElement = document.querySelector("#newcard-popup");

const defaultCards = [
  {
    title: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    title: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    title: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    title: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    title: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
  {
    title: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
];

const validationSettings = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_inactive",
  inputErrorClass: "popup__input_error",
  showErrorClass: "popup__error-text_show",
};

const containerSelector = {
  container: ".cards-container"
};

const picPopupSelectors = {
  popup: "#pic-popup",
  imageTitle: ".popup__image-title",
  image: ".popup__image"
};

const newCardPopupSelectors = {
  popup: "#newcard-popup",
  template: "#photo-card",
  title: "input-card-title",
  link: "input-card-link"
};

const profileSelectors = {
  title: ".profile__title",
  description: ".profile__subtitle",
  popup: "#profile-edit-popup",
  titleInput: "input-profile-title",
  subtitleInput: "input-profile-subtitle"
};

export {
  profileEditButton,
  openNewCardPopupButton,
  profileEditPopupElement,
  inputProfileTitle,
  inputProfileSubtitle,
  newCardPopupElement,
  defaultCards,
  validationSettings,
  containerSelector,
  picPopupSelectors,
  newCardPopupSelectors,
  profileSelectors
}
