import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import React, { useMemo, useState } from "react";
import Typography from "@material-ui/core/Typography";
import birthdaysStyle from "../assets/jss/birthdaysStyle";
import "date-fns";
import MomentUtils from "@date-io/moment";
// import { Link } from "react-router-dom";
import {
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  TextField,
} from "@material-ui/core";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import { useDispatch } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { crearRegistro } from "../actions/actionsBD";
import { auth } from "../config-firebase";
// import "../assets/css/calendar.css";

const useStyles = makeStyles(birthdaysStyle);

const BirthDayManagement = (props) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dispatch = useDispatch();

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

  const view = useMemo(() => {
    return {
      calendar: { labels: true },
    };
  }, []);

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
                <Grid item xs={4}>
                  <FormControl className={classes.margin}>
                    <InputLabel >Nombre</InputLabel>
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
                <Grid item xs={4}>
                  <MuiPickersUtilsProvider utils={MomentUtils}>
                    <Grid container justifyContent="space-around">
                      <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Ingrese fecha de nacimiento"
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
                <Grid item xs={4}>
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
              <Card className={classes.card2} style={{ marginTop: "0px" }}>
                <CardContent>
                  <Divider />
                  <Grid
                    container
                    spacing={3}
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="flex-start"
                  >
                    <Grid item xs={12}>
                      <List>
                        <ListItem>
                          <Grid item xs={4}>
                            <ListItemText
                              primary="Nombre:"
                              secondary="Ruperta"
                            />
                          </Grid>
                          <Grid item xs={4}>
                            <ListItemText
                              variant="h6"
                              primary="Cumpleaños"
                              secondary="20-12-1999"
                            />
                          </Grid>
                          <Grid item xs={4}>
                            <ListItemSecondaryAction>
                              <IconButton edge="end" aria-label="edit ">
                                <EditIcon />
                              </IconButton>
                              <IconButton edge="end" aria-label="delete">
                                <DeleteIcon />
                              </IconButton>
                            </ListItemSecondaryAction>
                          </Grid>
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                  <Divider />
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
