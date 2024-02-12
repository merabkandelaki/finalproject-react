import React, { useState } from "react";
import { signIn } from "../../api/auth";
import { Link, useNavigate } from "react-router-dom";
import { HOME, REGISTER } from '../../constants/routes';
import { PacmanLoader } from "react-spinners";
import { useAuthContext } from "../../context/authcontext/AuthContextProvider";
import actionCreators from "../../context/authcontext/authActionCreators";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import '../SignInForm/Form.css';
import '../SignInForm/Mobile.css';

const Form = () => {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    userName: "",
    password: "",
    error: "",
  });
  const [loading, setLoading] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    setInfo((prev) => ({ ...prev, error: "" }));
    signIn(info)
      .then((data) => {
        dispatch(actionCreators.logIn(data));
        navigate(HOME);
      })
      .catch((err) => {
        setInfo((prev) => ({ ...prev, error: err.message }));
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="sign-in-errors">
      {!info.error && (
        <form className="sign-in">
          <h1 className="sign-in-title">Please Log In</h1>
          <label htmlFor="userName">
            <FaUserCircle className="sign-in-icon-user" />
          </label>
          <input
            placeholder="Enter User Name"
            autoComplete="true"
            value={info.userName}
            type="text"
            name="userName"
            className="sign-in-input-username"
            onChange={(e) => {
              setInfo((prev) => {
                return { ...prev, [e.target.name]: e.target.value };
              });
            }}
          />
          <label htmlFor="password">
            <RiLockPasswordFill className="sign-in-icon-password" />
          </label>
          <input
            placeholder="Enter Password"
            autoComplete="true"
            value={info.password}
            type="password"
            name="password"
            className="sign-in-input-password"
            onChange={(e) => {
              setInfo((prev) => {
                return { ...prev, [e.target.name]: e.target.value };
              });
            }}
          />
          {loading && <PacmanLoader color="#36d7b7" className="pacmanloader" />}
          <button className="button-signin" onClick={submitHandler}>
            Sign In
          </button>
        </form>
      )}
      {info.error && (
        <div className="errors">
          <div className="errors-signin-button-redirect">
            <span className="errors-signin">
              {info.error}, Please Go To The Registration Page
            </span>
            <button className="button-redirect">
              <Link to={REGISTER}>Go To Register Page</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
