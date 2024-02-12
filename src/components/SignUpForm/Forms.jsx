import React from "react";
import { signUp } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { LOGIN } from '../../constants/routes';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { FaRegUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import '../SignUpForm/Forms.css';
import '../SignUpForm/Mobile.css';

const Forms = () => {
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
      email: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .max(12, 'Must be 12 characters or less')
        .required('Required'),
      password: Yup.string()
        .max(12, 'Must be 12 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
  });

  const navigate = useNavigate();
  const signUpHandler = (e) => {
    e.preventDefault();
    const info = {
      userName: formik.values.userName,
      password: formik.values.password,
      email: formik.values.email,
    };
    signUp(info)
      .then(() => {
        navigate(LOGIN, { state: { success: true } });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className="sign-up">
      <h3 className="sign-up-title">Please Register</h3>
      <label htmlFor="name">
        <FaRegUser className="icon-user" />
      </label>
      <input
        id="userName"
        name="userName"
        type="text"
        placeholder="Enter User Name"
        className="sign-up-input-username"
        onChange={formik.handleChange}
        value={formik.values.userName}
      />
      {formik.errors.userName ? (
        <span className="errors-username">{formik.errors.userName}</span>
      ) : null}
      <label htmlFor="email">
        <MdEmail className="icon-email" />
      </label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Enter Email"
        className="sign-up-input-email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? (
        <span className="errors-email">{formik.errors.email}</span>
      ) : null}
      <label htmlFor="password">
        <TbPasswordUser className="icon-password" />
      </label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Enter Password"
        className="sign-up-input-password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.errors.password ? (
        <span className="errors-password">{formik.errors.password}</span>
      ) : null}
      <button type="submit" className="button-register" onClick={signUpHandler}>
        Register
      </button>
    </form>
  );
};

export default Forms;
