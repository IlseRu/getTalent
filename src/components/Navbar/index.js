import React from "react";
import { useNavigate } from "react-router-dom";
import "./st-nav.scss";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <span>Get Talent</span>
      <div className="navbar__buttons">
        <span onClick={() => navigate("/")}>Home</span>
        <span onClick={() => navigate("/edit")}>Crear</span>
      </div>
    </div>
  );
}
