import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../App";

const Home = ({ products }) => {
  const { handleAddToCart } = useContext(productContext);

  return (
    <div>
      <h1>All Products</h1>
      <Link to="/AddCart">Go to Cart</Link>
      <div className="product-list">
        {products.map((item) => (
          <ul key={item.id} className="product-item">
            <li>
              <strong>Title:</strong> {item.title}
            </li>
            <li>
              <img src={item.image} alt={item.title} width="100" />
            </li>
            <li>
              <strong>Category:</strong> {item.category}
            </li>
            <li>
              <strong>Price:</strong> ₹{item.price}
            </li>
            <li>
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Home;
