import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import "../Footer/Footer.css";
import "../Footer/Mobile.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; 2024 merabkandelaki.com</p>
      <div className="social-media">
        <FaSquareInstagram />
        <FaSquareXTwitter />
        <FaSquareFacebook />
        <FaLinkedin />
      </div>
    </div>
  );
};

export default Footer;
