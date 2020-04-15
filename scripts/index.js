const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.edit-button');
const profileTitle = profile.querySelector('.profile__title');
const profileSubtitle = profile.querySelector('.profile__subtitle');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.close-button');
const popupTextTitle = popup.querySelector('.input__title');
const popupTextSubtitle = popup.querySelector('.input__subtitle');
const submit = popup.querySelector('.submit-button');

/* open popup */

function openPopup () { 
    popupTextTitle.value = profileTitle.textContent; 
    popupTextSubtitle.value = profileSubtitle.textContent; 
    popup.classList.add('popup_opened');
 };

/* close popup */

function closePopup () {
    popup.classList.remove('popup_opened');
};

/* submit */

function formSubmit (submit) {
    submit.preventDefault();
    profileTitle.textContent = popupTextTitle.value;
    profileSubtitle.textContent = popupTextSubtitle.value;
    popup.classList.remove('popup_opened');
}

/* listeners */

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
submit.addEventListener('click', formSubmit);