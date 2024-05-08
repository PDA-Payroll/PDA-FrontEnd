import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { backendServer } from '../../constants';
import "../Styles/punchRequest.css";
import { AuthContext } from '../AuthContext';

function PunchHistory() {
  const [startDate, setStartDate] = useState(''); //states variable for start date 
  const [endDate, setEndDate] = useState(''); //states variable for endDate 
  const [punchHistory, setPunchHistory] = useState([]); //states vbariable for punch history 
  const { employeeID } = useContext(AuthContext); // Gets employeeID variable from AuthContext 



  //handler function for start date
  //triggered when startDate input is requested 
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };


  //handler fucntion for end date 
  //triggered when endDate input is requested 
  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  //function that gets sumbitted punch times 
  const handleSubmit = async () => {
    try {
      console.log("Submit button clicked");
      // Convert start and end dates to ISO strings
      const isoStartDate = new Date(startDate).toISOString();
      const isoEndDate = new Date(endDate).toISOString();
  
      // Make the request with ISO string dates
      const response = await axios.get(`http://${backendServer}/punchCard/get/findDateRange/${isoStartDate}/${isoEndDate}`);
      
      // Set the punch history
      setPunchHistory(response.data);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };


  //triggers handleSubmit function when startDate and endDate is requested 
  useEffect(() => {
    if (startDate && endDate) {
      handleSubmit();
    }
  }, [startDate, endDate]);

  // Get the latest punch
  const latestPunch = punchHistory.length > 0 ? punchHistory[punchHistory.length - 1] : null;

  return (
    //displays punch time
    <div className="punch-container">
      <div className="rectangle-pr">
        <div className="title-punch">
          <h1 className="text-punch">Punch History</h1>
        </div>
        <div className="date-range-inputs">
          <label htmlFor="start-date">Start Date:</label>
          <input type="date" id="start-date" value={startDate} onChange={handleStartDateChange} />
          <label htmlFor="end-date">End Date:</label>
          <input type="date" id="end-date" value={endDate} onChange={handleEndDateChange} />
        </div>
        <div className="latest-punch">

          
          {latestPunch ? (
            <div>
              <h2>Latest Punch</h2>
              <p>Date: {latestPunch.dateIn}</p>  
              <p>Start Time: {latestPunch.dateIn}</p>
              <p>End Time: {latestPunch.dateOut}</p>
            </div>
          ) : (
            <p>No punch records found for the specified date range.</p> // Displayed if no punch records found 
          )}
        </div>
      </div>
    </div>
  );
}

export default PunchHistory;