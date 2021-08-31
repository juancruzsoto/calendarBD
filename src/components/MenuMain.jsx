import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import React, { useState } from "react";
import NavBar from "./NavBar";
import Typography from "@material-ui/core/Typography";
import menuStyle from "../assets/jss/menuStyle";
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

const useStyles = makeStyles(menuStyle);

const MenuLogin = () => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const dispatch = useDispatch();

  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  };

  return (
    <div>
      <NavBar />
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={12} md={8}>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} variant="h4">
                ¡Agrega cumpleanos a tu Calendario!
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
                    <TextField
                      id="input-with-icon-grid"
                      label="Ingrese un Nombre"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                  </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12}>
                  <Link to="/pwrecovery">¿Has olvidado tu contraseña?</Link>
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
