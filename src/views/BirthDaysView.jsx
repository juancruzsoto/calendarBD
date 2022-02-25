import React from "react";
import BirthDayManagement from "../components/BirthDayManagement.jsx";
import NavBar from "../components/NavBar";
import "../assets/css/navbar.css";

function BirthDaysView() {
  return (
    <div class="container">
      <div class="header">
        <NavBar />
      </div>
      <div class="content" style={{ flexGrow: 1, textAlign: "center" }}>
        <BirthDayManagement />
      </div>
    </div>
  );
}

export default BirthDaysView;
