import React from 'react';

function PopupWithImage(props) {
  return (
    <div className={`popup ${props.isOpen && 'popup_opened'}`} id="pic-popup">
      <div className="popup__wrapper">
        <img className="popup__image" alt="фото" src={props.cardInfo.link} />
        <button onClick={props.close} className="popup__close-button" id="close-picpopup" type="button"></button>
        <h2 className="popup__image-title">{props.cardInfo.name}</h2>
      </div>
    </div>
  )
}

export default PopupWithImage;
