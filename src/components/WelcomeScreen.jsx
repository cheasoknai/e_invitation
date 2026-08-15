import React from "react";
import "./MainContainer.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function WelcomeScreen() {
  const goto = useNavigate();

  function gotoHome() {
    goto("/home");
  }
  return (
    <div className="welcome-page">
      <div className="welcome">
        <video src="SCR001.webm" autoPlay muted width="450px"></video>
      </div>
      <div className="line">
        <img src="line.png" alt="" width="380px" />
      </div>
      <div className="btn-open">
        <div onClick={gotoHome}>
          <img src="btn-open.png" alt="" width="200px" />
        </div>
      </div>
    </div>
  );
}
