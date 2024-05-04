import React, { useState, useEffect } from 'react';
import "../Styles/home.css"; // Import your CSS file

function CurrentTime() {
    const [currentTime, setCurrentTime] = useState(new Date());

    const updateCurrentTime = () => {
      setCurrentTime(new Date());
    };

    useEffect(() => {
      const timerID = setInterval(() => updateCurrentTime(), 1000);
      return () => {
        clearInterval(timerID);
      };
    }, []);

    const formattedTime = currentTime.toLocaleTimeString();

    return (
      <div className="current-time">
        <p>{formattedTime}</p>
      </div>
    );
}

export default CurrentTime;
