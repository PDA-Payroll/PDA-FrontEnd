import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../Styles/Login.css';

function Login() {
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  const handleLogin = () => {
    console.log("Login button clicked");
    navigate('/dashboard'); // Replace history.push with navigate
  };

  return (
  
  
      <div className="bubbled-rectangle">
        <div className="title-container">
          <h1 className="title-text">Welcome!</h1>
        </div>
        <div className="bubbled-text">Username</div>
        <input type="text" className="username-input" placeholder="Enter username" />
        <div className="bubbled-text2">Password</div>
        <input type="password" className="password-input" placeholder="Enter password" />
        <button className="login-button" onClick={handleLogin}>Log In</button>
        </div>
   
  );
}

export default Login;


