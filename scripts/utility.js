function togglePopup(popup) {
  popup.classList.toggle('popup_opened');
};

function closePopup(evt) {
  const currentPopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape' || evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
    togglePopup(currentPopup);
    document.removeEventListener('keyup', closePopup);
  };
};

export { togglePopup, closePopup }
