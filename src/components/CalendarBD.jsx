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
    let event = [];
    // eslint-disable-next-line
    data.map((person) => {
      if (person.fecha.seconds) {
        var t = new Date(1970, 0, 1); // Epoch
        t.setSeconds(person.fecha.seconds);
        t.setYear(2022);
       console.log(t.getFullYear())
      } else {
        t = person.fecha;
      }
      event.push({
        id: person.id,
        color: "#fd3153",
        from: t.toISOString(),
        to: t.toISOString(),
        title: `Cumpleaños de ${person.nombre}`,
      });
    });
    console.log(event);
    setEvents(event);
    // eslint-disable-next-line
  }, []);

  // const event = [
  //   {
  //     id: 1,
  //     color: "#fd3153",
  //     from: "2021-09-02T18:00:00+00:00",
  //     to: "2021-09-02T18:00:00+00:00",
  //     title: "This is an event",
  //   },
  //   {
  //     id: 2,
  //     color: "#1ccb9e",
  //     from: "2021-09-01T13:00:00+00:00",
  //     to: "2021-09-01T13:00:00+00:00",
  //     title: "This is another event",
  //   },
  //   {
  //     id: 3,
  //     color: "#3694DF",
  //     from: "2021-09T13:00:00+00:00",
  //     to: "2021-09T13:00:00+00:00",
  //     title: "This is also another event",
  //   },
  //   {
  //     id: 4,
  //     color: "#3694DF",
  //     from: "2021-09T13:00:00+00:00",
  //     to: "2021-09T13:00:00+00:00",
  //     title: "This is also another event",
  //   },
  // ];

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={12} md={10}>
          <Card className={classes.card}>
            <CardContent>
              <Calendar events={events} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default CalendarBD;
