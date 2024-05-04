import React from 'react';
import '../Styles/home.css';

function CurrentDate(){
    const currentDate = new Date();

    const formattedDate = currentDate.toLocaleDateString('en-US',{
      weekday:'long',
      year: 'numeric',
      month:'long',
      day:'numeric'

    });

    return (
      <div className="current-date">
        <p>{formattedDate}</p>
      </div>
    )
  }

  export default CurrentDate;