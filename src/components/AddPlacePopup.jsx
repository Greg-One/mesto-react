import { useState } from 'react';
import PopupWithForm from './PopupWithForm.jsx';

function AddPlacePopup(props) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  return (
    <PopupWithForm
      name="card"
      title="Новое место"
      buttonText="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <fieldset name="card" className="popup__info">
        <input
          type="text"
          placeholder="Название"
          name="name"
          required=""
          minLength="2"
          maxLength="30"
          className="popup__input popup__input_type_title"
          id="card-title-input"
        />
        <span className="popup__input-error" id="card-title-input-error"></span>
        <input
          type="url"
          placeholder="Ссылка на изображение"
          name="link"
          required=""
          className="popup__input popup__input_type_url"
          id="card-url-input"
        />
        <span className="popup__input-error" id="card-url-input-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
