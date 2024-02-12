import React, { useState } from 'react';
import appRoutes from '../../constants/routes';
import { NavLink, useNavigate } from 'react-router-dom';
import actionCreators from '../../context/authcontext/authActionCreators';
import { useAuthContext } from "../../context/authcontext/AuthContextProvider";
import { FaUserCog } from "react-icons/fa";
import Logo from '../../assets/logo.png';
import "../Navbar/Navbar.css";
import '../Navbar/Mobile.css';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const values = Object.entries(appRoutes);

const Navbar = () => {
  const { dispatch } = useAuthContext();
  const { state } = useAuthContext();
  const navigate = useNavigate();
  const NavBarLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "white" : "#777575",
    };
  };

  const [nav, setNav] = useState(false);

  window.addEventListener("resize", () => {
    const isMobile = window.innerWidth <= 1075;
    if (!isMobile) setNav(false);
  });

  return (
    <div className="header">
      <div className="header-logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className={nav ? "navbar-menu navbar-menu--active" : "navbar-menu"}>
        {values.map((route) => (
          <span
            key={route[1]}
            onClick={() => {
              navigate(route[1]);
            }}
          >
            <NavLink style={NavBarLinkStyle} to={route[1]}>
              <span className="links">{route[0]}</span>
            </NavLink>
          </span>
        ))}

        {state.isUserLoggedIn && (
          <div className="user-logged-in">
            <span
              className="log-out"
              onClick={() => {
                dispatch(actionCreators.logOut());
              }}
            >
              LOGOUT
            </span>
            <span className="user-name">
              <FaUserCog className="user-icon" />
              {state.user.userName}
            </span>
          </div>
        )}
      </div>
      <div onClick={() => setNav(!nav)} className="burger-menu">
        {nav ? (
          <AiOutlineClose size={25} color="white" />
        ) : (
          <AiOutlineMenu size={25} color="white" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
