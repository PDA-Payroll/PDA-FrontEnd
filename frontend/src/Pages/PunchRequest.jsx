import '../Styles/punchRequest.css'; 
import React, { useState } from 'react';

//Will handle submission logic later, just setting up punch request page

function PunchRequest() {
  const [startTime, setStartTime] = useState("9:00 AM");
  const [endTime, setEndTime] = useState("5:00 PM");

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  const handleSubmit = () => {
    // Handle submission logic here
  };

  return (
    <div className="punch-container">
      <div className="rectangle-pr">
        <div className="title-punch">
          <h1 className="text-punch">Punch Requests</h1>
        </div>
        <div className="current-date-time">
          <p>{getCurrentDateWithTimeRange(startTime, endTime)}</p>
        </div>
        <div className="time-inputs">
          <label htmlFor="start-time">Start Time:</label>
          <input
            type="text"
            id="start-time"
            value={startTime}
            onChange={handleStartTimeChange}
          />
          <label htmlFor="end-time">End Time:</label>
          <input
            type="text"
            id="end-time"
            value={endTime}
            onChange={handleEndTimeChange}
          />
        </div>
        <div class="button-container">
          <button class="deny-button" onClick={handleSubmit}>Deny</button>
          <button class="approve-button" onClick={handleSubmit}>Approve</button>
        </div>
      </div>
    </div>
  );
}

function getCurrentDateWithTimeRange(startTime, endTime) {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];
  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  let suffix = "th";

  if (day === 1 || day === 21 || day === 31) {
    suffix = "st";
  } else if (day === 2 || day === 22) {
    suffix = "nd";
  } else if (day === 3 || day === 23) {
    suffix = "rd";
  }

  const formattedDate = `${month} ${day}${suffix}, ${year}`;
  return `Current date: ${formattedDate}, Time Range: ${startTime} to ${endTime}`;
}

export default PunchRequest;
