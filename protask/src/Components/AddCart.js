import React, { useContext } from "react";
import { productContext } from "../App";

const AddCart = () => {
  const { cart } = useContext(productContext);

  return (
    <div>
      <h2>Items in Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} id="add-cart">
            <img src={item.image} alt={item.title} width="80" />
            <p>{item.title}</p>
            <p>₹{item.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default AddCart;
