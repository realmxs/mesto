import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onAvatarUpdate(avatarRef.current.value);
    avatarRef.current.value = '';
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      id="avatar-popup"
      size="medium"
      title="Обновить аватар"
      close={props.onClose}
      submitButtonText="Обновить"
      onSubmit={handleSubmit}
    >
      <div className="popup__input-wrapper">
        <input
          type="url"
          placeholder="Ссылка на изображение"
          className="popup__input"
          id="input-avatar-link"
          ref={avatarRef}
          required
        />
        <span
          className="popup__error-text"
          id="input-avatar-link-error"
        ></span>
      </div>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
