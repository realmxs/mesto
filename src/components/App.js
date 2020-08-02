import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithImage from './PopupWithImage.js';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup'
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { api } from '../utils/api.js';

function App() {
  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setProfileEditPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);
  const [imageInfo, setImageInfo] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((user) => {
        setCurrentUser(user)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    api
      .getDefaultCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cards]);

  function handleAvatarClick() {
    setAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setProfileEditPopupOpen(true);
  }

  function handleAddPlacePopupClick() {
    setAddPlacePopupOpen(true);
  }

  function closePopup() {
    setAvatarPopupOpen(false);
    setProfileEditPopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  function handleCardClick() {
    setSelectedCard(true);
  }

  const openPicPopup = (card) => {
    handleCardClick();
    setImageInfo(card);
  };

  function handleUserUpdate(name, description) {
    api.updateUserInfo(name, description).then((data) => {
      setCurrentUser({
        ...currentUser,
        name: data.name,
        about: data.about
      });
      closePopup()
    });
  }

  function handleAvatarUpdate(link) {
    api.setUserAvatar(link).then((data) => {
      setCurrentUser({
        ...currentUser,
        avatar: data.avatar
      });
      closePopup()
    });
  }

  function handleAddNewPlace(name, link) {
    api.addNewPlace(name, link).then((newCard) => {
      setCards([...cards, newCard]);
      closePopup()
    });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeCardLikeStatus(card._id, !isLiked).then((newCard) => {
      const newCards = cards.map(c => c._id === card._id ? newCard : c);
      setCards(newCards);
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      const newCards = cards.filter(c => {
        return card._id !== c._id;
      });
      setCards(newCards);
    });
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          editAvatar={handleAvatarClick}
          editProfile={handleEditProfileClick}
          addPlace={handleAddPlacePopupClick}
          showPic={openPicPopup}
          cards={cards}
          handleCardLike={handleCardLike}
          handleCardDelete={handleCardDelete}
        />
        <Footer />

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closePopup} onAvatarUpdate={handleAvatarUpdate} />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closePopup} onUserUpdate={handleUserUpdate} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closePopup} onAddPlace={handleAddNewPlace} />

        <PopupWithImage
          isOpen={selectedCard}
          close={closePopup}
          cardInfo={imageInfo}
        />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
