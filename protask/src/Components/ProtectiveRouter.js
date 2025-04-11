import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const ProtectiveRouter = ({ children }) => {
  const { isLogin } = useContext(AuthContext);

  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectiveRouter;
