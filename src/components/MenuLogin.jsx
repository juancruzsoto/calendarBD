import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import React, { useState } from "react";
import NavBar from "./NavBar";
import Typography from "@material-ui/core/Typography";
import menuStyle from "../assets/jss/menuStyle";
import { Link } from "react-router-dom";
import {
  Button,
  Divider,
  FormControl,
  Grid,
  InputAdornment,
  makeStyles,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import GoogleButton from "react-google-button";
import { useDispatch } from "react-redux";
import { emailAndPasswordLogin, googleLogin } from "../actions/auth";

const useStyles = makeStyles(menuStyle);

const MenuLogin = () => {
  const classes = useStyles();

  const [data, setData] = useState({
    email: "",
    pass: "",
  });

  const { email, pass } = data;

  const handleChange = (e) => {
    const value = e.target.value;

    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const dispatch = useDispatch();


  const handleEmailLogin = (e) => {
    e.preventDefault();

    if (email.trim() === "" || !email.trim().includes("@")) {
      return;
    }

    if (pass.trim().length < 6) {
      return;
    }

    dispatch(emailAndPasswordLogin(email, pass));
  };

  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  };

  return (
    <div>
      <NavBar />
      <Grid container spacing={6} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={12} md={8}>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} variant="h4">
                Iniciar Sesión
              </Typography>
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
                      Correo Eléctronico
                    </InputLabel>
                    <Input
                    onChange={handleChange}
                    value={email}
                    name="email"
                      id="input-with-icon-adornment1"
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
                      Contraseña
                    </InputLabel>
                    <Input
                      onChange={handleChange}
                      value={pass}
                      name="pass"
                        id="input-with-icon-adornment2"
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
                    onClick={handleEmailLogin}
                    // disabled={
                    //   (values.email === "" && values.password === "") ||
                    //   Object.keys(formErrors).length > 0
                    // }
                  >
                    Iniciar Sesión
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Link to="/pwrecovery">¿Has olvidado tu contraseña?</Link>
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
                <Grid item xs={1.5}>
                  <GoogleButton onClick={handleGoogleLogin} />
                </Grid>
                <Grid item xs={12}>
                  <form>
                    <Link to="/register">Registrarse en la plataforma</Link>
                  </form>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default MenuLogin;
