import React, { useState } from "react";
import axios, { AxiosHeaders } from "axios";
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css";
import { backendServer } from "../../constants";

function Login() {
	//navigate to different pages specifically home page
	//sets up state variables to manage the username, password, and messages in the login form component.
	const navigate = useNavigate();
	const [employeeUserName, setEmployeeUserName] = useState("");
	const [employeePassword, setEmployeePassword] = useState("");
	const [message, setMessage] = useState("");
	const axiosConfig = {
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": `http://${backendServer}`,
			Accept: "application/json",
		},
	};

	//checking console log if login button works correctly
	const handleLogin = () => {
		console.log("Login button clicked");

		// Send the username and password to the server
		axios
			.post(
				`http://${backendServer}/auth/login`,
				{
					employeeUserName: employeeUserName,
					employeePassword: employeePassword,
				},
				axiosConfig,
			)
			.then((response) => {
				//console log to check if server connected or not
				console.log("Response status:", response.status);
				console.log("Response data:", response.data.employeeInfo);

				if (response.data.employeeInfo) {
					setMessage("Login successful!");
					console.log("Data:", response.data.employeeInfo);
					navigate("/dashboard");
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
					type="text"
					className="username-input"
					placeholder="Enter username"
					value={employeeUserName}
					onChange={(e) => setEmployeeUserName(e.target.value)}
				/>
				<div className="bubbled-text2">Password</div>
				<input
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
