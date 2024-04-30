import React from "react";
import { Link } from "react-router-dom";
import "../Styles/LogOut.css"

function Logout(){
    return (
        <div className="Logout-container">
          <div className="bubbled-rectangle3">
            <div className="title-container3">
              <h1 className="title-text3">See you soon!</h1>
            </div>
            <Link to="/login" className="login-button2">Log In Again</Link>
        
          </div>
        </div>
      );
    }
    
    export default Logout;
