import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import React from "react";
import calendarStyle from "../assets/jss/calendarStyle.js";
import "date-fns";
// import { Link } from "react-router-dom";
import { Grid, makeStyles } from "@material-ui/core";
import Calendar from "react-awesome-calendar";
import "../assets/css/calendar.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const useStyles = makeStyles(calendarStyle);

const CalendarBD = (props) => {
  const classes = useStyles();
  // const dispatch = useDispatch();
  const [events, setEvents] = useState([]);

  const data = useSelector((state) => state.storeBD.data);

  useEffect(() => {
    console.log(data);
    let currentYear = new Date().getFullYear() - 1;
    console.log(currentYear);
    let event = [];
    for (var i = 0; i < 3; i++) {
      // eslint-disable-next-line
      data.map((person) => {
        if (person.fecha.seconds) {
          var t = new Date(1970, 0, 1); // Epoch
          t.setSeconds(person.fecha.seconds);
          t.setYear(currentYear);
        } else {
          t = person.fecha;
          t.setYear(currentYear);
        }
        event.push({
          id: person.id,
          color: "#fd3153",
          from: t.toISOString(),
          to: t.toISOString(),
          title: `Cumpleaños de ${person.nombre}`,
        });
      });
      currentYear++
    }
    console.log(event);
    setEvents(event);
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={10}>
          <Card className={classes.card}>
            <CardContent style={{fontSize:15}}>
              <Calendar events={events} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default CalendarBD;
