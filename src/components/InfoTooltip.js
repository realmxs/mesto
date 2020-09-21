import React from 'react';
import success from '../images/success.svg'
import fail from '../images/fail.svg'

function InfoTooltip({ isInfoTooltipOpen, onClose, isActionSuccessful }) {
  return (
    <div className={`popup ${isInfoTooltipOpen && 'popup_opened'}`}>
      <form className={`popup__container popup__container_large`} noValidate>
        <button className="popup__close-button" id="close-avatar-popup-button" type="button" onClick={onClose}></button>
        {isActionSuccessful ?
          <img className="popup__pic" src={success} alt="Успех!" /> :
          <img className="popup__pic" src={fail} alt="Ошибка!" />
        }
        <h2 className="popup__title">
          {isActionSuccessful ? "Вы успешно зарегистрировались!" : "Что-то пошло не так, попробуйте еще раз."}
        </h2>
      </form>
    </div>
  )
}

export default InfoTooltip;
