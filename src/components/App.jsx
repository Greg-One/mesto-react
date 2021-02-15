import { useState, useEffect } from 'react';
import '../index.css';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import PopupWithForm from './PopupWithForm.jsx';
import ImagePopup from './ImagePopup.jsx';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import api from '../utils/Api.js';
import EditProfilePopup from './EditProfilePopup.jsx';
import EditAvatarPopup from './EditAvatarPopup.jsx';
import AddPlacePopup from './AddPlcaePopup';

function App() {
  //! Стейты и функции попапов
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

  //! Стейт пользователя
  const [currentUser, setCurrentUser] = useState({
    name: '',
    about: '',
    avatar: '',
  });

  useEffect(() => {
    api.getUserInfo().then((user) => {
      setCurrentUser(user);
    });
  }, []);

  // Обновление пользователя
  function handleUpdateUser(user) {
    api
      .setUserInfo(user)
      .then(setCurrentUser)
      .then(closeAllPopups)
      .catch((err) => console.log(err));
  }

  // Обновление аватара
  function handleUpdateAvatar(user) {
    api
      .setNewAvatar(user)
      .then(setCurrentUser)
      .then(closeAllPopups)
      .catch((err) => console.log(err));
  }

  //! Стейты и функции карточки
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInitialCards().then((cards) => {
      setCards(cards);
    });
  }, []);

  // Лайк
  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api.changeCardLikeStatus(card._id, isLiked).then((newCard) => {
      const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
      setCards(newCards);
    });
  }

  // Удаление
  function handleCardDelete(card) {
    api.removeCard(card._id).then(() => {
      const newCards = cards.filter((c) => c._id !== card._id);
      setCards(newCards);
    });
  }

  function handleAddPlace(card) {}

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />
        <Footer />

        {/* Попап редактирования профиля */}
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        {/* Попап добавления карточки */}
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlace}
        />

        {/* Попап редактирования аватара */}
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

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
