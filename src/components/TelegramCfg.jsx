import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import telegramStyle from "../assets/jss/telegramStyle";
import "date-fns";
// import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import Icon from "@material-ui/core/Icon";

import CheckIcon from "@material-ui/icons/Check";

import {
  Backdrop,
  makeStyles,
} from "@material-ui/core";

import botimg from "../assets/img/cbirthdaybot.png";
import { auth, db } from "../config-firebase";

// import "../assets/css/calendar.css";

const useStyles = makeStyles(telegramStyle);

const BirthDayManagement = (props) => {
  const classes = useStyles();
  const [token, setToken] = useState("");
  const [modalConfirmation, setModalConfirmation] = useState(false);

  const uid = auth().currentUser.uid;

  const copyLink = (id) => {
    let content = document.getElementById(id);

    content.select();
    document.execCommand("copy");
  };

  useEffect(() => {
    db.collection(`${uid}/cumpleaños/telegram`)
      .get()
      .then((response) => {
        console.log(response);
        response.forEach((persona) => {
          setToken(persona.data().token);
        });
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={11} md={10}>
          <Card className={classes.card3}>
            <CardContent>
              <Typography className={classes.title} variant="h4">
                ¡Configura el bot de Telegram para recibir los recordatorios!
              </Typography>
              <Grid
                container
                spacing={3}
                direction="column"
                justifyContent="center"
                // alignItems="center"
                className={classes.container}
              >
                <Grid item xs={12}>
                  <Typography className={classes.titleSec} variant="h6">
                    1 - Buscar el bot en la aplicación de Telegram como
                    @cBirthdayBot
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <img
                    className={classes.img}
                    src={botimg}
                    alt={"cBirthdayBot"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.titleSec} variant="h6">
                    2 - Copie el siguiente comando y envie al bot de telegram:
                  </Typography>
                </Grid>
                <Grid item xs={12}>
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
                        value={`/connect_${uid}_${token}`}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <Button
                        fullWidth={true}
                        onClick={() => copyLink("component-disabled")}
                        style={{ color: "#4285f4" }}
                      >
                        Copiar Comando
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.titleSec} variant="h6">
                    3 - Una vez recibido la confirmación de la cuenta enlazada puede activar los recordatorios:
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    spacing={3}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid item xs={12} md={9}>
                      <Input
                        id="component-disabled-2"
                        fullWidth={true}
                        value={`/reminderON`}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <Button
                        fullWidth={true}
                        onClick={() => copyLink("component-disabled-2")}
                        style={{ color: "#4285f4" }}
                      >
                        Copiar Comando
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.titleSec} variant="h6">
                    Para consultar resto de comandos ingrese /help
                  </Typography>
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
                    style={{ fontSize: 100, color: "#61b146" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography gutterBottom align="center" variant="h4">
                    Operación Exitosa
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography gutterBottom align="center" variant="body1">
                    Tu cumpleaños ha sido agregado a la lista de manera correcta
                    al calendario de {props.displayName}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Button
                    fullWidth={true}
                    size="medium"
                    variant="contained"
                    onClick={() => setModalConfirmation(false)}
                    style={{ background: "#61b146" }}
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
