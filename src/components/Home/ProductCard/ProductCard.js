import React from "react";
import "./ProductCard.css";

const ProductCard = ({ id, title, price, rating, image }) => {
  return (
    <div className="product-card">
      <div className="product-card-info">
        <p>{title}</p>
        <p className="product-card-price">
          <small>&#x20B9;</small>
          <strong>{price}</strong>
        </p>
        <div className="product-card-rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐️</p>
            ))}
        </div>
      </div>
      <img className="product-card-image" src={image} alt={title} />
      <button className="product-card-button">Add to Basket</button>
    </div>
  );
};

export default ProductCard;
