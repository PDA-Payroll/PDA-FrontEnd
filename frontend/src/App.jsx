import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes from react-router-dom v6
import Login from './Pages/Login';
import Home from './Pages/home'; 
import './App.css';
import './Styles/Login.css';
import './Styles/home.css';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/login" element={<Login />} /> {/* Use element prop */}
        <Route path="/dashboard" element={<Home />} /> {/* Use element prop */}
        <Route path="/" exact element={<Login />} /> {/* Use element prop */}
      </Routes>
    </Router>
  );
}

export default App;



