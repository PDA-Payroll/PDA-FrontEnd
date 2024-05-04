import React, { createContext, useState } from 'react';

// Create a new context object
export const AuthContext = createContext();

// Create a provider component to wrap your application
export const AuthProvider = ({ children }) => {
    // State to store authentication status and user data
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [employeeID, setEmployeeID] = useState(null); // Initialize employeeID as null

    // Function to handle login
    const login = (employeeId) => {
        setIsLoggedIn(true);
        setEmployeeID(employeeId);
    };

    // Function to handle logout
    const logout = () => {
        setIsLoggedIn(false);
        setEmployeeID(null); // Clear employeeID on logout
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

