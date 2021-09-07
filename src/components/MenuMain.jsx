import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import React, { useMemo, useState } from "react";
import NavBar from "./NavBar";
import Typography from "@material-ui/core/Typography";
import menuStyle from "../assets/jss/menuStyle";
import "date-fns";
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

  const [myEvents, setEvents] = React.useState([
    {
      start: "2021-09-06T08:00:00.000Z",
      end: "2021-09-09T17:00:00.000Z",
      title: "Business of Software Conference",
      color: "#ff6d42",
    },
    {
      start: "2021-09-04T12:00:00.000Z",
      end: "2021-09-05T20:00:00.000Z",
      title: "Friends binge marathon",
      color: "#7bde83",
    },
    {
      start: "2021-09-11T12:00:00.000Z",
      end: "2021-09-12T20:00:00.000Z",
      title: "Friends binge marathon",
      color: "#7bde83",
    },
    {
      start: "2021-09-02T06:00:00.000Z",
      end: "2021-09-02T07:00:00.000Z",
      title: "Product team mtg.",
      color: "#913aa7",
    },
    {
      start: "2021-09-02T13:00:00.000Z",
      end: "2021-09-02T14:00:00.000Z",
      title: "General orientation",
      color: "#35bb5a",
    },
  ]);

  const events = [
    {
      id: 1,
      color: "#fd3153",
      from: "2021-05-02T18:00:00+00:00",
      to: "2021-05-02T18:00:00+00:00",
      title: "This is an event",
    },
    {
      id: 2,
      color: "#1ccb9e",
      from: "2021-05-01T13:00:00+00:00",
      to: "2021-05-01T13:00:00+00:00",
      title: "This is another event",
    },
    {
      id: 3,
      color: "#3694DF",
      from: "2021-05-05T13:00:00+00:00",
      to: "2021-05-05T13:00:00+00:00",
      title: "This is also another event",
    },
    {
      id: 4,
      color: "#3694DF",
      from: "2021-05-05T13:00:00+00:00",
      to: "2021-05-05T13:00:00+00:00",
      title: "This is also another event",
    },
    {
      id: 5,
      color: "#3694DF",
      from: "2021-05-05T13:00:00+00:00",
      to: "2021-05-05T13:00:00+00:00",
      title: "This is also another event",
    },
    {
      id: 6,
      color: "#3694DF",
      from: "2021-05-05T13:00:00+00:00",
      to: "2021-05-05T13:00:00+00:00",
      title: "This is also another event",
    },
    {
      id: 7,
      color: "#3694DF",
      from: "2021-05-05T13:00:00+00:00",
      to: "2021-05-05T13:00:00+00:00",
      title: "This is also another event",
    },
  ];

  const view = useMemo(() => {
    return {
      calendar: { labels: true },
    };
  }, []);

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
                {/* <Grid item xs={12}>
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    locale="es"
                  />
                </Grid> */}
                <Grid item xs={12}>
                  <MuiPickersUtilsProvider utils={MomentUtils}>
                    <Grid container justifyContent="space-around">
                      <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date picker dialog"
                        format="L"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12}>
                  <Calendar 
                  events={events} />
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
