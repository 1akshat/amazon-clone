import React from "react";
import { useStateValue } from "../../StateProvider/StateProvider";
import "./ProductCard.css";

const ProductCard = ({ id, title, price, rating, image }) => {
  // This is the store. (Data Layer)
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };

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
      <button className="product-card-button" onClick={addToBasket}>
        Add to Basket
      </button>
    </div>
  );
};

export default ProductCard;
