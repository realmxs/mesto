import React from 'react';

function Card(props) {
  const card = props.card;
  function clickOnCard() {
    props.click(card)
  }
  return (
    <div className="card">
      <img onClick={clickOnCard} className="card__image" alt="фото" src={card.link} />
      <button className="card__delete-button card__delete-button_visiable 123"></button>
      <div className="card__info">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-wrapper">
          <button className="card__like-button" type="button"></button>
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;
