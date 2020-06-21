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
  profileSelectors
} from "../utils/constants.js"

const profileEditPopupValidator = new FormValidator(
  profileEditPopupElement,
  validationSettings
);

const newCardPopupValidator = new FormValidator(
  newCardPopupElement,
  validationSettings
);

const userInfo = new UserInfo(profileSelectors.title, profileSelectors.description);

const profileEditPopup = new PopupWithForm(
  profileSelectors.popup,
  profileEditPopupSubmit
);
const picPopup = new PopupWithImage(picPopupSelectors);
const newCardPopup = new PopupWithForm(
  newCardPopupSelectors.popup,
  submitCardForm
);

function handleCardClick(evt) {
  picPopup.openPicPopup(evt);
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
      cardsContainer.addItem(card.getCardElement());
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
  cardsContainer.addItem(card.getCardElement());
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

profileEditPopup.setEventListeners();
picPopup.setEventListeners();
newCardPopup.setEventListeners();

profileEditButton.addEventListener("click", openProfilePopup);
openNewCardPopupButton.addEventListener("click", openCardPopup);

profileEditPopupValidator.enableValidation();
newCardPopupValidator.enableValidation();

cardsContainer.cardsRenderer();
