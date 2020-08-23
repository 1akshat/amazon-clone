import React from "react";
import "./CheckoutProduct.css";

const CheckoutProduct = ({ id, title, price, image, rating }) => {
  return (
    <div className="checkout-product">
      <img className="checkout-product-image" src={image} alt={title} />
      <div className="checkout-product-details">
        <p className="checkout-product-title">{title}</p>
        <p className="checkout-product-price">
          <small>&#x20B9;</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout-product-rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐️</p>
            ))}
        </div>
        <button className="checkout-product-remove-from-basket">
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
