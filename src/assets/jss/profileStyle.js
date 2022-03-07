import background from "../img/mainmenu2.jpg";

const menuStyle = {
  root: {
    flexGrow: 1,
    textAlign: "center",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    backgroundSize: "100vw 100vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundAttachment: "fixed",
    position: "relative",
    backgroundImage: `url(${background})`,
  },
  card: {
    maxHeight: 550,
    textAlign: "center",
    marginTop: "100px",
    background: "#9e9e9e",
    overflow: "auto",
    opacity: 1.9,
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
    padding: "20px",
    marginTop: "20px",
  },
  content: {
    height: 100,
    paddingBottom: "2rem",
  },
  titlemain: {
    color: "#263238",
    fontFamily: "Century Gothic",
    fontWeight: 550,
    marginTop: "100px",
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
    marginTop: "10px",
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
};

export default menuStyle;
