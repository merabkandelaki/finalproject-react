import React from "react";
import "../not-found/index.css";
import "../not-found/mobile.css";
import NotFoundPageIcon from "../../assets/404_not_found.svg";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-image-title">
        <img src={NotFoundPageIcon} alt="" />
        <h1>Page Not Found</h1>
      </div>
    </div>
  );
};

export default NotFound;
