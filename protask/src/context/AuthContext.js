import React, { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setisLogin] = useState(false);

  const handleLogin = () => {
    setisLogin(true);
  };

  const handleOut = () => {
    setisLogin(false);
  };

  return (
    <AuthContext.Provider value={{ isLogin, handleLogin, handleOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
