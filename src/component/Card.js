import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

import "../styles/Card.css";

function Card({ src, location, rating, date, price }) {
  const [likeHouse, setLikeHouse] = useState(false);
  const handleClick = () => setLikeHouse(!likeHouse);

  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="likeButton">
        <AiFillHeart
          className={likeHouse ? "heart active" : "heart"}
          onClick={handleClick}
        />
      </div>
      <div className="info">
        <div className="info-rating">
          <div className="location">
            <h2>{location}</h2>
          </div>
          <div className="rating">
            <AiFillStar />
            <h2>{rating}</h2>
          </div>
        </div>
        <div className="date">
          <h3>{date}</h3>
        </div>
        <div className="price">
          <h4>{price}</h4>
        </div>
      </div>
    </div>
  );
}

export default Card;
