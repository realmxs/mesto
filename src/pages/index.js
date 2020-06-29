import "./index.css";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import {
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
  profileSelectors,
  openAvatarPopupButton,
  avatarPopupSelectors,
  avatarPopupElement
} from "../utils/constants.js"

const profileEditPopupValidator = new FormValidator(
  profileEditPopupElement,
  validationSettings
);
const newCardPopupValidator = new FormValidator(
  newCardPopupElement,
  validationSettings
);
const avatarPopupValidator = new FormValidator(
  avatarPopupElement,
  validationSettings
);

const userInfo = new UserInfo({
  titleSelector: profileSelectors.title,
  descriptionSelector: profileSelectors.description
});

const profileEditPopup = new PopupWithForm(
  profileSelectors.popup,
  profileEditPopupSubmit
);

const avatarPopup = new PopupWithForm(
  avatarPopupSelectors.popup,
  profileEditPopupSubmit // поменять
)
const picPopup = new PopupWithImage(picPopupSelectors);
const newCardPopup = new PopupWithForm(
  newCardPopupSelectors.popup,
  submitCardForm
);

function handleCardClick(card) {
  picPopup.openPicPopup(card);
}

const cardsContainer = new Section(
  {
    items: defaultCards,
    renderer: (item) => {
      const card = new Card(
        item,
        newCardPopupSelectors.template,
        handleCardClick
      );
      cardsContainer.addDefaultCard(card.getCardElement());
    },
  },
  containerSelector.container
);

function submitCardForm(values) {
  const data = {
    title: values[newCardPopupSelectors.title],
    link: values[newCardPopupSelectors.link],
  };
  const card = new Card(data, newCardPopupSelectors.template, handleCardClick);
  cardsContainer.addNewCard(card.getCardElement());
}

function profileEditPopupSubmit(values) {
  userInfo.setUserInfo({
    title: values[profileSelectors.titleInput],
    description: values[profileSelectors.subtitleInput],
  });
}

function openProfilePopup() {
  const profileInfo = userInfo.getUserInfo();
  inputProfileTitle.value = profileInfo.title;
  inputProfileSubtitle.value = profileInfo.description;

  profileEditPopupValidator.clearFormErrors();
  profileEditPopup.openPopup();
}

function openCardPopup() {
  newCardPopupValidator.clearFormErrors();
  newCardPopup.openPopup();
}

function openAvatarPopup() {
  avatarPopupValidator.clearFormErrors();
  avatarPopup.openPopup();
}

profileEditButton.addEventListener("click", openProfilePopup);
openNewCardPopupButton.addEventListener("click", openCardPopup);
openAvatarPopupButton.addEventListener("click", openAvatarPopup);

profileEditPopupValidator.enableValidation();
newCardPopupValidator.enableValidation();
avatarPopupValidator.enableValidation();

cardsContainer.cardsRenderer();
