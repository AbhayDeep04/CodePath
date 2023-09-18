import React from 'react';
import "./Cards.css"

const Card = ({ imageUrl, heading, subHeading, buttonText, buttonLink }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={heading} />
      <div className="card-content">
        <h2>{heading}</h2>
        <p>{subHeading}</p>
        <a href={buttonLink} className="card-button">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default Card;
