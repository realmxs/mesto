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
const template = document.querySelector('#photo-card').content;

const picPopup = document.querySelector('#pic-popup');
const popupImageTitle = picPopup.querySelector('.popup__image-title');
const popupImage = picPopup.querySelector('.popup__image');

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
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__error-text_show'
};

const getCardLikeButton = (card) => card.querySelector('.card__like-button');
const getCardDeleteButton = (card) => card.querySelector('.card__delete-button');
const getCardImage = (card) => card.querySelector('.card__image');


function togglePopup(popup) {
  popup.classList.toggle('popup_opened');
};

function clearFormInputs(currentPopup) {
  const inputList = currentPopup.querySelectorAll(validationSettings.inputSelector);
  inputList.forEach((input) => {
    hideInputError(currentPopup, input, validationSettings);
  });
}

function closePopup(evt) {
  const currentPopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape' || evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
    togglePopup(currentPopup);
    document.removeEventListener('keyup', closePopup);
  };
};

function openProfileEditPopup() {
  clearFormInputs(profileEditPopup);
  inputProfileTitle.value = profileTitle.textContent;
  inputProfileSubtitle.value = profileSubtitle.textContent;
  document.addEventListener('keyup', closePopup);
  togglePopup(profileEditPopup);
 };

 function openNewCardPopup() {
  clearFormInputs(newCardPopup);
  inputCardTitle.value = '';
  inputCardLink.value = '';
  document.addEventListener('keyup', closePopup);
  togglePopup(newCardPopup);
};

function openPicPopup(evt) {
  popupImageTitle.textContent = evt.target.alt;
  popupImage.src = evt.target.src;
  popupImage.alt = evt.target.alt;
  document.addEventListener('keyup', closePopup);
  togglePopup(picPopup);
 };

function likeCard(evt) {
  evt.target.classList.toggle('card__like-button_clicked');
};

function deleteCard(evt) {
  const card = evt.target.closest('.card');
  getCardLikeButton(card).removeEventListener('click', likeCard);
  getCardDeleteButton(card).removeEventListener('click', deleteCard);
  getCardImage(card).removeEventListener('click', openPicPopup);
  card.remove();
};

function profileEditPopupSubmit (evt) {
  evt.preventDefault();
  profileTitle.textContent = inputProfileTitle.value;
  profileSubtitle.textContent = inputProfileSubtitle.value;
  togglePopup (profileEditPopup);
};

function createCard(name, link) {
  const card = template.cloneNode(true);
  card.querySelector('.card__title').textContent = name;
  card.querySelector('.card__image').src = link;
  card.querySelector('.card__image').alt = name;
  getCardLikeButton(card).addEventListener('click', likeCard);
  getCardDeleteButton(card).addEventListener('click', deleteCard);
  getCardImage(card).addEventListener('click', openPicPopup);

  return card;
};

function createDefaultCards() {
  defaultCards.forEach((item) => cardsContainer.append(createCard(item.name, item.link)));
};

function newCardRelease(evt) {
  evt.preventDefault();
  const name = inputCardTitle.value;
  const link = inputCardLink.value;
  cardsContainer.prepend(createCard(name, link));
  inputCardTitle.value = '';
  inputCardLink.value = '';
  togglePopup(newCardPopup);
};


document.addEventListener('click', closePopup);

profileEditButton.addEventListener('click', openProfileEditPopup);
openNewCardPopupButton.addEventListener('click', openNewCardPopup);

profileEditPopup.addEventListener('submit', profileEditPopupSubmit);
newCardPopup.addEventListener('submit', newCardRelease);

enableValidation(validationSettings);
createDefaultCards();
