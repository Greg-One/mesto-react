import { useState } from 'react';
import '../index.css';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import PopupWithForm from './PopupWithForm.jsx';
import ImagePopup from './ImagePopup.jsx';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function App() {
  {
    /* Стейты и функции попапов */
  }
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard({
      ...selectedCard,
      link: card.link,
      name: card.name,
    });
    setImagePopupOpen(true);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setImagePopupOpen(false);
  }

  {
    /*Стейт пользователя*/
  }

  const [currentUser, setCurrentUser] = useState({
    name: '',
    about: '',
    avatear: '',
  });

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        {/* Попап редактирования профиля */}
        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <fieldset name="user" className="popup__info">
            <input
              type="text"
              placeholder="Имя"
              name="name"
              required=""
              minLength="2"
              maxLength="40"
              className="popup__input popup__input_type_name"
              id="profile-name-input"
            />
            <span
              className="popup__input-error"
              id="profile-name-input-error"
            ></span>
            <input
              type="text"
              placeholder="Род занятий"
              name="job"
              required=""
              minLength="2"
              maxLength="200"
              className="popup__input popup__input_type_occupation"
              id="profie-occupation-input"
            />
            <span
              className="popup__input-error"
              id="profie-occupation-input-error"
            ></span>
          </fieldset>
        </PopupWithForm>

        {/* Попап добавления карточки */}
        <PopupWithForm
          name="card"
          title="Новое место"
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
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
            <span
              className="popup__input-error"
              id="card-title-input-error"
            ></span>
            <input
              type="url"
              placeholder="Ссылка на изображение"
              name="link"
              required=""
              className="popup__input popup__input_type_url"
              id="card-url-input"
            />
            <span
              className="popup__input-error"
              id="card-url-input-error"
            ></span>
          </fieldset>
        </PopupWithForm>

        {/* Попап редактирования аватара */}
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
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
            <span
              className="popup__input-error"
              id="avatar-url-input-error"
            ></span>
          </fieldset>
        </PopupWithForm>

        <ImagePopup
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
          card={selectedCard}
        />

        {/* Попап удаления карточки */}
        <PopupWithForm name="remove" title="Вы уверены?" buttonText="Да" />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
