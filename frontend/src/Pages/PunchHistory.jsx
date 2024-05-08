import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import "../Styles/punchHistory.css";
import axios from "axios";
import { backendServer } from "../../constants";


function PunchHistory() {
    const { logout } = useContext(AuthContext);
    const location = useLocation();
    const firstName = useContext(AuthContext); // Get first name from location state
    const { employeeFirstName } = useContext(AuthContext);
    const [timeWorked, setTimeWorked] = useState(0); // State variable to store time worked
    const { employeeID } = useContext(AuthContext);
    const {startDate} = useContext(AuthContext);
    const {setDate} = useContext(AuthContext);
    // const {firstName} = useContext(AuthContext);
    const navigate = useNavigate();
    const {findAllPunchCardsInRange} = useContext(AuthContext)


    const calculateTimeWorked = (date, start, end) => {
        const startDateTime = new Date(`2000-01-01 ${start}`); //fixed start date
        const endDateTime = new Date(`2000-01-01 ${end}`); //fixed end date because we only need one entire day 
        const millisecondsWorked = endDateTime - startDateTime;
        const hoursWorked = millisecondsWorked / (1000 * 60 * 60); //converts milliseconds worked into hours.
        setTimeWorked(hoursWorked.toFixed(2)); //converts hoursWorked value to two decimal places
      };
     


    const handleLogout = () => {
        logout();
        console.log("User logged out successfully!");
    };

    const handleHomepage = () => {
        Homepage();
        console.log("User returned to Homepage");
    };

    const handleSubmit = async () => {
    const utcStartDate = new Date(startDate.toISOString());

    const displayData = {
        dateIn: utcStartDate.toISOString(), // Convert selected date to UTC format
        dateOut: utcEndDate.toISOString(), // Convert end time date to UTC format
        employeeId: employeeID, //aligns with database id variable
      };
    };



    const [lastPunch, setLastPunch] = useState('');
    const getLastPunch = () => {
        axios.get('http://${backendServer}/punchCard/get/start/end/findAllPunchCardsInRange')
            .then(res => {
                console.log(res.data.content)
                setLastPunch(response.data.employeeInfo)

            }).catch(err => {
                console.log(err)
            })
    }





    console.log('Employee ID:',employeeID)
    console.log('First Name:', firstName)
    console.log('Date In:', startDate);

    

    return (



        <div>
            <div className="Home-container2">
                <div className="bubbled-rectangle2">
                    <p className="text">Last Punch at: 
                    
                        
                    </p>
                </div>
            </div>


            <Link to="/Logout" className='title-text' onClick={handleLogout}>
                <button style={{ color: "black" }} className="buttonLogout titleText">
                    Log Out
                </button>
            </Link>


            <Link to="/dashboard" className='title-text' onClick={handleHomepage}>
                <button style={{ color: "black" }} className="buttonHomepage titleText">
                    Home
                </button>
            </Link>
        </div>
    );

}


export default PunchHistory;