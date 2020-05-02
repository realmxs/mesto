const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.edit-button');
const profileTitle = profile.querySelector('.profile__title');
const profileSubtitle = profile.querySelector('.profile__subtitle');
const editPopup = document.querySelector('#edit-popup');
const popupTextTitle = editPopup.querySelector('.input__title');
const popupTextSubtitle = editPopup.querySelector('.input__subtitle');
const saveInfo = editPopup.querySelector('.save-button');
const addButton = profile.querySelector('.add-button');
const postPopup = document.querySelector('#post-popup');
const postButton = postPopup.querySelector('.post-button');
const card = document.querySelector('#photo-card').content;
const elements = document.querySelector('.elements');
const picPopup = document.querySelector('#pic-popup');
const closePicPopupButton = document.querySelector('#close-picpopup');
const closeEditPopupButton = document.querySelector('#close-editpopup');
const closePostPopupButton = document.querySelector('#close-postpopup');
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



/*CARDS RENDER*/
function cardsRender(name, link) {
    const element = card.cloneNode(true);
    element.querySelector('.element__title').textContent = name;
    element.querySelector('.element__image').src = link;

    /* like button */
    element.querySelector('.like-button').addEventListener('click', function (evt) {
        evt.target.classList.toggle('like-button');
        evt.target.classList.toggle('like-button_clicked');
    });
    /* delete button */
    element.querySelector('.delete-button').addEventListener('click', function (evt) {
        evt.target.parentElement.remove();
    });
    /* show pic */
    element.querySelector('.element__image').addEventListener('click', openPicPopup);

    return element;
}



/*DEFAULT CARDS RENDER*/
function renderDefaultCards() {
    defaultCards.forEach(function (item) {
        elements.append(cardsRender(item.name, item.link));
        return elements;
    });
};

renderDefaultCards();



/* PIC POPUP */
function openPicPopup(evt) {
    picPopup.classList.add('popup_opened');
    picPopup.querySelector('.popup__image-title').textContent = evt.target.parentElement.textContent;
    picPopup.querySelector('.popup__image').src = evt.target.src;
    closePicPopupButton.addEventListener('click', closePicPopup);    
}

function closePicPopup() {
    picPopup.classList.remove('popup_opened');
}



/* EDIT POPUP */
function openEditPopup () {
    popupTextTitle.value = profileTitle.textContent;
    popupTextSubtitle.value = profileSubtitle.textContent;
    editPopup.classList.add('popup_opened');
 };
 editButton.addEventListener('click', openEditPopup);

function closeEditPopup () {
    editPopup.classList.remove('popup_opened');
};
closeEditPopupButton.addEventListener('click', closeEditPopup);

function editFormSubmit (submit) {
    submit.preventDefault();
    profileTitle.textContent = popupTextTitle.value;
    profileSubtitle.textContent = popupTextSubtitle.value;
    closeEditPopup ();
}
saveInfo.addEventListener('click', editFormSubmit);



/* POST POPUP */
function openPostPopup () {
    postPopup.classList.add('popup_opened');
};
addButton.addEventListener('click', openPostPopup);

function closePostPopup () {
    postPopup.querySelector('.input__pic-title').value = '';
    postPopup.querySelector('.input__pic-link').value = '';
    postPopup.classList.remove('popup_opened');
};
closePostPopupButton.addEventListener('click', closePostPopup);

function newPost() {
    let name = postPopup.querySelector('.input__pic-title').value;
    let link = postPopup.querySelector('.input__pic-link').value;
    const element = card.cloneNode(true);
    elements.prepend(cardsRender(name, link));
    closePostPopup ();
}
postButton.addEventListener('click', newPost);