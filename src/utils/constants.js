const profileEditButton = document.querySelector(".profile__edit-button");
const openNewCardPopupButton = document.querySelector(
  ".open-newcard-popup-button"
);
const openAvatarPopupButton = document.querySelector(".profile__avatar-button");

const profileEditPopupElement = document.querySelector("#profile-edit-popup");
const inputProfileTitle = profileEditPopupElement.querySelector(
  "#input-profile-title"
);
const inputProfileSubtitle = profileEditPopupElement.querySelector(
  "#input-profile-subtitle"
);

const avatarPopupElement = document.querySelector("#avatar-popup");
const newCardPopupElement = document.querySelector("#newcard-popup");

const validationSettings = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_inactive",
  inputErrorClass: "popup__input_error",
  showErrorClass: "popup__error-text_show",
};

const containerSelector = {
  container: ".cards-container",
};

const picPopupSelectors = {
  popup: "#pic-popup",
  imageTitle: ".popup__image-title",
  image: ".popup__image",
};

const newCardPopupSelectors = {
  popup: "#newcard-popup",
  template: "#photo-card",
  title: "input-card-title",
  link: "input-card-link",
};

const profileSelectors = {
  name: ".profile__title",
  description: ".profile__subtitle",
  popup: "#profile-edit-popup",
  titleInput: "input-profile-title",
  subtitleInput: "input-profile-subtitle",
  avatar: ".profile__avatar",
};

const profileElements = {
  name: document.querySelector(profileSelectors.name),
  description: document.querySelector(profileSelectors.description),
  avatar: document.querySelector(profileSelectors.avatar),
};

const loginInfo = {
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-12",
  headers: {
    authorization: "246d132c-15dc-4567-a2e3-3aa37ea260d6",
    "Content-Type": "application/json",
  },
};

const deleteCardPopupSelectors = {
  popup: "#delete-card-popup",
};

const avatarPopupSelectors = {
  popup: "#avatar-popup",
  input: "input-avatar-link",
};

export {
  profileEditButton,
  openNewCardPopupButton,
  profileEditPopupElement,
  inputProfileTitle,
  inputProfileSubtitle,
  newCardPopupElement,
  validationSettings,
  containerSelector,
  picPopupSelectors,
  newCardPopupSelectors,
  profileSelectors,
  openAvatarPopupButton,
  avatarPopupSelectors,
  avatarPopupElement,
  profileElements,
  loginInfo,
  deleteCardPopupSelectors,
};
