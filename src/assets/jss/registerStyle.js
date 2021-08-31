const menuStyle = {
  root: {
    flexGrow: 1,
    textAlign: "center",
    minHeight: 400,
    width: "100%",
    marginTop: "60px",
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
