import { useEffect, useContext, useRef } from 'react';
import PopupWithForm from './PopupWithForm.jsx';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function EditAvatarPopup(props) {
  const avatarRef = useRef();
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    avatarRef.current.value = currentUser.avatar;
  }, [currentUser]);

  function handleSubmit(event) {
    event.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <fieldset name="avatar" className="popup__info">
        <input
          type="url"
          placeholder="Ссылка на изображение"
          name="link"
          required=""
          className="popup__input popup__input_avatar popup__input_type_url"
          id="avatar-url-input"
          ref={avatarRef}
        />
        <span className="popup__input-error" id="avatar-url-input-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
