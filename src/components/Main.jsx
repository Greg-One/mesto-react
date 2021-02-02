import { useState, useEffect } from 'react';
import api from '../utils/Api.js';

function Main(props) {
  {
    /* Стейты и функции api */
  }
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, cards]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(cards);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__main">
          <button
            aria-label="Изменить аватар"
            className="profile__avatar-edit"
            onClick={props.onEditAvatarClick}
          >
            <img
              src={userAvatar}
              alt="Аватар пользователя"
              className="profile__avatar"
            />
          </button>
          <div className="profile__info">
            <div className="profile__user">
              <h1 className="profile__name">{userName}</h1>
              <p className="profile__occupation">{userDescription}</p>
            </div>
            <button
              type="button"
              aria-label="Редактировать профиль"
              className="profile__edit-button"
              onClick={props.onEditProfileClick}
            ></button>
          </div>
        </div>
        <button
          type="button"
          aria-label="Добавить фотографию"
          className="profile__add-button"
          onClick={props.onAddPlaceClick}
        ></button>
      </section>

      <section className="cards">
        {cards.map((card, item) => {
          return (
            <article className="card">
              <button
                type="button"
                className="card__remove-button"
                aria-label="Удалить"
              ></button>
              <div className="card__image-container">
                <img
                  src={card.link}
                  alt="Фотография места"
                  className="card__image"
                />
              </div>
              <div className="card__description">
                <h2 className="card__title">{card.title}</h2>
                <div className="card__like-container">
                  <button
                    type="button"
                    aria-label="Лайк"
                    className="card__like-button"
                  ></button>
                  <p className="card__like-count">{card.likes.length}</p>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default Main;
