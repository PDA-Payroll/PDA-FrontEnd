//context provides a way to share values between components wihtout having to manually do it
import React, { createContext, useState } from 'react';

// Create a new context object; holds authentication status and user data can be accessed by an component within Authprovider 
export const AuthContext = createContext();

// Create a provider component to wrap your entire application
export const AuthProvider = ({ children }) => {
    // State to store authentication status and user data
    const [isLoggedIn, setIsLoggedIn] = useState(false); //true if user is logged in, false otherwise
    const [employeeID, setEmployeeID] = useState(null); // Initialize employeeID as null if no id is recognized from database 

    // Function to handle login
    //at login, we are given employee id from employee data
    const login = (employeeId) => {
        setIsLoggedIn(true);
        setEmployeeID(employeeId); //sets id to database given id 
    };

    // Function to handle logout
    const logout = () => {
        setIsLoggedIn(false);
        setEmployeeID(null); // Clear employeeID on logout
    };

    // Value object to be passed to consumers
    //gathers all necessary authentication-related data needed to components 
    const authContextValue = {
        isLoggedIn,
        employeeID,
        login,
        logout,
    };

    // Provide the auth context value to its children components
    //.provider allows to provide a value to all components 
    //authContextValue is available to all components 
    return (
        <AuthContext.Provider value={authContextValue}> 
            {children}
        </AuthContext.Provider>
    );
};