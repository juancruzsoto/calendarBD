import background from "../img/mainmenu2.jpg";

const menuStyle = {
  root: {
    flexGrow: 1,
    minHeight: 400,
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
};

export default menuStyle;
