import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from "../AuthContext";
import "../Styles/home.css"
import CurrentDate from '../Styles/CurrentDate.jsx';
import CurrentTime from '../Styles/CurrentTime.jsx';
import ReactDOM from 'react-dom';



function Home() {


    const { logout } = useContext(AuthContext);
    const location = useLocation();
    const firstName = location.state ? location.state.firstName : ""; // Get first name from location state

    const handleLogout = () => {
        logout();
        console.log("User logged out successfully!");
    };
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

    return (
        <div className="Home-container">
            <div className="bubbled-rectangle1">
                <div className="title-container">
                    <h1 className="title-text"> Welcome, {firstName}! </h1>
                </div>
            </div>

            <button className="button-clockin title-text" onClick={(handleClockIn) => alert('You Clocked In!')}>
                Clock-in
            </button>

            <button className="button-clockout title-text" onClick={(handleClockOut) => alert('You Clocked Out!')}>
                Clock-out
            </button>


            {/*<React.StrictMode>*/}
            <CurrentDate />
            {/*</React.StrictMode>*/}

            <Link to="/Logout" className="title-text" onClick={handleLogout}>
                <button style={{color: "black"}} className="bubbled-logout">
                    Log Out
                </button>
            </Link>
            <Link to="/PunchHistory" className='title-text'>
                <button style={{color: "black"}}className="button-lastPunch title-text">
                    Punch History
                </button>
            </Link>
            <Link to="/punchcard-request" className="title-text">
                <button style={{color: "black"}}className="button-punchRequest">
                    Punch Request
                </button>
            </Link>
        </div>
    );
}

export default Home;
