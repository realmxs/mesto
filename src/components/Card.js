import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const card = props.card;

  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `card__delete-button ${isOwn ? 'card__delete-button_active' : 'card__delete-button_inactive'}`
  );

  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `card__like-button ${isLiked ? 'card__like-button_active' : 'card__like-button_inactive'}`
  );

  function clickOnCard() {
    props.click(card)
  }

  function handleLikeClick() {
    props.onCardLike(card)
  }

  function handleCardDelete() {
    props.onCardDelete(card)
  }

  return (
    <div className="card">
      <img onClick={clickOnCard} className="card__image" alt="фото" src={card.link} />
      <button onClick={handleCardDelete} className={cardDeleteButtonClassName}></button>
      <div className="card__info">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-wrapper">
          <button onClick={handleLikeClick} className={cardLikeButtonClassName} type="button"></button>
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;
