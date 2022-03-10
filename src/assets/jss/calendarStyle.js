import background from "../img/mainmenu2.jpg";

const calendarStyle = {
  root: {
    flexGrow: 1,
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    textAlign: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundAttachment: "fixed",
    position: "relative",
    backgroundImage: `url(${background})`,
  },
  card: {
    maxHeight: 640,
    textAlign: "center",
    width: "100%",
    marginTop: "65px",
    // overflow: "auto",
    background: "#9e9e9e",
    position: "absoute",
    content: "",
    opacity: 0.9,
    ".modeButtonActive": { color: "#ff8f00" },
    ".modeButton:hover": { color: "#ff8f00", textShadow: "1px 1px 2px black" },
    ".calendarHeaderButtons": { color: "#ff8f00" },
    button: { textShadow: "0px 1px 0px black" },
    ".weekRow": { maxHeight: "75px" },
    ".currentDay": {
      borderRadius: "50%",
      color: "white",
      backgroundColor: "#ff8f00",
    },
  },
  card2: {
    minHeight: 400,
    color: "#ff8f00",
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
  content: {
    height: 100,
    paddingBottom: "2rem",
  },
  titlemain: {
    color: "#263238",
    fontFamily: "Century Gothic",
    fontWeight: 550,
    marginTop: "80px",
  },
  title: {
    color: "#ff8f00",
    fontFamily: "Century Gothic",
    textShadow: "1px 1px 2px black",
    fontWeight: 550,
  },
  media: {
    height: 250,
  },
  button: {
    backgroundColor: "#ff8f00",
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
  calendar: {
    ".modeButtonActive": { color: "#ff8f00" },
    ".modeButton:hover": { color: "#ff8f00", textShadow: "1px 1px 2px black" },
    ".calendarHeaderButtons": { color: "#ff8f00" },
    button: { textShadow: "0px 1px 0px black" },
    ".weekRow": { maxHeight: "75px" },
    ".currentDay": {
      borderRadius: "50%",
      color: "white",
      backgroundColor: "#ff8f00",
    },
  },
};

export default calendarStyle;
