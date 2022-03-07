import React from "react";
import AddBirthday from "../components/AddBirthday.jsx";
import "../assets/css/navbar.css";
import { useParams } from "react-router-dom";

function AddBDView() {
  const { uid } = useParams();

  return (
    <div class="container">
      <div class="content">
        <AddBirthday uid={uid}/>
      </div>
    </div>
  );
}

export default AddBDView;