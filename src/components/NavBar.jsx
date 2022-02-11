import React, { useState } from "react";
import {  makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircle from "@material-ui/icons/AccountCircle";
// import NotificationsIcon from "@material-ui/icons/Notifications";
import FaceIcon from "@material-ui/icons/Face";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CakeIcon from "@material-ui/icons/Cake";
import { useDispatch } from "react-redux";
import { logout } from "../actions/auth";
import { limpiar } from "../actions/actionsBD";
import "../assets/css/navbar.css";
import {
  Button,
  ClickAwayListener,
  Fade,
  Icon,
  ListItemIcon,
  MenuList,
  Paper,
  Popper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const NavBar = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const [open, setOpen] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  const handleClose = (event) => {
    /*if (anchorRef.current && anchorRef.current.contains(event.target)) {
      //console.log(event.target);
      return;
    }
    console.log(anchorRef.current.contains(event.target));
    console.log(event.target);*/
    setOpen(false);
  };


  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    handleMenuClose();
    dispatch(logout());
    dispatch(limpiar());
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const handleToggle = (event) => {
    setOpen((prevOpen) => !prevOpen);
    setAnchorEl(event.currentTarget);
  };

  const handleToggleMobile = (event) => {
    setOpenMobile((prevOpen) => !prevOpen);
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <AppBar
        position="fixed"
        className={{ top: 0, left: 0, right: 0, zIndex: 0 }}
        style={{ flexGrow: 1, backgroundColor: "#546e7a" }}
      >
        <Toolbar
          className={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            className={classes.title}
            style={{ color: "#ff8f00", textShadow: "1px 1px 2px black" }}
            variant="h6"
            noWrap
            to="/"
            component={RouterLink}
          >
            Calendar Birth-Day
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {/* <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={1} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
            <Button
              to="/"
              component={RouterLink}
              classes={{ label: classes.itemButton }}
              color="inherit"
            >
              <Icon component={HomeIcon} />
              <Typography
                variant="caption"
                align="center"
                style={{ margin: "5px 0px 0px 5px" }}
              >
                Inicio
              </Typography>
            </Button>
            <Button
              to="/cumpleaños"
              component={RouterLink}
              classes={{ label: classes.itemButton }}
              color="inherit"
            >
              <Icon component={CakeIcon} />
              <Typography
                variant="caption"
                align="center"
                style={{ margin: "5px 0px 0px 5px" }}
              >
                Cumpleaños
              </Typography>
            </Button>
            <Button
              to="/calendario"
              component={RouterLink}
              classes={{ label: classes.itemButton }}
              color="inherit"
            >
              <Icon component={CalendarTodayIcon} />
              <Typography
                variant="caption"
                align="center"
                style={{ margin: "5px 0px 0px 5px" }}
              >
                Calendario
              </Typography>
            </Button>
            <IconButton
              edge="end"
              aria-label="account of current user"
              // aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleToggle}
              color="inherit"
            >
              <AccountCircle />
              <Typography
                variant="caption"
                align="center"
                style={{ margin: "5px 0px 0px 5px" }}
              >
                CUENTA
              </Typography>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              // aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleToggleMobile}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
          <Popper
            open={open}
            anchorEl={anchorEl}
            placement="bottom-end"
            style={{ zIndex: "1" }}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper className={classes.paper}>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem
                        className={classes.menu}
                        to="/perfil"
                        component={RouterLink}
                        onClick={handleClose}
                      >
                        <ListItemIcon>
                          <FaceIcon />
                        </ListItemIcon>
                        Perfil
                      </MenuItem>
                      <MenuItem className={classes.menu} onClick={handleLogOut}>
                        <ListItemIcon>
                          <ExitToAppIcon />
                        </ListItemIcon>
                        Cerrar Sesión
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Fade>
            )}
          </Popper>
          <Popper
            open={openMobile}
            anchorEl={anchorEl}
            placement="bottom-end"
            style={{ zIndex: "1" }}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper className={classes.paper}>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={openMobile}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <IconButton
                        edge="end"
                        aria-label="account of current user"
                        // aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleToggle}
                        color="inherit"
                      >
                        <AccountCircle />
                        <Typography
                          variant="caption"
                          align="center"
                          style={{ margin: "5px 0px 0px 5px" }}
                        >
                          CUENTA
                        </Typography>
                      </IconButton>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Fade>
            )}
          </Popper>
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu}
      {renderMenu} */}
    </>
  );
};

export default NavBar;
