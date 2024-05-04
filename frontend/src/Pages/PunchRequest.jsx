import React, { useState, useContext } from 'react';
import axios from 'axios';
import { backendServer } from '../../constants';
import "../Styles/punchRequest.css";
import { AuthContext } from '../AuthContext'; // Import AuthContext

function PunchRequest() {
  // State variables for date, start time, end time, and message
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState("9:00 AM");
  const [endTime, setEndTime] = useState("5:00 PM");
  const [message, setMessage] = useState("");
  const [timeWorked, setTimeWorked] = useState(0); // State variable to store time worked
  const { employeeID } = useContext(AuthContext);

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
      // Convert selected date to UTC format for consistency
      const utcStartDate = new Date(startDate.toISOString());

      // Extract hours and minutes from start time
      const [startHours, startMinutes] = startTime.split(':').map(val => parseInt(val));

      // Set dateIn with start time
      utcStartDate.setUTCHours(startHours);
      utcStartDate.setUTCMinutes(startMinutes);
      utcStartDate.setUTCSeconds(0);

      // Extract hours and minutes from end time
      const [endHours, endMinutes] = endTime.split(':').map(val => parseInt(val));

      // Set dateOut with end time
      const utcEndDate = new Date(utcStartDate);
      utcEndDate.setUTCHours(endHours);
      utcEndDate.setUTCMinutes(endMinutes);
      utcEndDate.setUTCSeconds(0);

      // Prepare data to send; date in and date out with UTC timezone
      const requestData = {
        dateIn: utcStartDate.toISOString(), // Convert selected date to UTC format
        dateOut: utcEndDate.toISOString(), // Convert end time date to UTC format
        employeeId: employeeID,
      };

      const response = await axios.post(`http://${backendServer}/punchCard/post/create`, requestData);

      setMessage("Punch request submitted successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("An error occurred:", error);
      setMessage("Failed to submit punch request. Please try again.");
    }
  };
  console.log("Employee ID:", employeeID)
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
  let day = startDate.getDate() + 1; // Add 1 to the selected day
  let nextMonth = false;

  // Check if adding 1 to the day exceeds the number of days in the month
  if (day > new Date(year, startDate.getMonth() + 1, 0).getDate()) {
    day = 1;
    nextMonth = true;
  }

  let suffix = "th";

  if (day === 1 || day === 21 || day === 31) {
    suffix = "st";
  } else if (day === 2 || day === 22) {
    suffix = "nd";
  } else if (day === 3 || day === 23) {
    suffix = "rd";
  }

  // Adjust the month if necessary
  const displayMonth = nextMonth ? months[startDate.getMonth() + 1] : month;

  // Adjust the year if necessary
  const displayYear = nextMonth ? year : year;

  const formattedDate = `${displayMonth} ${day}${suffix}, ${displayYear}`;
  return `Selected date: ${formattedDate}, Time Range: ${startTime} to ${endTime}`;
}


export default PunchRequest;