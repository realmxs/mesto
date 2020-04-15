let profile = document.querySelector('.profile');
let editButton = profile.querySelector('.edit-button');
let profileTitle = profile.querySelector('.profile__title');
let profileSubtitle = profile.querySelector('.profile__subtitle');
let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.close-button');
let popupTextTitle = popup.querySelector('.input__text_title');
let popupTextSubtitle = popup.querySelector('.input__text_subtitle');
let submit = popup.querySelector('.submit-button');

const title = profileTitle.textContent;
const subtitle = profileSubtitle.textContent;


/* open popup */

function openPopup () {
    popup.classList.add('popup-show');
    popupTextTitle.setAttribute('value', title);
    popupTextSubtitle.setAttribute('value', subtitle);
};

editButton.addEventListener('click', openPopup);


/* close popup */

function closePopup () {
    popup.classList.remove('popup-show');
};

closeButton.addEventListener('click', closePopup);


/* submit */

function formSubmit (submit) {
    submit.preventDefault();
    let newTitle = popupTextTitle.value;
    let newSubtitle = popupTextSubtitle.value;
    profileTitle.textContent = newTitle;
    profileSubtitle.textContent = newSubtitle;
    popup.classList.remove('popup-show');
}

submit.addEventListener('click', formSubmit);