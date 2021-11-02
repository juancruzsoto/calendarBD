import background from "../img/bg-bd4.jpg";

const registerStyle = {
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
    minHeight: 400,
    textAlign: "center",
    width: "100%",
    marginTop: "60px",
    background: "#9e9e9e",  
    position: "absoute",
    content: "",
    opacity: 0.90,
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
      color:"#ff8f00",
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

export default registerStyle;
