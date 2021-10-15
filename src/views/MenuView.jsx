import React from "react";
import MenuMain from "../components/MenuMain";
import NavBar from "../components/NavBar";
import "../assets/css/navbar.css";

function MenuView() {
  return (
    <div class="container" className={{ flexGrow: 1 }}>
      <div class="header">
        <NavBar position="fixed" />
      </div>
      <div class="content">
        <MenuMain />
      </div>
    </div>
  );
}

export default MenuView;
