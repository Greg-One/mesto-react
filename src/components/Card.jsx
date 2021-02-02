function Card(props) {
  return (
    <article className="card">
      <button
        type="button"
        className="card__remove-button"
        aria-label="Удалить"
      ></button>
      <div className="card__image-container">
        <img
          src={props.card.link}
          alt={props.card.name}
          className="card__image"
        />
      </div>
      <div className="card__description">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-container">
          <button
            type="button"
            aria-label="Лайк"
            className="card__like-button"
          ></button>
          <p className="card__like-count">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
