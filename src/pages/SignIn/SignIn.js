import React from "react";
import Form from "../../components/SignInForm/Form";
import { useLocation } from "react-router-dom";
import "../SignIn/SignIn.css";
import "../SignIn/Mobile.css";

const SignIn = () => {
  const location = useLocation();
  const success = location?.state?.success;
  return (
    <div className="login">
      <div className="login-success">
        {success && <h3>Congratulations! You Have Successfully Registered!</h3>}
        <Form />
      </div>
    </div>
  );
};

export default SignIn;
