const profile = document.querySelector('.profile');
const profileEditButton = profile.querySelector('.profile-edit-button');
const profileTitle = profile.querySelector('.profile__title');
const profileSubtitle = profile.querySelector('.profile__subtitle');
const profileEditPopup = document.querySelector('#profile-edit-popup');
const inputProfileTitle = profileEditPopup.querySelector('.input__profile-title');
const inputProfileSubtitle= profileEditPopup.querySelector('.input__profile-subtitle');
const saveProfile = profileEditPopup.querySelector('#save-edit-profile-popup');
const closeEditProfile = document.querySelector('#close-editprofile');

const postPopupButton = profile.querySelector('.post-popup-button');
const postPopup = document.querySelector('#post-popup');
const inputPicTitle =  postPopup.querySelector('.input__pic-title');
const inputPicLink = postPopup.querySelector('.input__pic-link');
const postPicButton = postPopup.querySelector('.post-pic-button');
const closePostPopupButton = postPopup.querySelector('#close-postpopup');

const elements = document.querySelector('.elements');
const card = document.querySelector('#photo-card').content;

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



function likeCard(evt) {
    evt.target.classList.toggle('like-button');
    evt.target.classList.toggle('like-button_clicked');
};


function deleteCard(evt) {
    evt.target.parentElement.querySelector('.like-button').removeEventListener('click', likeCard);
    evt.target.parentElement.querySelector('.delete-button').removeEventListener('click', deleteCard);
    evt.target.parentElement.querySelector('.element__image').removeEventListener('click', openPicPopup);
    evt.target.parentElement.remove();
};


function cardRender(name, link) {
    const element = card.cloneNode(true);
    element.querySelector('.element__title').textContent = name;
    element.querySelector('.element__image').src = link;
    /* like button */
    element.querySelector('.like-button').addEventListener('click', likeCard);
    /* delete button */
    element.querySelector('.delete-button').addEventListener('click', deleteCard);
    /* show pic */
    element.querySelector('.element__image').addEventListener('click', () => openPicPopup(name, link));

    return element;
}


function renderDefaultCards() {
    defaultCards.forEach((item) => elements.append(cardRender(item.name, item.link)))
};

function togglePopup (popup) {
    popup.classList.toggle('popup_opened');
};


function openProfileEditPopup() {
    inputProfileTitle.value = profileTitle.textContent;
    inputProfileSubtitle.value = profileSubtitle.textContent;
    togglePopup(profileEditPopup);
 };


function openPicPopup(name, link) {
    popupImageTitle.textContent = name;
    popupImage.src = link;
    popupImage.alt = name;
    togglePopup(picPopup);
}


function closePostPopup() {
    inputPicTitle.value = '';
    inputPicLink.value = '';
    togglePopup(postPopup);
}


function profileEditPopupSubmit (evt) {
    evt.preventDefault();
    profileTitle.textContent = inputProfileTitle.value;
    profileSubtitle.textContent = inputProfileSubtitle.value;
    togglePopup (profileEditPopup);
}


function newPost(evt) {
    evt.preventDefault();
    const name = inputPicTitle.value;
    const link = inputPicLink.value;
    elements.prepend(cardRender(name, link));
    closePostPopup();
}


postPopup.addEventListener('submit', newPost);
profileEditPopup.addEventListener('submit', profileEditPopupSubmit);

profileEditButton.addEventListener('click', () => openProfileEditPopup());
postPopupButton.addEventListener('click', () => togglePopup(postPopup));

closeEditProfile.addEventListener('click', () => togglePopup(profileEditPopup));
closePostPopupButton.addEventListener('click', closePostPopup);
closePicPopupButton.addEventListener('click', () => togglePopup(picPopup));

renderDefaultCards();