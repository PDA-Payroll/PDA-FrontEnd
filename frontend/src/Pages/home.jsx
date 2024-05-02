import '../Styles/home.css';
import React from 'react';
import CurrentDate from '../Styles/CurrentDate';
import CurrentTime from '../Styles/CurrentTime';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';


function Home() {


  

    const handleClockIn = ()=> {
        
      const time = new Date().toLocaleTimeString();
      setCurrentTime(time);
      console.log("Clocked-In at ");
      setMessage('Clocked-In at ');
      alert('You clocked in!');
    }

    const handleClockOut = ()=> {

      console.log("Clocked-Out at ");
      setMessage('Clocked-Out at ')
    }


    const handleLastPunch = ()=> {
      
      console.log("Last Punched at ");
      setMessage('Last Punch at ')
    }


    const handleLogOut = ()=> {
     
      console.log("logged Out");
    }


    const handlePunchRequest = ()=> {
     
      console.log("Punch Request")
    }



  return (
    <div className="Home-container">
      <div className="bubbled-rectangle1">
        <div className="title-container">
          <h1 className="title-text"> Welcome, Christian! </h1>
        </div>
      </div>
     
      <React.StrictMode>
         <CurrentDate />
      </React.StrictMode>


      <React.StrictMode>
        <CurrentTime />
      </React.StrictMode>



    <button className="button-clockin"  onClick={(handleClockIn) => alert('You Clocked In!')}> 
         Clock-in 
       </button>
   


      <button className ="button-clockout" onClick={(handleClockOut) => alert('You Clocked Out!')}>
         Clock-out 
      </button> 



      <button className="button-logout" onClick={handleLogOut}> 
      {/* Use Link to navigate to the Login Page */}
          <Link to ="/login">
            Log Out 
          </Link>
      </button> 
  
      
       <button  className="button-lastPunch" onClick={handleLastPunch => alert('Last Punch at!')}> 
          Last Punch 
       </button> 


      <button className="button-punchRequest" onClick={handlePunchRequest}> 
      {/* Use Link to navigate to the punch card request page */}
        <link to ="/punchcard-request">
         Punch Request 
        </link>
      </button>
      


     




      </div>
      

   
  );
}

export default Home;


