const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.edit-button');
const profileTitle = profile.querySelector('.profile__title');
const profileSubtitle = profile.querySelector('.profile__subtitle');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.close-button');
const popupTextTitle = popup.querySelector('.input__text_title');
const popupTextSubtitle = popup.querySelector('.input__text_subtitle');
const submit = popup.querySelector('.submit-button');

let title = profileTitle.textContent;
let subtitle = profileSubtitle.textContent;


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