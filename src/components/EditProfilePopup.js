import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';



function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState([]);
  const [description, setDescription] = React.useState([]);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUserUpdate(name, description);
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      id="profile-edit-popup"
      size="large"
      title="Изменить данные"
      close={props.onClose}
      submitButtonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__fieldset">
        <div className="popup__input-wrapper">
          <input
            type="text"
            value={name || ''} // "A component is changing an uncontrolled input of type text to be controlled" fix
            placeholder="Имя"
            className="popup__input"
            id="input-profile-title"
            minLength="2"
            maxLength="40"
            pattern="[A-Za-zА-Яа-яЁё\s\-]{1,}"
            onChange={handleNameChange}
            required
          />
          <span
            className="popup__error-text"
            id="input-profile-title-error"
          ></span>
        </div>
        <div className="popup__input-wrapper">
          <input
            type="text"
            value={description || ''}   // "A component is changing an uncontrolled input of type text to be controlled" fix
            placeholder="О себе"
            className="popup__input"
            id="input-profile-subtitle"
            minLength="2"
            maxLength="200"
            onChange={handleDescriptionChange}
            required
          />
          <span
            className="popup__error-text"
            id="input-profile-subtitle-error"
          ></span>
        </div>
      </fieldset>
    </PopupWithForm>
  )
}

export default EditProfilePopup;
