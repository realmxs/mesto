import "./index.css";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Api from "../components/Api.js";
import DeletePopup from "../components/DeletePopup.js";
import {
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
} from "../utils/constants.js";

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

const userInfo = new UserInfo(profileElements);
const api = new Api(loginInfo);

api
  .getUserInfo()
  .then((user) => {
    userInfo.setUserInfo(user);
  })
  .catch((error) => {
    console.log(error);
  });

api
  .getDefaultCards()
  .then((items) => {
    cardsContainer.cardsRenderer(items.reverse());
  })
  .catch((error) => {
    console.log(error);
  });

function profileEditPopupSubmit(values) {
  profileEditPopup.loadingStatus(true);
  api
    .updateUserInfo({
      name: values[profileSelectors.titleInput],
      description: values[profileSelectors.subtitleInput],
    })
    .then((data) => userInfo.setUserInfo(data))
    .then(() => profileEditPopup.closePopup())
    .catch((error) => {
      console.log(error);
    })
    .finally(() => profileEditPopup.loadingStatus(false));
}

const profileEditPopup = new PopupWithForm(
  profileSelectors.popup,
  profileEditPopupSubmit
);

function deleteCardPopupSubmit({ card, cardId }) {
  deleteCardPopup.loadingStatus(true);
  api
    .deleteCard(cardId)
    .then(() => {
      card.remove();
      card = null;
    })
    .then(() => deleteCardPopup.closePopup())
    .catch((error) => {
      console.log(error);
    })
    .finally(() => deleteCardPopup.loadingStatus(false));
}

const deleteCardPopup = new DeletePopup(
  deleteCardPopupSelectors.popup,
  deleteCardPopupSubmit
);

function avatarPopupSubmit(value) {
  avatarPopup.loadingStatus(true);
  api
    .setUserAvatar({
      avatar: value[avatarPopupSelectors.input],
    })
    .then((data) => userInfo.setUserInfo(data))
    .then(() => avatarPopup.closePopup())
    .catch((error) => {
      console.log(error);
    })
    .finally(() => avatarPopup.loadingStatus(false));
}

const avatarPopup = new PopupWithForm(
  avatarPopupSelectors.popup,
  avatarPopupSubmit
);

function handleDeleteClick(card) {
  deleteCardPopup.openPopup(card);
}

function handleSetLike(cardId) {
  api.setLike(cardId).catch((error) => {
    console.log(error);
  });
}

function handleRemoveLike(cardId) {
  api.removeLike(cardId).catch((error) => {
    console.log(error);
  });
}

function handleCardClick(card) {
  picPopup.openPicPopup(card);
}

function submitCardForm(values) {
  newCardPopup.loadingStatus(true);
  api
    .addNewCard({
      title: values[newCardPopupSelectors.title],
      link: values[newCardPopupSelectors.link],
    })
    .then((item) => {
      const card = new Card(
        item,
        userInfo.getUserInfo().id,
        newCardPopupSelectors.template,
        handleCardClick,
        handleDeleteClick,
        handleSetLike,
        handleRemoveLike
      );
      cardsContainer.addCard(card.getCardElement());
    })
    .then(() => newCardPopup.closePopup())
    .catch((error) => {
      console.log(error);
    })
    .finally(() => newCardPopup.loadingStatus(false));
}

const newCardPopup = new PopupWithForm(
  newCardPopupSelectors.popup,
  submitCardForm
);

const picPopup = new PopupWithImage(picPopupSelectors);

const cardsContainer = new Section(
  {
    renderer: (item) => {
      const card = new Card(
        item,
        userInfo.getUserInfo().id,
        newCardPopupSelectors.template,
        handleCardClick,
        handleDeleteClick,
        handleSetLike,
        handleRemoveLike
      );
      cardsContainer.addCard(card.getCardElement());
    },
  },
  containerSelector.container
);

function openProfilePopup() {
  const profileInfo = userInfo.getUserInfo();
  inputProfileTitle.value = profileInfo.name;
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
