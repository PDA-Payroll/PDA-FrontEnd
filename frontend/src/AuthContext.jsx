import React, { createContext, useState } from 'react';

// Create a new context object
export const AuthContext = createContext();

// Create a provider component to wrap your application
export const AuthProvider = ({ children }) => {
    // State to store authentication status and user data
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [employeeID, setEmployeeID] = useState(null); // Initialize employeeID as null
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const[middleName, setMiddleName] = useState(null);
    const [userName, setUserName] = useState(null);
    const [isAdmin, setisAdmin] = useState(false);
    const[isSupervisor, setIsSupervisor] = useState(false);
    const[sId, setSId] = useState(null);
    const[ssn, setSsn] = useState(null);
    
    // Function to handle login
    const login = (employeeId, firstName, lastName, middleName, userName, isAdmin, isSupervisor, sId, ssn) => {
        setIsLoggedIn(true);
        setEmployeeID(employeeId);
        setFirstName(firstName);
        setLastName(lastName);
        setMiddleName(middleName);
        setUserName(userName);
        setisAdmin(isAdmin);
        setIsSupervisor(isSupervisor);
        setSId(sId);
        setSsn(ssn);
    };

    // Function to handle logout
    const logout = () => {
        setIsLoggedIn(false);
        setEmployeeID(null); // Clear employeeID on logout
        setEmployeeID(null);
        setFirstName(null);
        setLastName(null);
        setMiddleName(null);
        setUserName(null);
        setisAdmin(false);
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
    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};

