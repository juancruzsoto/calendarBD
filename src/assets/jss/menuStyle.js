import background from "../img/bg-bd.jpg";

const menuStyle = {
  root: {
    flexGrow: 1,
    textAlign: "center",
    width: "100%",
    overflow: "hidden",
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
    color: "#f03030",
    fontWeight: 400,
  },
  media: {
    height: 250,
  },
  button: {
    backgroundColor: "green",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "greenDark",
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

export default menuStyle;
