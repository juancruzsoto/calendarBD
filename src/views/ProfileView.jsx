import React from "react";
import Profile from "../components/Profile";
import NavBar from "../components/NavBar";
import "../assets/css/navbar.css";

function ProfileView() {
  return (
    <div class="container">
      <div class="header">
        <NavBar/>
      </div>
      <div class="content">
        <Profile />
      </div>
    </div>
  );
}

export default ProfileView;
