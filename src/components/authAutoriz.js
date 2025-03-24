const PERMISSIONS = {
    CAN_VIEW_ABOUT: "view_about",
    CAN_VIEW_EXTRA: "view_extra",
};
export default PERMISSIONS;

import React, { createContext, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location.state?.path || "/profile";

    const [user, setUser] = useState({
        username: "",
        permissions: [],
    });
    const login = (user) => {
        if (user === "admin") {
            setUser({ username: user, permissions: ["view_extra"] });
        } else {
            setUser({ username: user, permissions: ["view_about"] });
        }
        navigate(redirectPath, { replace: true });
    };
    const logout = () => {
        setUser({ username: "", permissions: [] });
    };
    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};
export const useAuth = () => {
    return useContext(AuthContext);
};


import React from "react";
import { useAuth } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
const Authentication = ({ children }) => {
    const { user } = useAuth();
    const location = useLocation();
    if (!user.username) {
        return <Navigate to="/login" state={{ path: location.pathname }} />;
    }
    return children;
};
// export default Authentication;
