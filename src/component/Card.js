import "../styles/Card.css";

function Card({ src, location, date, price }) {
  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="info">
        <h2>{location}</h2>
        <h3>{date}</h3>
        <h4>{price}</h4>
      </div>
    </div>
  );
}

export default Card;
