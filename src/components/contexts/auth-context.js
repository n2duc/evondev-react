import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext();
function useAuth() {
    const context = useContext(AuthContext);
    if (typeof context === 'undefined') throw new Error("useAuth must be used within AuthProvider")
    return context;
}
function AuthProvider(props) {
    const [user, setUser] = useState({
        userId: 812,
        fullname: "Ngoc Duc",
        email: "ngocduc@gmail.com",
        avatar: "https://source.unsplash.com/random",
    });
    const value = { user, setUser };
    return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>
}

export { useAuth, AuthProvider }