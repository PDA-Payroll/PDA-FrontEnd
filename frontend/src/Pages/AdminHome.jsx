import '@mantine/core/styles/UnstyledButton.css';
import '@mantine/core/styles/Button.css';
import '@mantine/core/styles/Group.css'
import "../Styles/home.css";
import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from "../AuthContext.jsx";
import CurrentDate from '../Styles/CurrentDate.jsx';
import CurrentTime from '../Styles/CurrentTime.jsx';
import { MantineProvider, Button, Group } from "@mantine/core"

function AdminHome() {
  const { logout } = useContext(AuthContext);
  const location = useLocation();
  const firstName = location.state ? location.state.firstName : ""; // Get first name from location state
  const isAdmin = location.state ? location.state.isAdmin : false;
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
          <Group gap="xl">
            <Button className='mantine-Button-root1' component={Link} to="/EmployeeModifier" variant="filled"  style={{ color: "black" }} >Employee Accounts</Button>
            <Button className='mantine-Button-root1' component={Link} to="/punchcard-request" variant="filled" style={{color:"black"}}> Punch Request </Button> 
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

