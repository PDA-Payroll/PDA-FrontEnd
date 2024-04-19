/* Login page so far, will fix login button so that it can navigate to home page*/
import React from 'react';
import '../Styles/Login.css';

function Login() {
  return (
    <div className="Login-container">
      <div className="bubbled-rectangle">
        <div className="title-container">
          <h1 className="title-text">Welcome!</h1>
        </div>
        <div className="bubbled-text">Username</div>
        <input type="text" className="username-input" placeholder="Enter username" />
        <div className="bubbled-text2">Password</div>
        <input type="password" className="password-input" placeholder="Enter password" />
        <button className="login-button">Log In</button>
      </div>
    </div>
  );
}

export default Login;


