import '../index.css';
import Header from './Header.jsx';
import Main from './Main.jsx';

function App() {
  return (
    <div className="page">
      <Header />
      <Main />

      <footer className="footer">
        <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
      </footer>
      <section className="popup popup_profile">
        <form
          name="profile-info"
          className="popup__container popup__container_profile"
          noValidate
        >
          <button
            type="button"
            aria-label="Закрыть попап редактирования профиля"
            className="popup__close-button"
          ></button>
          <h2 className="popup__title">Редактировать профиль</h2>
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
          <button
            aria-label="Сохранить новые данные профиля"
            className="popup__submit-button"
          >
            Сохранить
          </button>
        </form>
      </section>
      <section className="popup popup_card">
        <form
          name="add-card"
          className="popup__container popup__container_card"
          noValidate
        >
          <button
            type="button"
            aria-label="Закрыть попап добавления фотографии"
            className="popup__close-button"
          ></button>
          <h2 className="popup__title">Новое место</h2>
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
          <button
            aria-label="Создать новую карточку с фотографией"
            className="popup__submit-button"
          >
            Создать
          </button>
        </form>
      </section>
      <section className="popup popup_image">
        <div className="popup__image-container">
          <button
            type="button"
            aria-label="Закрыть попап с фотографией"
            className="popup__close-button"
          ></button>
          <img
            src="#"
            alt="Фотография выбранного места"
            className="popup__photo"
          />
          <h3 className="popup__card-title">Название выбранного места</h3>
        </div>
      </section>
      <section className="popup popup_remove">
        <form className="popup__container popup__container_remove">
          <h2 className="popup__title popup__title_remove">Вы уверены?</h2>
          <button
            aria-label="Подтвердить удаление карточки"
            className="popup__submit-button popup__submit-button_remove"
          >
            Да
          </button>
          <button
            type="button"
            aria-label="Закрыть окно удаления карточки"
            className="popup__close-button"
          ></button>
        </form>
      </section>
      <section className="popup popup_avatar">
        <form
          name="change-avatar"
          className="popup__container popup__container_avatar"
          noValidate
        >
          <button
            type="button"
            aria-label="Закрыть окно изменения аватара"
            className="popup__close-button"
          ></button>
          <h2 className="popup__title">Обновить аватар</h2>
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
          <button
            aria-label="Сохранить новый аватар"
            className="popup__submit-button"
          >
            Сохранить
          </button>
        </form>
      </section>
      <template className="card-template">
        <article className="card">
          <button
            type="button"
            className="card__remove-button"
            aria-label="Удалить карточку"
          ></button>
          <div className="card__image-container">
            <img src="#" alt="Фотография места" className="card__image" />
          </div>
          <div className="card__description">
            <h2 className="card__title"></h2>
            <div className="card__like-container">
              <button
                type="button"
                aria-label="Поставить карточке лайк"
                className="card__like-button"
              ></button>
              <p className="card__like-count">0</p>
            </div>
          </div>
        </article>
      </template>
    </div>
  );
}

export default App;
