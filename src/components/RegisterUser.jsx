import React, { useState } from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import NavBar from "./NavBar";
import Typography from "@material-ui/core/Typography";
import registerStyle from "../assets/jss/registerStyle";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { Link } from "react-router-dom";
import {
  Button,
  Divider,
  FormControl,
  Grid,
  InputAdornment,
  makeStyles,
  TextField,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import GoogleButton from "react-google-button";
import { useDispatch } from "react-redux";
import { register } from "../actions/auth";
import { googleLogin } from "../actions/auth";

const useStyles = makeStyles(registerStyle);

const RegisterUser = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [infoR, setInfoR] = useState({
    email: "",
    user: "",
    pass: "",
    passR: "",
  });
  const { email, user, pass, passR } = infoR;

  const handleChange = (e) => {
    const value = e.target.value;

    setInfoR({
      ...infoR,
      [e.target.name]: value,
    });
  };

  const handleRegister = (e) => {
    console.log(infoR);

    e.preventDefault();

    if (email.trim() === "" || !email.trim().includes("@")) {
      return;
    }

    if (user.trim().length < 2) {
      return;
    }

    if (pass.trim().length < 6) {
      return;
    } else {
      if (pass.trim() !== passR.trim()) {
        return;
      }
    }

    dispatch(register(email, pass, user));
  };

  return (
    <div>
      <NavBar />
      <Grid container spacing={6} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={12} md={8}>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} variant="h4">
                Registrarse
              </Typography>
              <Divider />
              <Grid
                container
                spacing={3}
                justifyContent="center"
                alignItems="center"
                className={classes.container}
              >
                <Grid item xs={12}>
                  <FormControl className={classes.margin}>
                    <InputLabel
                      htmlFor="input-with-icon-adornment"
                      placeholder="Ingrese correo"
                    >
                      Correo electrónico
                    </InputLabel>
                    <Input
                      value={email}
                      id="input-with-icon-adornment1"
                      name="email"
                      onChange={handleChange}
                      startAdornment={
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl className={classes.margin}>
                    <InputLabel
                      htmlFor="input-with-icon-adornment"
                      placeholder="Ingrese correo"
                    >
                      Usuario
                    </InputLabel>
                    <Input
                       value={user}
                       id="input-with-icon-adornment2"
                       name="user"
                       onChange={handleChange}
                      startAdornment={
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl className={classes.margin}>
                    <InputLabel
                      htmlFor="input-with-icon-adornment"
                      placeholder="Ingrese correo"
                    >
                      Contraseña
                    </InputLabel>
                    <Input
                       value={pass}
                       id="input-with-icon-adornment3"
                       name="pass"
                       onChange={handleChange}
                      type="password"
                      startAdornment={
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl className={classes.margin}>
                    <InputLabel
                      htmlFor="input-with-icon-adornment"
                      placeholder="Ingrese contraseña"
                    >
                      Repetir Contraseña
                    </InputLabel>
                    <Input
                       value={passR}
                       id="input-with-icon-adornment4"
                       name="passR"
                       onChange={handleChange}
                      type="password"
                      startAdornment={
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    size="medium"
                    variant="contained"
                    className={classes.button}
                    onClick={handleRegister}
                    // disabled={
                    //   (values.email === "" && values.password === "") ||
                    //   Object.keys(formErrors).length > 0
                    // }
                  >
                    Registrarse
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
              </Grid>
              <Grid
                container
                spacing={2}
                direction="columns"
                justifyContent="center"
                alignItems="flex-start"
              >
                <Grid item xs={12}>
                  <Link to="/login">¿Ya estas registrado? Iniciar Sesión</Link>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default RegisterUser;
