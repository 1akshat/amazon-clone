import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider/StateProvider";
import { getBasketTotal } from "../../StateProvider/reducer";
import "./SubTotal.css";

const SubTotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              SubTotal ({basket?.length} items): <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" />
              This order contains a gift.
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
};

export default SubTotal;
