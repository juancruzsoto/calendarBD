import React from "react";
import TelegramCfg from "../components/TelegramCfg.jsx";
import "../assets/css/navbar.css";
import NavBar from "../components/NavBar.jsx";

function TelegramView() {
  //   const [displayName, setDisplayName] = useState("");
  //   const { uid } = useParams();

  //   useEffect(() => {
  //     db.collection(`${uid}/cumpleaños/profile`)
  //       .get()
  //       .then((response) => {
  //         console.log(response);
  //         response.forEach((persona) => {
  //           setDisplayName(persona.data().nombre);
  //         });
  //       });
  //     // eslint-disable-next-line
  //   }, []);

  return (
    <div class="container">
      <div class="header">
        <NavBar />
      </div>
      <div class="content">
        <TelegramCfg  />
      </div>
    </div>
  );
}

export default TelegramView;
