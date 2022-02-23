import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import birthdaysStyle from "../assets/jss/birthdaysStyle";
import "date-fns";
import Skeleton from "@material-ui/lab/Skeleton";
import MomentUtils from "@date-io/moment";
// import { Link } from "react-router-dom";
import {
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { crearRegistro, borrarRegistro } from "../actions/actionsBD";
// import "../assets/css/calendar.css";

const useStyles = makeStyles(birthdaysStyle);

const BirthDayManagement = (props) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dispatch = useDispatch();

  const data = useSelector((state) => state.storeBD.data);

  useEffect(() => {
    let event = [];
    // eslint-disable-next-line
    data.map((person) => {
      if (person.fecha.seconds) {
        var t = new Date(1970, 0, 1); // Epoch
        t.setSeconds(person.fecha.seconds);
      } else {
        t = person.fecha;
      }
      event.push({
        id: person.id,
        nombre: person.nombre,
        birthday: t.toLocaleDateString(),
      });
    });

    console.log(event);
    setEvents(event);
  }, [data]);

  const handleDateChange = (date) => {
    setSelectedDate(date.toDate());
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddBirthDay = (event) => {
    console.log(name);
    console.log(selectedDate);
    dispatch(crearRegistro(name, selectedDate));
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={12} md={8}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title} variant="h4">
                ¡Agrega cumpleaños a tu Calendario!
              </Typography>
              <Grid
                container
                spacing={3}
                justifyContent="center"
                alignItems="center"
                className={classes.container}
              >
                <Grid item xs={12} sm={6} lg={4}>
                  <FormControl className={classes.margin}>
                    <InputLabel>Nombre</InputLabel>
                    <Input
                      id="nombre"
                      onChange={handleNameChange}
                      autoComplete="off"
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
                <Grid item xs={12} sm={6} lg={4}>
                  <MuiPickersUtilsProvider utils={MomentUtils}>
                    <Grid container justifyContent="space-around">
                      <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Ingrese fecha de nacimiento"
                        format="ll"
                        value={selectedDate}
                        onChange={handleDateChange}
                        InputProps={{ readOnly: true }}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <Button
                    type="submit"
                    size="medium"
                    variant="contained"
                    onClick={handleAddBirthDay}
                    className={classes.button}

                    // onClick={handleEmailLogin}
                    // disabled={
                    //   (values.email === "" && values.password === "") ||
                    //   Object.keys(formErrors).length > 0
                    // }
                  >
                    Agregar
                  </Button>
                </Grid>
              </Grid>
              <Card
                className={classes.card2}
                style={{ marginTop: "0px", backgroundColor: "" }}
              >
                <CardContent>
                  <Divider />
                  <Grid
                    container
                    spacing={3}
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="flex-start"
                    // className={classes.container}
                  >
                    {console.log(events, "events")}
                    {events.length > 0 &&
                      events.map((event) => {
                        return (
                          <Grid item xs={12}>
                            <List className={classes.listclass}>
                              <ListItem>
                                <Grid
                                  container
                                  spacing={3}
                                  direction="row"
                                  justifyContent="space-evenly"
                                  alignItems="flex-start"
                                  // className={classes.container}
                                >
                                  <Grid item xs={12} sm={4}>
                                    <ListItemText
                                      primary={
                                        <Typography
                                          variant="body1"
                                          style={{
                                            color: "#ff8f00",
                                            textShadow:
                                              "0.5px 0.5px 0.5px black",
                                          }}
                                        >
                                          Nombre:
                                        </Typography>
                                      }
                                      secondary={
                                        <Typography
                                          variant="body2"
                                          style={{
                                            color: "black",
                                            textShadow:
                                              "0.01px 0.01px 0.01px black",
                                          }}
                                        >
                                          {event.nombre}
                                        </Typography>
                                      }
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={4}>
                                    <ListItemText
                                      variant="h6"
                                      primary={
                                        <Typography
                                          variant="body1"
                                          style={{
                                            color: "#ff8f00",
                                            textShadow:
                                              "0.5px 0.5px 0.5px black",
                                          }}
                                        >
                                          Cumpleaños:
                                        </Typography>
                                      }
                                      secondary={
                                        <Typography
                                          variant="body2"
                                          style={{
                                            color: "black",
                                            textShadow:
                                              "0.01px 0.01px 0.01px black",
                                          }}
                                        >
                                          {event.birthday}
                                        </Typography>
                                      }
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={4}>
                                    <ListItemSecondaryAction>
                                      <Button
                                        variant="contained"
                                        // value={search ? [
                                        //   row.data.price,
                                        //   row.data.time,
                                        //   row.data.healthScore,
                                        // ] : [
                                        //   row.pricePerServing,
                                        //   row.readyInMinutes,
                                        //   row.healthScore,
                                        // ]}
                                        className={classes.buttonedit}
                                        startIcon={<EditIcon />}
                                      >
                                        Editar
                                      </Button>
                                      <Button
                                        variant="contained"
                                        onClick={() => {
                                          dispatch(borrarRegistro(event.id));
                                        }}
                                        //la variable es para abrir el modal
                                        className={classes.buttondelete}
                                        startIcon={<DeleteIcon />}
                                      >
                                        Eliminar
                                      </Button>
                                    </ListItemSecondaryAction>
                                  </Grid>
                                </Grid>
                              </ListItem>
                            </List>
                            <Divider />
                          </Grid>
                        );
                      })}
                    {events.length === 0 &&
                      [1, 2, 3].map(() => {
                        return (
                          <Grid item xs={12}>
                            <List className={classes.listclass}>
                              <ListItem>
                                <Grid
                                  container
                                  spacing={3}
                                  direction="row"
                                  justifyContent="space-evenly"
                                  alignItems="flex-start"
                                  // className={classes.container}
                                >
                                  <Grid item sm={12} md={4}>
                                    <Typography
                                      component="div"
                                      key="h3"
                                      variant="h3"
                                    >
                                      <Skeleton />
                                    </Typography>
                                  </Grid>
                                  <Grid item sm={12} md={4}>
                                    <Typography
                                      component="div"
                                      key="h3"
                                      variant="h3"
                                    >
                                      <Skeleton />
                                    </Typography>
                                  </Grid>
                                  <Grid item sm={12} md={4}>
                                    <Typography
                                      component="div"
                                      key="h3"
                                      variant="h3"
                                    >
                                      <Skeleton />
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </ListItem>
                            </List>
                            <Divider />
                          </Grid>
                        );
                      })}
                  </Grid>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default BirthDayManagement;
