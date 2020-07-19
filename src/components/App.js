import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js'


function App() {
  const [isAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setProfileEditPopupOpen] = React.useState(false);
  const [isAddCardPopupOpen, setAddCardPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);
  const [imageInfo, setImageInfo] = React.useState({});

  function handleAvatarClick() {
    setAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setProfileEditPopupOpen(true);
  }

  function handleAddCardClick() {
    setAddCardPopupOpen(true);
  }

  function closePopup() {
    setAvatarPopupOpen(false);
    setProfileEditPopupOpen(false);
    setAddCardPopupOpen(false);
    setSelectedCard(false);
  }

  function handleCardClick() {
    setSelectedCard(true);
  }

  const openPicPopup = (card) => {
    handleCardClick();
    setImageInfo(card);
  }

  return (
    <>
      <Header />
      <Main editAvatar={handleAvatarClick} editProfile={handleEditProfileClick} addPlace={handleAddCardClick} showPic={openPicPopup} />
      <Footer />
      <PopupWithForm isOpen={isAvatarPopupOpen} id="avatar-popup" size="medium" title="Обновить аватар" close={closePopup} submitButtonText="Обновить">
        <div className="popup__input-wrapper">
          <input type="url" placeholder="Ссылка на изображение" className="popup__input" id="input-avatar-link" required />
          <span className="popup__error-text" id="input-avatar-link-error"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm isOpen={isEditProfilePopupOpen} id="profile-edit-popup" size="large" title="Изменить данные" close={closePopup} submitButtonText="Сохранить">
        <fieldset className="popup__fieldset">
          <div className="popup__input-wrapper">
            <input type="text" placeholder="Имя" type="text" className="popup__input" id="input-profile-title" minLength="2" maxLength="40" pattern="[A-Za-zА-Яа-яЁё\s\-]{1,}" required />
            <span className="popup__error-text" id="input-profile-title-error"></span>
          </div>
          <div className="popup__input-wrapper">
            <input type="text" placeholder="О себе" type="text" className="popup__input" id="input-profile-subtitle" minLength="2" maxLength="200" required />
            <span className="popup__error-text" id="input-profile-subtitle-error"></span>
          </div>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm isOpen={isAddCardPopupOpen} id="newcard-popup" size="large" title="Добавить место" close={closePopup} submitButtonText="Добавить">
        <fieldset className="popup__fieldset">
          <div className="popup__input-wrapper">
            <input type="text" placeholder="Название" type="text" className="popup__input" id="input-card-title" minLength="1" maxLength="30" required />
            <span className="popup__error-text" id="input-card-title-error"></span>
          </div>
          <div className="popup__input-wrapper">
            <input type="url" placeholder="Ссылка на картинку" className="popup__input" id="input-card-link" required />
            <span className="popup__error-text" id="input-card-link-error"></span>
          </div>
        </fieldset>
      </PopupWithForm>
      <PopupWithImage isOpen={selectedCard} close={closePopup} cardInfo={imageInfo} />
    </>
  );
}

export default App;
