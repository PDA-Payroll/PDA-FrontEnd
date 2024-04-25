import '../Styles/home.css';
import react from 'react'


function Home() {

  return(
    <div className = "Home-container">
      <div className="bubbled-rectangle">
        <div className="title-container">
          <h1 className="title-text"> Welcome, Christian! </h1>
        </div>
      </div>
 

      <div className = "bubbled-clockin"> 
        <h1 className="title-text"> Clock-in </h1>
      </div>


      <div className = "bubbled-clockout"> 
        <h1 className="title-text"> Clock-out </h1>
      </div>


      <div className = "bubbled-logout">
        <h1 className="title-text"> Log Out </h1> 
      </div>


      <div className = "bubbled-lastPunch"> 
        <h1 className="title-text"> Last Punch </h1> 
      </div>


      <div className = "bubbled-punchRequest">
        <h1 className="title-text"> Punch Request </h1> 
      </div>


    


      <h1 className="time">21:35</h1>


      <h1 className="date">Friday, April 19, 2024</h1>


</div>


  );
}

export default Home;


