import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes from react-router-dom v6
import Login from './Pages/Login';
import Home from './Pages/home'; 
import Request from './Pages/PunchRequest';
import Logout from './Pages/LogOut'
import { AuthProvider } from './AuthContext'; // Import AuthProvider
import AdminHome from './Pages/AdminHome';
import EmployeeModifier from './Pages/EmployeeModifier';
import CreateEmployee from './Pages/CreateEmployee';
import PunchHistory from './Pages/PunchHistory';
import './App.css';
import './Styles/Login.css';
import './Styles/home.css';

function App() {
  return (
    <AuthProvider> 
      <Router>
        <Routes> 
          <Route path="/login" element={<Login />} /> {/* Use element prop */}
          <Route path="/dashboard" element={<Home />} /> {/* Use element prop */}
          <Route path="/AdminHome" element={<AdminHome />} />
          <Route path="/EmployeeModifier" element={<EmployeeModifier />} />
          <Route path="/" exact element={<Login />} /> {/* Use element prop */}
          <Route path ="/punchcard-request" element={<Request/>} /> 
          <Route path ="/logout" element={<Logout/>}/> {/* Corrected route path */}
          <Route path = "/CreateEmployee" element={<CreateEmployee/>}/>
          <Route path = "/PunchHistory" element={<PunchHistory/>}/>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;