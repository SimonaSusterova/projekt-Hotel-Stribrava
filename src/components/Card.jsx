export const Card = ({ title, body, image }) => {
  return (
    <div className="card">
      <img className="card__image" src={image} alt={title} />
      <div className="card__title">{title}</div>
      <div className="card__body">{body}</div>
    </div>
  );
};