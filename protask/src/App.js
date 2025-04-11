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
    setCart(cart.concat(product));
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
