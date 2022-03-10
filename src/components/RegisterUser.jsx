import React, { useState } from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import registerStyle from "../assets/jss/registerStyle";
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
import EmailIcon from "@material-ui/icons/Email";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import { useDispatch } from "react-redux";
import { register } from "../actions/auth";

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
    <div className={classes.root}>
      <Grid container spacing={6} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={12} md={8}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title} variant="h3">
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
                      htmlFor="input-with-icon-adornment1r"
                      placeholder="Ingrese correo"
                    >
                      Correo electrónico
                    </InputLabel>
                    <Input
                      value={email}
                      autoComplete="off"
                      id="input-with-icon-adornment1r"
                      name="email"
                      onChange={handleChange}
                      startAdornment={
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl className={classes.margin}>
                    <InputLabel
                      htmlFor="input-with-icon-adornment2r"
                      placeholder="Ingrese Nombre"
                    >
                    Nombre
                    </InputLabel>
                    <Input
                      value={user}
                      id="input-with-icon-adornment2r"
                      name="user"
                      autoComplete="off"
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
                      htmlFor="input-with-icon-adornment3r"
                      placeholder="Ingrese contraseña"
                    >
                      Contraseña
                    </InputLabel>
                    <Input
                      value={pass}
                      id="input-with-icon-adornment3r"
                      name="pass"
                      autoComplete="off"
                      onChange={handleChange}
                      type="password"
                      startAdornment={
                        <InputAdornment position="start">
                          <VpnKeyIcon />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl className={classes.margin}>
                    <InputLabel
                      htmlFor="input-with-icon-adornment4r"
                      placeholder="Repetir contraseña"
                    >
                      Repetir Contraseña
                    </InputLabel>
                    <Input
                      value={passR}
                      id="input-with-icon-adornment4r"
                      name="passR"
                      autoComplete="off"
                      onChange={handleChange}
                      type="password"
                      startAdornment={
                        <InputAdornment position="start">
                          <VpnKeyIcon />
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
                  <Link to="/login">
                    <Typography style={{ color: "#000000" }}>
                      ¿Ya estas registrado? Iniciar Sesión
                    </Typography>
                  </Link>
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
