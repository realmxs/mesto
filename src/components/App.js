import React from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Header from './Header.js';
import ProtectedRoute from './HOC/ProtectedRoute.js';
import Main from './Main.js';
import Register from './Register.js';
import Login from './Login.js';
import InfoTooltip from './InfoTooltip.js';
import Footer from './Footer.js';
import PopupWithImage from './PopupWithImage.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js'
import * as auth from '../utils/auth';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { api } from '../utils/api.js';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setProfileEditPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isSigninFormOpen, setSigninFormOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);
  const [imageInfo, setImageInfo] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [userEmail, setUserEmail] = React.useState(null);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false);
  const [isActionSuccessful, setIsActionSuccessful] = React.useState(false);
  const history = useHistory();

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
  }, []);

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth.getContent(jwt)
        .then((res) => {
          setLoggedIn(true);
          setUserEmail(res.data.email);
          history.push('/');
        })
        .catch(err => console.log(err));
    }
  }, [loggedIn]);

  function setSigninFormState() {
    setSigninFormOpen(!isSigninFormOpen);
  }

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
    setInfoTooltipOpen(false);
  }

  function handleCardClick() {
    setSelectedCard(true);
  }

  const openPicPopup = (card) => {
    handleCardClick();
    setImageInfo(card);
  };

  function handleRegister(password, email) {
    auth.register(password, email)
      .then(() => {
        setInfoTooltipOpen(true)
        setIsActionSuccessful(true)
        history.push('/signin');
      })
      .catch(() => {
        setInfoTooltipOpen(true)
        setIsActionSuccessful(false)
      })
  }

  function handleLogin(password, email) {
    auth.authorize(escape(password), email)
      .then((data) => {
        auth.getContent(data)
          .then((res) => {
            setUserEmail(res.data.email)
            setLoggedIn(true);
          })
      })
      .catch((err) => console.log(err));
    history.push('/');
  }

  function handleLogout() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    history.push('/signin');
  }

  function handleUserUpdate(name, description) {
    api.updateUserInfo(name, description).then((data) => {
      setCurrentUser({
        ...currentUser,
        name: data.name,
        about: data.about
      });
      closePopup()
    }).catch((err) => {
      console.log(err);
    })
  }

  function handleAvatarUpdate(link) {
    api.setUserAvatar(link).then((data) => {
      setCurrentUser({
        ...currentUser,
        avatar: data.avatar
      });
      closePopup()
    }).catch((err) => {
      console.log(err);
    })
  }

  function handleAddNewPlace(name, link) {
    api.addNewPlace(name, link).then((newCard) => {
      setCards([newCard, ...cards]);
      closePopup()
    }).catch((err) => {
      console.log(err);
    })
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeCardLikeStatus(card._id, !isLiked).then((newCard) => {
      const newCards = cards.map(c => c._id === card._id ? newCard : c);
      setCards(newCards);
    }).catch((err) => {
      console.log(err);
    })
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      const newCards = cards.filter(c =>
        card._id !== c._id
      )
      setCards(newCards);
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Header
          loggedIn={loggedIn}
          userEmail={userEmail}
          isSigninFormOpen={isSigninFormOpen}
          logout={handleLogout}
        />
        <Switch>
          <ProtectedRoute
            exact path="/"
            loggedIn={loggedIn}
            component={Main}
            editAvatar={handleAvatarClick}
            editProfile={handleEditProfileClick}
            addPlace={handleAddPlacePopupClick}
            showPic={openPicPopup}
            cards={cards}
            handleCardLike={handleCardLike}
            handleCardDelete={handleCardDelete}
            setSigninFormState={setSigninFormState}
          />
          <Route path='/signin'>
            <Login
              setSigninFormState={setSigninFormState}
              onLogin={handleLogin}
            />
          </Route>
          <Route path='/signup'>
            <Register
              setSigninFormState={setSigninFormState}
              onRegister={handleRegister}
            />
          </Route>
          <Route>
            {loggedIn ? <Redirect to="/" /> : <Redirect to="/signin" />}
          </Route>
        </Switch>
        <Footer />

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closePopup} onAvatarUpdate={handleAvatarUpdate} />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closePopup} onUserUpdate={handleUserUpdate} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closePopup} onAddPlace={handleAddNewPlace} />
        <InfoTooltip isInfoTooltipOpen={isInfoTooltipOpen} onClose={closePopup} isActionSuccessful={isActionSuccessful} />

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
