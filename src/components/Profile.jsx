import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import React, { useEffect, useMemo, useState } from "react";
import NavBar from "./NavBar";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import profileStyle from "../assets/jss/profileStyle.js";
import "date-fns";
import { auth } from "../config-firebase";
import DateFnsUtils from "@date-io/date-fns";
import MomentUtils from "@date-io/moment";
// import { Link } from "react-router-dom";
import {
  Button,
  Divider,
  FormControl,
  Grid,
  InputAdornment,
  makeStyles,
  TextField,
} from "@material-ui/core";
import Calendar from "react-awesome-calendar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import GoogleButton from "react-google-button";
import { useDispatch } from "react-redux";
import { googleLogin } from "../actions/auth";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { useSelector } from "react-redux";

const useStyles = makeStyles(profileStyle);

const Profile = (props) => {
  const state = useSelector((state) => state);
  const [userData, setUserData] = useState({ nombre: "", email: "" });
  const { loading } = props;
  console.log(loading, "esaa", auth().currentUser);
  const classes = useStyles();

  const dispatch = useDispatch();

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
        <Grid item xs={12} md={11}>
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
                <Grid item md={4} xs={12}>
                  <Grid item xs={12}>
                    <Avatar
                      alt="Remy Sharp"
                      src={auth().currentUser.photoURL}
                      style={{ width: "300px", height: "300px" }}
                    />
                  </Grid>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Grid item xs={12}>
                    <Grid container justifyContent="left" alignItems="left">
                      <Grid item sm={6} xs={12}>
                        <Typography
                          align="left"
                          variant="h5"
                          style={{ textShadow: "1px 1px 2 px #ff8f00" }}
                        >
                          Nombre y Apellido:
                        </Typography>
                      </Grid>
                      <Grid item sm={6} xs={12}>
                        <Typography
                          align="left"
                          variant="h5"
                         
                        >
                          Email:
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction="row"
                      justifyContent="left"
                      alignItems="left"
                    >
                      <Grid item sm={6} xs={12}>
                        <Typography align="left" variant="h6">
                          {auth().currentUser.displayName}
                        </Typography>
                      </Grid>
                      <Grid item sm={6} xs={12}>
                        <Typography align="left" variant="h6">
                          {auth().currentUser.email}
                        </Typography>
                      </Grid>
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
