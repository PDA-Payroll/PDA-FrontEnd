import React from 'react';


function CurrentDate(){
    const currentDate = new Date();

    const formattedDate = currentDate.toLocaleDateString('en-US',{
      weekday:'long',
      year: 'numeric',
      month:'long',
      day:'numeric'

    });

    return (
      <div>
        <p className="date"> {formattedDate}</p>
      </div>
    )
  }

  export default CurrentDate;