import React from "react";
import { useAuthContext } from "../context/authcontext/AuthContextProvider";
import "../Guard/AuthGuard.css";
import MovieImage from "../assets/img_movie.png";
import "../Guard/Mobile.css";

const AuthGuard = ({ children }) => {
  const { state } = useAuthContext();
  if (!state.isUserLoggedIn) {
    return (
      <div className="auth-guard">
        <div className="auth-guard-title-img">
          <p>
            Sign In And <span>Just Watch</span>
          </p>
          <img src={MovieImage} alt="" />
        </div>
      </div>
    );
  }
  return <>{children}</>;
};

export default AuthGuard;
