import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import React from "react";
import Typography from "@material-ui/core/Typography";
import menuStyle from "../assets/jss/menuStyle";
import "date-fns";
import imgTelegram from "../assets/img/telegram.png";
import imgBirthday from "../assets/img/birthday.png";
import imgCalendar from "../assets/img/calendar.png";
import { Link as RouterLink } from "react-router-dom";
// import { Link } from "react-router-dom";
import { CardMedia, Grid, makeStyles } from "@material-ui/core";
import Grow from "@material-ui/core/Grow";
import { auth } from "../config-firebase";
// import "../assets/css/calendar.css";

const useStyles = makeStyles(menuStyle);

const MenuMain = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="flex-start"
        className={classes.container}
      >
        <Grow in={true}>
          <Grid item xs={12}>
            <Typography className={classes.titlemain} variant="h2">
              ¡Bienvenid@ {auth().currentUser.displayName}!
            </Typography>
          </Grid>
        </Grow>
        <Grow
          in={true}
          style={{ transformOrigin: "0 0 0" }}
          {...(true ? { timeout: 1000 } : {})}
        >
          <Grid item xs={12} sm={9.5} md={6} lg={4}>
            <Card
              className={classes.rootCard}
              to="/cumpleaños"
              component={RouterLink}
            >
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography variant="h5" className={classes.title}>
                    ¡Agrega y edita tus cumpleaños!
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    style={{ marginTop: "10px" }}
                  >
                    En esta sección puedes agregar nuevos cumpleaños o modificar
                    los que ya cargaste previamente
                  </Typography>
                </CardContent>
              </div>
              <CardMedia
                className={classes.cover}
                image={imgBirthday}
                title="Birthdays"
              />
            </Card>
          </Grid>
        </Grow>
        <Grow
          in={true}
          style={{ transformOrigin: "0 0 0" }}
          {...(true ? { timeout: 2000 } : {})}
        >
          <Grid item xs={12} sm={9.5} md={6} lg={4}>
            <Card
              className={classes.rootCard}
              to="/calendario"
              component={RouterLink}
            >
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography variant="h5" className={classes.title}>
                    ¡Observa el Calendario!
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    style={{ marginTop: "10px" }}
                  >
                    En esta sección podras acceder al Calendario y visualizar
                    los proximos cumpleaños!
                  </Typography>
                </CardContent>
              </div>
              <CardMedia
                className={classes.cover}
                image={imgCalendar}
                title="Calendar"
              />
            </Card>
          </Grid>
        </Grow>
        <Grow
          in={true}
          style={{ transformOrigin: "0 0 0" }}
          {...(true ? { timeout: 2500 } : {})}
        >
          <Grid item xs={12} sm={9.5} md={6} lg={4}> 
            <Card
              className={classes.rootCard}
              to="/telegram"
              component={RouterLink}
            >
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography variant="h5" className={classes.title}>
                    ¡Configura el Bot de Telegram!
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    style={{ marginTop: "10px" }}
                  >
                    En esta sección podras modificar la configuracción del los
                    mensajes recibidos por el bot de Telegram
                  </Typography>
                </CardContent>
              </div>
              <CardMedia
                className={classes.cover}
                image={imgTelegram}
                title="Telegram"
              />
            </Card>
          </Grid>
        </Grow>
      </Grid>
    </div>
  );
};

export default MenuMain;
