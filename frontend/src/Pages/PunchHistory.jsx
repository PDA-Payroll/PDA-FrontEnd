import React, {useContext, useState, useEffect} from "react";
import {  Link, useLocation  } from "react-router-dom";
import { AuthContext } from "../AuthContext"; 
import "../Styles/punchHistory.css";
import axios from "axios";
import { backendServer } from "../../constants";


function PunchHistory() {
    const { logout } = useContext(AuthContext);
    const location = useLocation();
    const firstName = location.state ? location.state.employeeFirstName : ""; // Get first name from location state
    const { employeeFirstName } = useContext(AuthContext);
  

    const handleLogout = () => {
        logout();
        console.log("User logged out successfully!");
      };
      
    

      const handleHomepage = () => {
        Homepage();
        console.log("User returned to Homepage");
      };












      const [lastPunch,setLastPunch] = useState('');
      const getLastPunch = () => {
          axios.get('http://${backendServer}/punchCard/get/${id}')
          .then(res =>{
              console.log(res.data.content)
              setLastPunch(res.data.content)
  
          }).catch(err => {
              conseole.log(err)
          })
          }
  
















    return(


        
        <div>


        <div className="Home-container">
            <div className="bubbled-rectangle">
                <p className="text">Last Punch at:
                <script>
                    
                fetch('/api/PunchCard')
                    .then(response=?response.json)

                </script>

                
                </p>
            </div>
        </div>


         

            

            <Link to="/Logout" className='title-text' onClick={handleLogout}>
                <button style={{ color: "black" }} className="buttonLogout titleText">
                    Log Out
                </button>
            </Link>
     





            <Link to="/dashboard" className='title-text' onClicck={handleHomepage}>
                <button style={{color: "black"}} className="buttonHomepage titleText">
                    Home
                </button>      
            </Link> 

        </div>
    );




    
    


    

    }


export default PunchHistory;