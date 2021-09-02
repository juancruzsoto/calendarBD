import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import NavBar from "./NavBar";
import Typography from "@material-ui/core/Typography";
import menuStyle from "../assets/jss/menuStyle";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MonthlyBody,
  MonthlyCalendar,
  MonthlyNav,
  DefaultMonthlyEventItem,
} from "@zach.codes/react-calendar";
import toast from "@mobiscroll/react-lite";
import Eventcalendar from "@mobiscroll/react-lite";
import localeEs from "@mobiscroll/react-lite";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
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

  const onEventClick = useCallback((event) => {
    toast({
      message: event.event.title,
    });
  }, []);

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
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justifyContent="space-around">
                      <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date picker dialog"
                        format="dd/MM/yyyy"
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
                  {/* <Eventcalendar
                    locale={localeEs}
                    theme="ios"
                    themeVariant="light"
                    clickToCreate={false}
                    dragToCreate={false}
                    dragToMove={false}
                    dragToResize={false}
                    height={697}
                    data={myEvents}
                    view={view}
                    onEventClick={onEventClick}
                  /> */}
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
