import React from "react";
import CalendarBD from "../components/CalendarBD";
import NavBar from "../components/NavBar";
import "../assets/css/navbar.css";

function MenuView() {
  return (
    <div class="container">
      <div class="header">
        <NavBar/>
      </div>
      <div class="content">
        <CalendarBD />
      </div>
    </div>
  );
}

export default MenuView;
