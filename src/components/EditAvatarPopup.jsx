import { useRef } from 'react';
import PopupWithForm from './PopupWithForm.jsx';

function EditAvatarPopup(props) {
  const avatarRef = useRef();

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <fieldset name="avatar" className="popup__info">
        <input
          type="url"
          placeholder="Ссылка на изображение"
          name="link"
          required=""
          className="popup__input popup__input_avatar popup__input_type_url"
          id="avatar-url-input"
        />
        <span className="popup__input-error" id="avatar-url-input-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
