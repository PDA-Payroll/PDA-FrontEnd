import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from "../AuthContext"; 

function Home() {
    const { logout } = useContext(AuthContext);
    const location = useLocation();
    const firstName = location.state ? location.state.firstName : ""; // Get first name from location state

    const handleLogout = () => {
        logout();
        console.log("User logged out successfully!");
    };

    return (
        <div className="Home-container">
            <div className="bubbled-rectangle1">
                <div className="title-container">
                    <h1 className="title-text"> Welcome, {firstName}! </h1>
                </div>
            </div>

            <div className="bubbled-clockin">
                <h1 className="title-text"> Clock-in </h1>
            </div>

            <div className="bubbled-clockout">
                <h1 className="title-text"> Clock-out </h1>
            </div>

            <div className="bubbled-logout">
                <Link to="/Logout" className="title-text" onClick={handleLogout}> Log out </Link>
            </div>

            <div className="bubbled-lastPunch">
                <h1 className="title-text"> Last Punch </h1>
            </div>

            <div className="bubbled-punchRequest">
                <Link to="/punchcard-request" className="title-text"> Punch Request </Link>
            </div>

            <h1 className="time">21:35</h1>
            <h1 className="date">Friday, April 19, 2024</h1>
        </div>
    );
}

export default Home;
