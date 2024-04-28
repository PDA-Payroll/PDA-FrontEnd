import '../Styles/home.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home-container">
      <div className="bubbled-rectangle1">
        <div className="title-container">
          <h1 className="title-text"> Welcome, Christian! </h1>
        </div>
      </div>

      <div className="bubbled-clockin">
        <h1 className="title-text"> Clock-in </h1>
      </div>

      <div className="bubbled-clockout">
        <h1 className="title-text"> Clock-out </h1>
      </div>

      <div className="bubbled-logout">
        <h1 className="title-text"> Log Out </h1>
      </div>

      <div className="bubbled-lastPunch">
        <h1 className="title-text"> Last Punch </h1>
      </div>

      <div className="bubbled-punchRequest">
        {/* Use Link to navigate to the punch card request page */}
        <Link to="/punchcard-request" className="title-text"> Punch Request </Link>
      </div>

      <h1 className="time">21:35</h1>
      <h1 className="date">Friday, April 19, 2024</h1>
    </div>
  );
}

export default Home;


