//provide a way to share authentication state and functions across multiple components without the need to pass props manually through each level of the component tree.

import React, { createContext, useState } from 'react';

// Create a new context object
export const AuthContext = createContext();

// Create a provider component to wrap your application
export const AuthProvider = ({ children }) => {
    // State to store authentication status and user data
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null); // Initialize user as null

    // Function to handle login
    const login = () => {
        setIsLoggedIn(true);
    };

    // Function to handle logout
    const logout = () => {
        setIsLoggedIn(false);
        setUser(null); // Clear user data on logout
    };

    // Value object to be passed to consumers
    const authContextValue = {
        isLoggedIn,
        user,
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
