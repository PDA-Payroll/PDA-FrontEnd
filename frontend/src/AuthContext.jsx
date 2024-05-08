//context provides a way to share values between components without having to manually do it
import React, { createContext, useState } from 'react';

// Create a new context object to hold authentication status and user data
export const AuthContext = createContext();

// Create a provider component to wrap your entire application
export const AuthProvider = ({ children }) => {
    // State to store authentication status and user data
    const [isLoggedIn, setIsLoggedIn] = useState(false); // true if user is logged in, false otherwise
    const [employeeID, setEmployeeID] = useState(null); // Initialize employeeID as null if no id is recognized from database 
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [middleName, setMiddleName] = useState(null);
    const [userName, setUserName] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isSupervisor, setIsSupervisor] = useState(false);
    const [sId, setSId] = useState(null);
    const [ssn, setSsn] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    // Function to handle login
    const login = (employeeId, firstName, lastName, middleName, userName, isAdmin, isSupervisor, sId, ssn) => {
        setIsLoggedIn(true);
        setEmployeeID(employeeId);
        setFirstName(firstName);
        setLastName(lastName);
        setMiddleName(middleName);
        setUserName(userName);
        setIsAdmin(isAdmin);
        setIsSupervisor(isSupervisor);
        setSId(sId);
        setSsn(ssn);
    };
    const setDates = (start, end) =>{
        setStartDate(start);
        setEndDate(end);
    }
    // Function to handle logout
    const logout = () => {
        setIsLoggedIn(false);
        setEmployeeID(null);
        setFirstName(null);
        setLastName(null);
        setMiddleName(null);
        setUserName(null);
        setIsAdmin(false);
        setIsSupervisor(false);
        setSId(null);
        setSsn(null);
    };
    
    // Value object to be passed to consumers
    const authContextValue = {
        isLoggedIn,
        employeeID,
        login,
        logout,
    };

    // Provide the auth context value to its children components
    // .provider allows to provide a value to all components
    //authContextValue is available to all components
    return (
        <AuthContext.Provider value={authContextValue}> 
            {children}
        </AuthContext.Provider>
    );
};
