import React from "react";

const Login = () => {
  return (
    <div className="login-page">
      <div className="container">
        <div className="login-wrapper">
          <h1>Login</h1>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
