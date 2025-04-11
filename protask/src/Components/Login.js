import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
const Login = () => {
  const { handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const usernames = [
    { name: "sri", password: "sri" },
    { name: "nivya", password: "nivya" },
    { name: "hello", password: "hello" },
  ];
  const handleSubmit = () => {
    const user = usernames.find(
      (user) => name === user.name && password === user.password
    );

    if (user) {
      handleLogin();
      navigate("/home");
    } else {
      alert("Invalid username!");
    }
  };
  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <label>Username: </label>
      <input
        type="text"
        placeholder="Enter Username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Password: </label>
      <input
        type="password"
        value={password}
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Click to Login</button>
    </div>
  );
};

export default Login;
