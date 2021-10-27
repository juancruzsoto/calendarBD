import React from "react";
import MenuMain from "../components/MenuMain";
import NavBar from "../components/NavBar";
import "../assets/css/navbar.css";

function MenuView() {
  return (
    <div class="container">
      <div class="header">
        <NavBar/>
      </div>
      <div class="content">
        <MenuMain />
      </div>
    </div>
  );
}

export default MenuView;
