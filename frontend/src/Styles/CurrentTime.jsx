import React, {useState, useEffect} from 'react';


function CurrentTime() {
    // Define state variable for holding current time
    const [currentTime, setCurrentTime] = useState(new Date());
  
    // Function to update current time
    const updateCurrentTime = () => {
      setCurrentTime(new Date());
    };
  
    // Effect hook to update current time every second
    useEffect(() => {
      const timerID = setInterval(() => updateCurrentTime(), 1000);
      
      // Clean-up function to clear the interval when component unmounts
      return () => {
        clearInterval(timerID);
      };
    }, []); // Empty dependency array ensures that effect runs only once after initial render
  
    // Format the current time to display
    const formattedTime = currentTime.toLocaleTimeString();
  
    return (
      <div>
        <p className="time">{formattedTime}</p>
      </div>
    );
  }

  export default CurrentTime;