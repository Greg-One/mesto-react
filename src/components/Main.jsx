import avatar from '../images/Cousteau.jpg';

function Main(props) {
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
              src={avatar}
              alt="Аватар пользователя"
              className="profile__avatar"
            />
          </button>
          <div className="profile__info">
            <div className="profile__user">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <p className="profile__occupation">Исследователь океана</p>
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
