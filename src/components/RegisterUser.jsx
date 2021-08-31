import React from "react";
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
import { googleLogin } from "../actions/auth";

const useStyles = makeStyles(registerStyle);

const RegisterUser = () => {
  const classes = useStyles();

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
                      id="input-with-icon-adornment"
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
                      id="input-with-icon-adornment"
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
                      id="input-with-icon-adornment"
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
                      id="input-with-icon-adornment"
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
