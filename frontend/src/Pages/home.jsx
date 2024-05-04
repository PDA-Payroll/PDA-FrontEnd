import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from "../AuthContext";
import "../Styles/home.css"
import CurrentDate from '../Styles/CurrentDate.jsx';
import CurrentTime from '../Styles/CurrentTime.jsx';

function Home() {
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

      <button
        className="button-clockin title-text"
        style={{ color: "black" }}
        onClick={() => alert('You Clocked In!')}
      >
        Clock In
      </button>



      <button
        className="button-clockout title-text"
        style={{ color: "black" }}
        onClick={() => alert('You Clocked Out!')}
      >
        Clock Out
      </button>


      <Link to="/Logout" className='title-text' onClick={handleLogout}>
        <button style={{ color: "black" }} className="button-logout title-text">
          Log Out
        </button>
      </Link>


      <Link to="/PunchHistory" className='title-text'>
        <button style={{ color: "black" }} className="button-lastPunch title-text">
          Punch History
        </button>
      </Link>

      <Link to="/punchcard-request" className='title-text'>
        <button style={{ color: "black" }} className="button-punchRequest title-text">
          Punch Request
        </button>
      </Link>

    </div>
  );
}

export default Home;

