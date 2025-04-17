import React, { useContext } from "react";
import { productContext } from "../App";
import { Link } from "react-router-dom";

const AddCart = () => {
  const { cart} = useContext(productContext);

  const total = cart.reduce((acc, item) => acc + item.totalPrice, 0);

  return (
    <div>
      <h2>Items in Cart</h2>
      <h3>Total Price: ₹{total.toFixed(2)}</h3>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} id="add-cart">
            <img src={item.image} alt={item.title} width="80" />
            <p>{item.title}</p>
            <p>₹{item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total: ₹{item.totalPrice.toFixed(2)}</p>
          </div>
        ))
      )}
      <Link to="/home">Back to Home</Link>
    </div>
  );
};

export default AddCart;
