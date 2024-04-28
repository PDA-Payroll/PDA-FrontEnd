import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Styles/Login.css';

function Login() {
  //navigate to different pages specifically home page
  //sets up state variables to manage the username, password, and messages in the login form component.
  const navigate = useNavigate();
  const [employeeUserName, setEmployeeUserName] = useState('');
  const [employeePassword, setEmployeePassword] = useState('');
  const [message, setMessage] = useState('');

  //checking console log if login button works correctly
  const handleLogin = () => {
    console.log("Login button clicked");

    // Send the username and password to the server
    axios.post(`http://localhost:6969/auth/login`, {
  employeeUserName: "someUsernameHere",
  employeePassword: "somePasswordHere"
})
    .then(response => {
      //console log to check if server connected or not
        console.log('Response status:', response.status);
        console.log('Response data:', response.data);
  
        if (response.status === 200) {
            setMessage('Login successful!');
            console.log('Data:', response.data);
            navigate('/dashboard');
        } else {
            setMessage(response.data.message || 'Login failed. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error logging in:', error);
        setMessage('Login failed. Please try again.');
    });
  };

  return (
    <div className="Login-container">
      <div className="bubbled-rectangle">
        <div className="title-container">
          <h1 className="title-text">Welcome!</h1>
        </div>
        <div className="bubbled-text">Username</div>
        <input 
          type="text" 
          className="username-input" 
          placeholder="Enter username" 
          value={employeeUserName}
          onChange={(e) => setEmployeeUserName(e.target.value)}
        />
        <div className="bubbled-text2">Password</div>
        <input 
          type="password" 
          className="password-input" 
          placeholder="Enter password" 
          value={employeePassword}
          onChange={(e) => setEmployeePassword(e.target.value)}
        />
        <button className="login-button" onClick={handleLogin}>Log In</button>
        
        {message && <div className="message">{message}</div>}
      </div>
    </div>
  );
}

export default Login;


