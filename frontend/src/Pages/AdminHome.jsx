import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from "../AuthContext.jsx";
import "../Styles/home.css"
import CurrentDate from '../Styles/CurrentDate.jsx';
import CurrentTime from '../Styles/CurrentTime.jsx';
import { MantineProvider, Button, Group } from "@mantine/core"
import '@m'

function AdminHome() {
  const { logout } = useContext(AuthContext);
  const location = useLocation();
  const firstName = location.state ? location.state.firstName : ""; // Get first name from location state

  const handleClockIn = () => {

    const time = new Date().toLocaleTimeString();
    setCurrentTime(time);
    console.log("Clocked-In at ");
    setMessage('Clocked-In at ');
    alert('You clocked in!');
  }


  const handleClockOut = () => {

    console.log("Clocked-Out at ");
    setMessage('Clocked-Out at ')
  }

  const handleLogout = () => {
    logout();
    console.log("User logged out successfully!");
  };


  return (
    <div className="Home-container">
      <div className="bubbled-rectangle1">
        <div className="title-container">
          <h1 className="name-text"> Welcome, {firstName}! </h1>
        </div>
      </div>

      {/* Display CurrentTime component */}
      <CurrentTime />
      <CurrentDate />
      <Link to="/Logout" className='title-text' onClick={handleLogout}>
        <button style={{ color: "black" }} className="button-logout title-text">
          Log Out
        </button>
      </Link>
      <div>
        <MantineProvider>
          <Group>
            <Button component={Link} to="/EmployeeModifier"  style={{ color: "black" }}>Employee Accounts</Button>
            <Button component={Link} to="/punchcard-request" className={Button.classes.root}style={{color:"black"}}>Punch Request</Button> 
          </Group>
        </MantineProvider>
      </div>
      <Link to="/PunchHistory" className='title-text'>
        <button style={{ color: "black" }} className="button-lastPunch title-text">
          Punch History
        </button>
      </Link>
    </div>
  );
}
export default AdminHome;

