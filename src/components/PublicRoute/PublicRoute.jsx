import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const { state } = useLocation();

  return !isLoggedIn ? children : <Navigate to={state?.from || "/contacts"} />;
};

export default PublicRoute;
