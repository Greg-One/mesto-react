import { useState, useEffect, useContext } from 'react';
import api from '../utils/Api.js';
import Card from './Card.jsx';
import avatar from '../images/Cousteau.jpg';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main(props) {
  {
    /* Стейты и функции api */
  }

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }, []);

  const currentUser = useContext(CurrentUserContext);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api.changeCardLikeStatus(card._id, !isLiked).then((newCard) => {
      const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
      setCards(newCards);
    });
  }

  return (
    <main>
      <section className="profile">
        <div className="profile__main">
          <button
            aria-label="Изменить аватар"
            className="profile__avatar-edit"
            onClick={props.onEditAvatar}
          >
            <img
              src={currentUser.avatar ? currentUser.avatar : avatar}
              alt="Аватар пользователя"
              className="profile__avatar"
            />
          </button>
          <div className="profile__info">
            <div className="profile__user">
              <h1 className="profile__name">
                {currentUser.name ? currentUser.name : 'Жак-Ив Кусто'}
              </h1>
              <p className="profile__occupation">
                {currentUser.about ? currentUser.about : 'Исследователь океана'}
              </p>
            </div>
            <button
              type="button"
              aria-label="Редактировать профиль"
              className="profile__edit-button"
              onClick={props.onEditProfile}
            ></button>
          </div>
        </div>
        <button
          type="button"
          aria-label="Добавить фотографию"
          className="profile__add-button"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="cards">
        {cards.map((card) => {
          return (
            <Card
              key={card._id}
              card={card}
              onCardClick={props.onCardClick}
              onCardLike={handleCardLike}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
