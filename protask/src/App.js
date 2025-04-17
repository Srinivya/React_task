import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddCart from "./Components/AddCart";
import Home from "./Components/Home";
import Login from "./Components/Login";
import { AuthProvider } from "./context/AuthContext";
import ProtectiveRouter from "./Components/ProtectiveRouter";

export const productContext = createContext();

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [];
      let found = false;

      for (let i = 0; i < prevCart.length; i++) {
        const oldItem = prevCart[i];

        const newItem = {
          id: oldItem.id,
          title: oldItem.title,
          price: oldItem.price,
          image: oldItem.image,
          quantity: oldItem.quantity,
          totalPrice: oldItem.totalPrice,
        };

       
        if (oldItem.id === product.id) {
          newItem.quantity += 1;
          newItem.totalPrice += newItem.price;
          found = true;
        }

        updatedCart.push(newItem);
      }


      if (!found) {
        updatedCart.push({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1,
          totalPrice: product.price,
        });
      }

      return updatedCart;
    });
  };

  return (
    <AuthProvider>
      <productContext.Provider value={{ cart, handleAddToCart }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/home"
              element={
                <ProtectiveRouter>
                  <Home products={products} />
                </ProtectiveRouter>
              }
            />
            <Route
              path="/AddCart"
              element={
                <ProtectiveRouter>
                  <AddCart />
                </ProtectiveRouter>
              }
            />
          </Routes>
        </BrowserRouter>
      </productContext.Provider>
    </AuthProvider>
  );
}

export default App;
