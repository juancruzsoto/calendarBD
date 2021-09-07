import background from "../img/bg-bd.jpg";

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
    background: "#fce4ec",  
    position: "absoute",
    content: "",
    opacity: 0.97,
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
    color: "#78909c",
    fontFamily: "Century Gothic",
    fontWeight: 550,
  },
  media: {
    height: 250,
  },
  button: {
    backgroundColor: "#78909c",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "greenDark",
      color:"#78909c",
      borderColor: "green",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "green",
      borderColor: "greenLight",
    },
    "&:focus": {
      boxShadow: "greenLight",
    },
    margin: {
      margin: "20px",
    },
  },
};

export default registerStyle;
