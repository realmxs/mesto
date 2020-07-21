import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={`popup ${props.isOpen && 'popup_opened'}`} id={props.id}>
      <form className={`popup__container popup__container_${props.size}`} noValidate>
        <button className="popup__close-button" id="close-avatar-popup-button" type="button" onClick={props.close}></button>
        <h2 className="popup__title">{props.title}</h2>
        {props.children}
        <button className="popup__submit-button" type="submit">{props.submitButtonText}</button>
      </form>
    </div>
  )
}

export default PopupWithForm;
