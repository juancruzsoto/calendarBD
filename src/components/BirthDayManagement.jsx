import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import birthdaysStyle from "../assets/jss/birthdaysStyle";
import "date-fns";
import Skeleton from "@material-ui/lab/Skeleton";
import MomentUtils from "@date-io/moment";
// import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import LinkIcon from "@material-ui/icons/Link";
import { auth } from "../config-firebase";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { crearRegistro, borrarRegistro } from "../actions/actionsBD";
import {
  Backdrop,
  IconButton,
  makeStyles,
  Modal,
  Paper,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
// import "../assets/css/calendar.css";

const useStyles = makeStyles(birthdaysStyle);

const BirthDayManagement = (props) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [pickerStatus, setPickerStatus] = useState(false);
  const [modalLink, setModalLink] = useState(false);
  const dispatch = useDispatch();

  const theme = useTheme();
  const screen = useMediaQuery(theme.breakpoints.up("md"));
  const heightList = useMediaQuery(theme.breakpoints.up("sm"));
  const token = useSelector((state) => state.auth.uid);

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

    setEvents(event);
  }, [data]);

  const handleDateChange = (date) => {
    setSelectedDate(date.toDate());
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddBirthDay = (event) => {
    dispatch(crearRegistro(name, selectedDate));
  };

  const copyLink = () => {
    var content = document.getElementById("component-disabled");

    content.select();
    document.execCommand("copy");
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        className={classes.container}
      >
        <Grid item xs={11} sm={11} lg={8}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title} variant="h4">
                ¡Agrega cumpleaños a tu Calendario!
                {
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    onClick={() => setModalLink(true)}
                    style={{
                      cursor: "pointer",
                      float: "right",
                      marginTop: "5px",
                      width: "20px",
                    }}
                  >
                    <LinkIcon />
                  </IconButton>
                }
              </Typography>

              <Grid
                container
                spacing={3}
                justifyContent="center"
                alignItems="center"
                className={classes.container}
              >
                <Grid item xs={12} sm={6} md={4}>
                  <FormControl
                    className={classes.margin}
                    fullWidth={!heightList}
                  >
                    <InputLabel>Nombre</InputLabel>
                    <Input
                      id="nombre"
                      placeholder="Ingrese aquí"
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
                <Grid item xs={12} sm={6} md={4}>
                  <MuiPickersUtilsProvider utils={MomentUtils}>
                    <Grid container justifyContent="space-around">
                      <KeyboardDatePicker
                        fullWidth={!heightList}
                        margin="normal"
                        id="date-picker-dialog"
                        label="Ingrese fecha de nacimiento"
                        format="ll"
                        value={selectedDate}
                        onChange={handleDateChange}
                        onClick={() => setPickerStatus(true)}
                        onClose={() => setPickerStatus(false)}
                        open={pickerStatus}
                        InputProps={{ readOnly: true }}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
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
              <Grid
                container
                spacing={3}
                justifyContent="center"
                alignItems="flex-end"
              >
                <Grid item xs={12}>
                  <Card
                    className={classes.card2}
                    // style={{ marginTop: "0px", backgroundColor: "" }}
                  >
                    <CardContent>
                      <Grid
                        container
                        spacing={3}
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <List
                          className={classes.listclass}
                          style={{ maxHeight: !heightList && "30vh" }}
                        >
                          {events.length > 0 &&
                            events.map((event, index) => {
                              return (
                                <div key={index}>
                                  <ListItem>
                                    <Grid
                                      spacing={3}
                                      container
                                      direction="row"
                                      justifyContent="center"
                                      alignItems="center"
                                    >
                                      <Grid item xs={12} md={4}>
                                        <Grid
                                          container
                                          direction="row"
                                          justifyContent="flex-start"
                                          alignItems="center"
                                        >
                                          <Grid item xs={5} sm={1.5} md={5}>
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
                                            />
                                          </Grid>
                                          <Grid item xs={6} sm={3} md={6}>
                                            <ListItemText
                                              primary={
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
                                        </Grid>
                                      </Grid>
                                      <Grid item xs={12} md={4}>
                                        <Grid
                                          container
                                          direction="row"
                                          justifyContent="flex-start"
                                          alignItems="center"
                                        >
                                          <Grid item xs={5} sm={1.5} md={5}>
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
                                                  Cumpleaños:
                                                </Typography>
                                              }
                                            />
                                          </Grid>
                                          <Grid item xs={6} sm={3} md={6}>
                                            <ListItemText
                                              primary={
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
                                        </Grid>
                                      </Grid>
                                      <Grid
                                        item
                                        xs={12}
                                        md={4}
                                        style={{
                                          display: "flex",
                                          flexFlow: "column",
                                          justifyContent: "space-around",
                                          height: "14vh",
                                        }}
                                      >
                                        <Grid
                                          spacing={2}
                                          container
                                          direction="row"
                                          justifyContent="center"
                                          alignItems="center"
                                        >
                                          <Grid item xs={12} md={5}>
                                            <Button
                                              variant="contained"
                                              className={classes.buttonedit}
                                              startIcon={<EditIcon />}
                                              fullWidth={!screen}
                                            >
                                              Editar
                                            </Button>
                                          </Grid>
                                          <Grid item xs={12} md={5}>
                                            <Button
                                              variant="contained"
                                              onClick={() => {
                                                dispatch(
                                                  borrarRegistro(event.id)
                                                );
                                              }}
                                              className={classes.buttondelete}
                                              startIcon={<DeleteIcon />}
                                              fullWidth={!screen}
                                            >
                                              Eliminar
                                            </Button>
                                          </Grid>
                                        </Grid>
                                      </Grid>
                                    </Grid>
                                  </ListItem>
                                  <Divider style={{ marginTop: "13px" }} />
                                </div>
                              );
                            })}
                        </List>
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
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Modal
          open={modalLink}
          onClose={() => setModalLink(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          style={{
            padding: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
          }}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Paper
            variant="outlined"
            style={{
              position: "absolute",
              minWidth: 600,
              padding: "20px",
              backgroundColor: "#e0e0e0",
            }}
          >
            <Grid
              container
              spacing={3}
              direction="column"
              // justifyContent="center"
              // alignItems="center"
            >
              {/* <Grid item xs={4}>
                    <Icon
                      component={CheckIcon}
                      style={{ fontSize: 100,color:"#61b146" }}
                    />
                  </Grid> */}
              <Grid item xs={12}>
                <Typography gutterBottom variant="h6">
                  {
                    <IconButton
                      aria-label="upload picture"
                      disabled={true}
                      size="small"
                      component="span"
                      style={{
                        cursor: "pointer",
                        float: "left",
                        marginRight: "10px",
                        color: "white",
                        backgroundColor: "#4285f4",
                        // width: "20px",
                      }}
                    >
                      <LinkIcon />
                    </IconButton>
                  }
                  Obtener Enlace
                </Typography>
              </Grid>
              <Grid
                container
                spacing={3}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={12} md={9}>
                  <Input
                    id="component-disabled"
                    fullWidth={true}
                    value={`https://cbirthday.herokuapp.com/addbirthday/${token}`}
                  />
                </Grid>
                {console.log(auth())}
                <Grid item xs={12} md={3}>
                  <Button
                    fullWidth={true}
                    onClick={copyLink}
                    style={{ color: "#4285f4" }}
                  >
                    Copiar Enlace
                  </Button>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  spacing={3}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item xs={12} md={8}>
                    <Typography
                      variant="body2"
                      style={{
                        color: "#4285f4",
                        textShadow: "0.1px 0.1px black",
                      }}
                    >
                      ¡Comparte este enlace para que puedan agregar cumpleaños a
                      tu Calendario!
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Button
                      fullWidth={true}
                      size="medium"
                      variant="contained"
                      onClick={() => setModalLink(false)}
                      style={{ background: "#61b146" }}
                    >
                      Hecho
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Modal>
      </Grid>
    </div>
  );
};

export default BirthDayManagement;
