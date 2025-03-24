import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role, requiredRole }) => {
  // Check if the user's role matches the required role for the route
  if (role !== requiredRole) {
    return <Navigate to="/unauthorized" />;
  }
  return children;
};

export default ProtectedRoute;
