import React, { useState, useContext } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css";
import { backendServer } from "../../constants";
import { AuthContext } from "../AuthContext"; // Import AuthContext

function Login() {


  const { login } = useContext(AuthContext); // Access the login function from the AuthContext
  const navigate = useNavigate();
  const [employeeUserName, setEmployeeUserName] = useState("");
  const [employeePassword, setEmployeePassword] = useState("");
  const [message, setMessage] = useState("");


  const handleLogin = () => {
    console.log("Login button clicked");

    axios
      .post(
        `http://${backendServer}/auth/login`,
        {
          employeeUserName: employeeUserName,
          employeePassword: employeePassword,
        }
      )
      .then((response) => {
        console.log("Response status:", response.status);
        console.log("Response data:", response.data.employeeInfo);

        if (response.data.employeeInfo) {
          setMessage("Login successful!");
          console.log("Data:", response.data.employeeInfo);
          const employeeID = response.data.employeeInfo.id;
          console.log("Employee ID:", employeeID);

/*  firstName: firstNamee lastName: lastName,middleName: middleName, userName: userName, id:id, isAdmin:isAdmin, isSupervisor: isSupervisor, ssn: ssn, sId:sId*/
          // Call the login function from the AuthContext and pass the employee ID

          const firstName = response.data.employeeInfo.employeeFirstName;
          console.log("First Name:", firstName);
          const lastName = response.data.employeeInfo.employeeLastName;
          const middleName = response.data.employeeInfo.employeeMiddleName;
          const userName = response.data.employeeInfo.employeeUserName;
          const id = response.data.employeeInfo.id;
          const isAdmin = response.data.employeeInfo.isAdmin;
          const isSupervisor = response.data.employeeInfo.isSupervisor;
          const ssn = response.data.employeeInfo.socialSecurityNumber;
          const sId = response.data.employeeInfo.supervisorId; 

          login(employeeID, firstName, lastName, middleName, userName, isAdmin, isSupervisor, sId, ssn);
          // Navigate to the dashboard route and pass the first name as state
          if (response.data.employeeInfo.isAdmin == true || response.data.employeeInfo.isSupervisor == true) {
            navigate("/adminHome", { state: {firstName: firstName} });/*  firstname: response.data.employeeInfo.employeeFirstName, lastName: response.data.employeeInfo.employeeLastName, middleName: response.data.employeeInfo.employeeMiddleName, userName: response.data.employeeInfo.employeeUserName, id:response.data.employeeInfo.id*/
          }
          else {
            navigate("/dashboard", { state: {} });
          }
        } else {
          throw new Error("Incorrect Username or Password");
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        setMessage("Login failed. Please try again.");
      });
  };

  return (
    <div className="Login-container">
      <div className="bubbled-rectangle">
        <div className="title-container">
          <h1 className="title-text">Welcome!</h1>
        </div>
        <div className="bubbled-text">Username</div>
        <input
          style={{ color: "black" }}
          type="text"
          className="username-input"
          placeholder="Enter username"
          value={employeeUserName}
          onChange={(e) => setEmployeeUserName(e.target.value)}
        />
        <div className="bubbled-text2">Password</div>
        <input
          style={{ color: "black" }}
          type="password"
          className="password-input"
          placeholder="Enter password"
          value={employeePassword}
          onChange={(e) => setEmployeePassword(e.target.value)}
        />
        <button className="login-button" onClick={handleLogin}>
          Log In
        </button>

        {message && <div className="message">{message}</div>}
      </div>
    </div>
  );
}

export default Login;


