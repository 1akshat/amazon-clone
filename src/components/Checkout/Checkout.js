import React from "react";
import { useStateValue } from "../StateProvider/StateProvider";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import "./Checkout.css";

const Checkout = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <img
        className="checkout-ad"
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt="checkout-ad"
      ></img>
      {basket?.length === 0 ? (
        <div>
          <h2 className="checkout-title">Your shopping basket is empty.</h2>
          <p>
            You have no items in your basket. To buy one or more items, click
            "Add to basket" next tot the item.
          </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout-title">Your shopping basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Checkout;
