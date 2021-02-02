function PopupWithForm(props) {
  return (
    <section className={`popup popup_${props.name}`}>
      <form
        name={props.name}
        className={`popup__container popup__container_${props.name}`}
        noValidate
      >
        <button
          type="button"
          aria-label="Закрыть"
          className="popup__close-button"
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        {props.children}
        <button aria-label="Сохранить" className="popup__submit-button">
          Сохранить
        </button>
      </form>
    </section>
  );
}

export default PopupWithForm;
