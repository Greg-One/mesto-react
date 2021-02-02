import { useState, useEffect } from 'react';
import avatar from '../images/Cousteau.jpg';
import api from '../utils/Api.js';

function Main(props) {
  {
    /* Стейты и функции api */
  }
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');

  useEffect(() => {
    Promise.all([api.getUserInfo()])
      .then(([user]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  });

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

      <section className="cards"></section>
    </main>
  );
}

export default Main;
