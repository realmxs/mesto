import React from 'react';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <button onClick={props.editAvatar} className="profile__avatar-button">
            <img
              className="profile__avatar"
              alt="Ваше фото"
              src={currentUser.avatar}
            />
          </button>
          <div className="profile__info">
            <div className="profile__wrapper">
              <h1 className="profile__title">{currentUser.name}</h1>
              <button
                className="profile__edit-button"
                type="button"
                onClick={props.editProfile}
              ></button>
            </div>
            <p className="profile__subtitle">{currentUser.about}</p>
          </div>
        </div>
        <button
          className="open-newcard-popup-button"
          onClick={props.addPlace}
        ></button>
      </section>

      <section className="cards-container">
        {props.cards.map((card) => (
          <Card key={card._id} card={card} click={props.showPic} onCardLike={props.handleCardLike} onCardDelete={props.handleCardDelete}/>
        ))}
      </section>
    </main>
  );
}

export default Main;
