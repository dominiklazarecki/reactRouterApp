import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  let { pathname } = useLocation();

  return (
    <div className="footer">
      <h2>Stopka</h2>
      <p>{`Jesteś na stronie ${pathname}`}</p>
    </div>
  );
};

export default Footer;
