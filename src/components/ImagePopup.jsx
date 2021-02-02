function ImagePopup() {
  return (
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
  );
}

export default ImagePopup;
