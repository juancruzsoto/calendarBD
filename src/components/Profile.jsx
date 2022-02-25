import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import React from "react";
import NavBar from "./NavBar";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import profileStyle from "../assets/jss/profileStyle.js";
import "date-fns";
import { auth } from "../config-firebase";
// import { Link } from "react-router-dom";
import { Button, Divider, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(profileStyle);

const Profile = (props) => {
  const { loading } = props;
  console.log(loading, "esaa", auth().currentUser);
  const classes = useStyles();

  // useEffect(() => {
  //   auth()
  //     .currentUser.getIdTokenResult()
  //     .then((user) => {
  //       console.log(user);
  //     })
  //     .catch((e) => console.log("Error en User data: Datos de auth"));
  // }, []);

  return (
    <div className={classes.root}>
      <NavBar position="sticky" />
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={11} md={11}>
          <Card className={classes.card}>
            <CardContent>
              <Typography
                style={{ textAlign: "center" }}
                className={classes.title}
                variant="h2"
              >
                Perfil
              </Typography>
              <Divider />
              <Grid
                container
                spacing={3}
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                className={classes.container}
              >
                <Grid item  xs={12} md={4} lg={4}>
                  <Grid item xs={12}>
                    <Avatar
                      alt="Remy Sharp"
                      src={auth().currentUser.photoURL}
                      style={{ width: "300px", height: "300px" }}
                    />
                  </Grid>
                </Grid>
                <Grid item  xs={12} md={6} lg={4}>
                  <Grid container spacing={3} direction="column" justifyContent="flex-start" alignItems="center">
                    <Grid item xs={12}>
                      <Typography
                        align="left"
                        variant="h5"
                        style={{ textShadow: "1px 1px 2 px #ff8f00" }}
                      >
                        Nombre y Apellido:
                      </Typography>
                      <Typography align="left" variant="h6">
                          {auth().currentUser.displayName}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography align="left" variant="h5">
                        Email:
                      </Typography>
                      <Typography align="left" variant="h6">
                          {auth().currentUser.email}
                        </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Divider />
              <Grid item xs={12}>
                <Button
                  type="submit"
                  size="medium"
                  variant="contained"
                  className={classes.button}
                >
                  Editar Perfil
                </Button>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
