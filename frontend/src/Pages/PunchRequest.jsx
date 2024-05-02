import React, { useState } from 'react';
import axios from 'axios';
import { backendServer } from '../../constants'; 
import "../Styles/punchRequest.css"; 

function PunchRequest() {
  // State variables for date, start time, end time, and message
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState("9:00 AM");
  const [endTime, setEndTime] = useState("5:00 PM");
  const [message, setMessage] = useState("");
  const [timeWorked, setTimeWorked] = useState(0); // State variable to store time worked

  // Handler functions for date, start time, and end time changes
  const handleStartDateChange = (event) => {
    setStartDate(new Date(event.target.value));
    calculateTimeWorked(new Date(event.target.value), startTime, endTime);
  };

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
    calculateTimeWorked(startDate, event.target.value, endTime);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
    calculateTimeWorked(startDate, startTime, event.target.value);
  };

  // Function to calculate time worked
  const calculateTimeWorked = (date, start, end) => {
    const startDateTime = new Date(`2000-01-01 ${start}`);
    const endDateTime = new Date(`2000-01-01 ${end}`);
    const millisecondsWorked = endDateTime - startDateTime;
    const hoursWorked = millisecondsWorked / (1000 * 60 * 60);
    setTimeWorked(hoursWorked.toFixed(2));
  };

  // Handler function for form submission
  const handleSubmit = async () => {
    try {
      // Prepare data to send; date in and date out with timezone
      const requestData = {
        dateIn: startDate.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }), // Replace 'America/New_York' with your desired time zone
        dateOut: new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }), // Use current date for dateOut
      };

      
      const response = await axios.post(`http://${backendServer}/punchCard/post/create`, requestData);

     
      setMessage("Punch request submitted successfully!");
      console.log(response.data); 

      
    } catch (error) {
      console.error("An error occurred:", error);
      setMessage("Failed to submit punch request. Please try again.");
    }
  };

  return (
    <div className="punch-container">
      <div className="rectangle-pr">
        <div className="title-punch">
          <h1 className="text-punch">Punch Requests</h1>
        </div>
        <div className="current-date-time">
          <p>{getCurrentDateWithTimeRange(startDate, startTime, endTime)}</p>
        </div>
        <div className="date-input">
          <label htmlFor="start-date">Date:</label>
          <input
            type="date"
            id="start-date"
            value={startDate.toISOString().split('T')[0]}
            onChange={handleStartDateChange}
          />
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
        <div className="button-container">
        <div className="time-worked">Time Worked: {timeWorked} hours</div>
          <button className="submit-button" onClick={handleSubmit}>Submit</button>
        </div>
        {message && <div className="message">{message}</div>}
      </div>
    </div>
  );
}

function getCurrentDateWithTimeRange(startDate, startTime, endTime) {
  const year = startDate.getFullYear();
  const months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];
  const month = months[startDate.getMonth()];
  const day = startDate.getDate();
  let suffix = "th";

  if (day === 1 || day === 21 || day === 31) {
    suffix = "st";
  } else if (day === 2 || day === 22) {
    suffix = "nd";
  } else if (day === 3 || day === 23) {
    suffix = "rd";
  }

  const formattedDate = `${month} ${day}${suffix}, ${year}`;
  return `Selected date: ${formattedDate}, Time Range: ${startTime} to ${endTime}`;
}

export default PunchRequest;

