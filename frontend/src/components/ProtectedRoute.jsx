import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

const ProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            try {
                const decoded = jwtDecode(token);

                // Check if the token is expired
                if (decoded.exp * 1000 > Date.now()) {
                    setIsAuthenticated(true);
                } else {
                    // Token is expired, remove it
                    localStorage.removeItem("token");
                }
            } catch (error) {
                // Invalid token, handle error and remove token
                console.error("Invalid token", error);
                localStorage.removeItem("token");
            }
        }
    }, []);

    // Redirect to login if not authenticated
    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
