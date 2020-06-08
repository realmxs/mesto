import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { togglePopup, closePopup } from './utils.js';

const profile = document.querySelector('.profile');
const profileEditButton = profile.querySelector('.profile__edit-button');
const profileTitle = profile.querySelector('.profile__title');
const profileSubtitle = profile.querySelector('.profile__subtitle');

const profileEditPopup = document.querySelector('#profile-edit-popup');
const inputProfileTitle = profileEditPopup.querySelector('#input-profile-title');
const inputProfileSubtitle= profileEditPopup.querySelector('#input-profile-subtitle');

const openNewCardPopupButton = profile.querySelector('.open-newcard-popup-button');
const newCardPopup = document.querySelector('#newcard-popup');
const inputCardTitle =  newCardPopup.querySelector('#input-card-title');
const inputCardLink = newCardPopup.querySelector('#input-card-link');

const cardsContainer = document.querySelector('.cards-container');

const defaultCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const validationSettings = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__input_error',
  showErrorClass: 'popup__error-text_show'
};

const cardtemplateSelector = {
  templateId: '#photo-card',
}

const profileEditPopupValidator = new FormValidator(profileEditPopup, validationSettings);
const newCardPopupValidator = new FormValidator(newCardPopup, validationSettings);


function openProfileEditPopup() {
  inputProfileTitle.value = profileTitle.textContent;
  inputProfileSubtitle.value = profileSubtitle.textContent;
  profileEditPopupValidator.clearFormErrors();
  document.addEventListener('keyup', closePopup);
  togglePopup(profileEditPopup);
 }

 function openNewCardPopup() {
  inputCardTitle.value = '';
  inputCardLink.value = '';
  newCardPopupValidator.clearFormErrors();
  document.addEventListener('keyup', closePopup);
  togglePopup(newCardPopup);
}

function profileEditPopupSubmit (evt) {
  evt.preventDefault();
  profileTitle.textContent = inputProfileTitle.value;
  profileSubtitle.textContent = inputProfileSubtitle.value;
  togglePopup(profileEditPopup);
}

function createDefaultCards() {
  defaultCards.forEach(item => {
    const card = new Card(item, cardtemplateSelector.templateId);
    cardsContainer.append(card.getCard())
  })
}

function newCardRelease(evt) {
  evt.preventDefault();
  const name = inputCardTitle.value;
  const link = inputCardLink.value;
  const newCard = new Card({name, link}, cardtemplateSelector.templateId);
  cardsContainer.prepend(newCard.getCard());
  inputCardTitle.value = '';
  inputCardLink.value = '';
  togglePopup(newCardPopup);
}


document.addEventListener('click', closePopup);

profileEditButton.addEventListener('click', openProfileEditPopup);
openNewCardPopupButton.addEventListener('click', openNewCardPopup);

profileEditPopup.addEventListener('submit', profileEditPopupSubmit);
newCardPopup.addEventListener('submit', newCardRelease);

profileEditPopupValidator.enableValidation();
newCardPopupValidator.enableValidation();

createDefaultCards();
