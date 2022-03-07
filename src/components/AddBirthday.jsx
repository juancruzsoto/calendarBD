import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import birthdaysStyle from "../assets/jss/birthdaysStyle";
import "date-fns";
import MomentUtils from "@date-io/moment";
// import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import Icon from "@material-ui/core/Icon";
import InputLabel from "@material-ui/core/InputLabel";
import { useDispatch } from "react-redux";
import CheckIcon from '@material-ui/icons/Check';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import {crearRegistroExt } from "../actions/actionsBD";
import { Backdrop, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
// import "../assets/css/calendar.css";

const useStyles = makeStyles(birthdaysStyle);

const BirthDayManagement = (props) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [pickerStatus, setPickerStatus] = useState(false)
  const [modalConfirmation, setModalConfirmation] = useState(false);
  
  // const {uid} = props;

  const theme = useTheme();
  const screen = useMediaQuery(theme.breakpoints.up('sm'))
  const dispatch = useDispatch();


  const handleDateChange = (date) => {
    setSelectedDate(date.toDate());
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddBirthDay = () => {
    dispatch(crearRegistroExt(name, selectedDate,props.uid));
    setModalConfirmation(true)
    document.getElementById("nombre").value = ""
  };


// useEffect(() => {
//   signInWithCustomToken(auth, uid)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     console.log(user,userCredential)
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorCode,errorMessage)
//     // ...
//   });
//   // eslint-disable-next-line
// }, [])



  return (
    <div className={classes.root}>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={11} md={8}>
          <Card className={classes.card3}>
            <CardContent>
              <Typography className={classes.title} variant="h4">
                ¡Agrega tu cumpleaños al calendario! 
              </Typography>
              <Grid
                container
                spacing={3}
                justifyContent="center"
                alignItems="center"
                className={classes.container}
              >
                <Grid item xs={12} md={7}>
                  <FormControl className={classes.margin} fullWidth={!screen} >
                    <InputLabel >Nombre</InputLabel>
                    <Input
                      id="nombre"
                      onChange={handleNameChange}
                      autoComplete="off"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MuiPickersUtilsProvider utils={MomentUtils} >
                    <Grid container justifyContent="space-around" >
                      <KeyboardDatePicker
                      fullWidth={!screen}
                      className={classes.margin}
                        margin="normal"
                        id="date-picker-dialog"
                        label="Ingrese fecha de nacimiento"
                        format="ll"
                        value={selectedDate}
                        onChange={handleDateChange}
                        InputProps={{ readOnly: true }}
                        onClick={() => setPickerStatus(true)}
                        onClose={() => setPickerStatus(false)}
                        open={pickerStatus}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    size="large"
                    variant="contained"
                    onClick={handleAddBirthDay}
                    className={classes.button}
                  >
                    Agregar
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
            <Modal
              open={modalConfirmation}
              onClose={() => setModalConfirmation(false)}
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
                  maxWidth: 400,
                  padding: "20px",
                  backgroundColor: "#e0e0e0",
                }}
              >
                <Grid
                  container
                  spacing={2}
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={4}>
                    <Icon
                      component={CheckIcon}
                      style={{ fontSize: 100,color:"#61b146" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography gutterBottom align="center" variant="h4">
                     Operación Exitosa
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography gutterBottom align="center" variant="body1">
                      Tu cumpleaños ha sido agregado a la lista de manera correcta.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Button
                      fullWidth={true}
                      size="medium"
                      variant="contained"
                      onClick={() => setModalConfirmation(false)}
                      style={{background:"#61b146" }}

                    >
                      Aceptar
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Modal>
          </Grid>
      </Grid>
    </div>
  );
};

export default BirthDayManagement;
