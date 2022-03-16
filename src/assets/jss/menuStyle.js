import background from "../img/mainmenu2.jpg";
import menuCard from "../img/menuCard2.png";

const menuStyle = {
  root: {
    flexGrow: 1,
    textAlign: "center",
    minHeight: "100vh",
    width: "100%",
    height: "auto",
    overflow: "hidden",
    backgroundSize: "100vw 100vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundAttachment: "fixed",
    position: "relative",
    backgroundImage: `url(${background})`,
  },
  card: {
    minHeight: 400,
    textAlign: "center",
    width: "100%",
    marginTop: "30px",
    background: "#9e9e9e",
    position: "absoute",
    content: "",
    opacity: 0.9,
  },
  card2: {
    minHeight: 400,
    textAlign: "center",
    width: "100%",
    marginTop: "30px",
    background: "#9e9e9e",
    position: "absoute",
    content: "",
    opacity: 0.9,
  },
  menucard: {
    backgroundColor: "#333333",
  },
  container: {
    padding: "15px",
  },
  // content: {
  //   height: 100,
  //   paddingBottom: "2rem",
  // },

  titlemain: {
    color: "#263238",
    fontFamily: "Century Gothic",
    fontWeight: 550,
    marginTop: "80px",
  },
  title: {
      color: "black",
      textDecoration: "none",
      "&:hover":{
        color:"white"
      }
      
  },
  media: {
    height: 250,
  },
  button: {
    backgroundColor: "#ff8f00",
    textShadow: "0px 0px 0px black",
    color: "#263238",
    "&:hover": {
      // backgroundColor: "greenDark",
      // borderColor: "green",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      // backgroundColor: "green",
      // borderColor: "greenLight",
    },
    "&:focus": {
      // boxShadow: "greenLight",
    },
    margin: {
      margin: "20px",
    },
  },
  rootCard: {
    display: "flex",
    marginTop: "50px",
    opacity: 0.9,
    width: "100%",
    height: "400",
    overflow: "hidden",
    backgroundSize: "100vw 100vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    position: "relative",
    backgroundImage: `url(${menuCard})`,
    textDecoration: "none",
  },
  details: {
    display: "flex",
    width:"150%",
    flexDirection: "column",
  },
  content: {
    minHeight: 260,
    paddingBottom: "2rem",
  },
  cover: {
    width: 550,
  },
  controls: {
    display: "flex",
    alignItems: "center",
  },
};

export default menuStyle;
