import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const nameRef = React.useRef();
  const linkRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace(nameRef.current.value, linkRef.current.value);
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      id="newcard-popup"
      size="large"
      title="Добавить место"
      close={props.onClose}
      submitButtonText="Добавить"
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__fieldset">
        <div className="popup__input-wrapper">
          <input
            type="text"
            placeholder="Название"
            className="popup__input"
            id="input-card-title"
            minLength="1"
            maxLength="30"
            ref={nameRef}
            required
          />
          <span
            className="popup__error-text"
            id="input-card-title-error"
          ></span>
        </div>
        <div className="popup__input-wrapper">
          <input
            type="url"
            placeholder="Ссылка на картинку"
            className="popup__input"
            id="input-card-link"
            ref={linkRef}
            required
          />
          <span
            className="popup__error-text"
            id="input-card-link-error"
          ></span>
        </div>
      </fieldset>
    </PopupWithForm>
  )
}

export default AddPlacePopup;
