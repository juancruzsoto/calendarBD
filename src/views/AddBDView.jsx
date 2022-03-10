import React, { useState } from "react";
import AddBirthday from "../components/AddBirthday.jsx";
import "../assets/css/navbar.css";
import { useParams } from "react-router-dom";
import { db } from "../config-firebase.js";
import { useEffect } from "react";

function AddBDView() {
  const [displayName, setDisplayName] = useState("");
  const { uid } = useParams();

  useEffect(() => {
    db.collection(`${uid}/cumpleaños/profile`)
      .get()
      .then((response) => {
        console.log(response);
        response.forEach((persona) => {
          setDisplayName(persona.data().nombre);
        });
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div class="container">
      <div class="content">
        <AddBirthday uid={uid} displayName={displayName} />
      </div>
    </div>
  );
}

export default AddBDView;
