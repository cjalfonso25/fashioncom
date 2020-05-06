import React, { useEffect } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

const Login = () => {
  useEffect(() => {
    document.title = "Login - FashionCom";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location = "/projects/fashioncom/profile";
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="login-wrapper">
          <h1>Login</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Input label="Email Address" name="email" type="email" />
            <Input label="Password" name="password" type="password" />
            <Button label="Login" type="submit" className="btn-primary" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
