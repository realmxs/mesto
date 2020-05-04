const profile = document.querySelector('.profile');
const profileEditButton = profile.querySelector('.profile__edit-button');
const profileTitle = profile.querySelector('.profile__title');
const profileSubtitle = profile.querySelector('.profile__subtitle');
const profileEditPopup = document.querySelector('#profile-edit-popup');
const inputProfileTitle = profileEditPopup.querySelector('#input-profile-title');
const inputProfileSubtitle= profileEditPopup.querySelector('#input-profile-subtitle');
const closeEditProfilePopup = document.querySelector('#close-editprofilepopup');

const openNewCardPopupButton = profile.querySelector('.open-newcard-popup-button');
const newCardPopup = document.querySelector('#newcard-popup');
const inputCardTitle =  newCardPopup.querySelector('#input-card-title');
const inputCardLink = newCardPopup.querySelector('#input-card-link');
const closeNewCardPopupButton = newCardPopup.querySelector('#close-newcard-popup');

const cardsContainer = document.querySelector('.cards-container');
const template = document.querySelector('#photo-card').content;

const picPopup = document.querySelector('#pic-popup');
const closePicPopupButton = picPopup.querySelector('#close-picpopup');
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

const getCardLikeButton = (card) => card.querySelector('.card__like-button');
const getCardDeleteButton = (card) => card.querySelector('.card__delete-button');
const getCardImage = (card) => card.querySelector('.card__image');


function togglePopup (popup) {
  setTimeout(popup.classList.toggle('popup_opened'), 5000);  //setTimeout для фикса бага в Firefox, при котором открытие попапа происходит рывком.
};

function openProfileEditPopup() {
  inputProfileTitle.value = profileTitle.textContent;
  inputProfileSubtitle.value = profileSubtitle.textContent;
  togglePopup(profileEditPopup);
 };

 function openNewCardPopup() {
  inputCardTitle.value = '';
  inputCardLink.value = '';
  togglePopup(newCardPopup);
};

function openPicPopup(evt) {
  popupImageTitle.textContent = evt.target.alt;
  popupImage.src = evt.target.src;
  popupImage.alt = evt.target.alt;
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
  defaultCards.forEach((item) => cardsContainer.append(createCard(item.name, item.link)))
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


profileEditButton.addEventListener('click', openProfileEditPopup);
openNewCardPopupButton.addEventListener('click', openNewCardPopup);

closeEditProfilePopup.addEventListener('click', () => togglePopup(profileEditPopup));
closeNewCardPopupButton.addEventListener('click', () => togglePopup(newCardPopup));
closePicPopupButton.addEventListener('click', () => togglePopup(picPopup));

profileEditPopup.addEventListener('submit', profileEditPopupSubmit);
newCardPopup.addEventListener('submit', newCardRelease);

createDefaultCards();
