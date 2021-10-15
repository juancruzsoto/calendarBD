import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import LoadScreen from "../components/LoadScreen";
import MenuView from "../views/MenuView";
import Profile from "../components/Profile.jsx";
import LoginView from "../views/LoginView";
import RegisterUser from "../components/RegisterUser";
import PrivateRouter from "./PrivateRouter";

import { login } from "../actions/auth";
import { auth } from "../config-firebase";
import PublicRouter from "./PublicRouter";

const AppRouter = (props) => {
  const dispatch = useDispatch();

  const {log,loading} = props;

  return (
    <Router>
      <Switch>
        {console.log(log, "asada")}
        <PublicRouter
          exact
          path="/login"
          component={LoginView}
          log={log}
          loading={loading}
        />
        <PublicRouter
          exact
          path="/register"
          component={RegisterUser}
          log={log}
          loading={loading}
        />
        <PrivateRouter exact path="/" log={log} loading={loading} component={MenuView} />
        <PrivateRouter exact path="/perfil" log={log} loading={loading} component={Profile} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
