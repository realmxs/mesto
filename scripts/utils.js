const picPopup = document.querySelector('#pic-popup');
const popupImageTitle = picPopup.querySelector('.popup__image-title');
const popupImage = picPopup.querySelector('.popup__image');


function togglePopup(popup) {
  popup.classList.toggle('popup_opened');
}

function closePopup(evt) {
  const currentPopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape' || evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
    togglePopup(currentPopup);
    document.removeEventListener('keyup', closePopup);
  }
}

function openPicPopup(evt) {
  popupImageTitle.textContent = evt.target.alt;
  popupImage.alt = evt.target.alt;
  popupImage.src = evt.target.src;
  document.addEventListener('keyup', closePopup);
  togglePopup(picPopup);
}

export { togglePopup, closePopup, openPicPopup };
