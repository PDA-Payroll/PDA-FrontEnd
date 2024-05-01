import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext"; 
import "../Styles/LogOut.css";

function Logout() {
    const { logout } = useContext(AuthContext); // Access logout function from AuthContext
    const navigate = useNavigate();

    const handleLogout = () => {
        // Call logout function to clear authentication state
        logout();

        // Redirect the user to the login page
        navigate("/login");
    };

    return (
        <div className="Logout-container">
            <div className="bubbled-rectangle3">
                <div className="title-container3">
                    <h1 className="title-text3">See you soon!</h1>
                </div>
                <button className="login-button2" onClick={handleLogout}>
                    Log in again
                </button>
            </div>
        </div>
    );
}

export default Logout;
