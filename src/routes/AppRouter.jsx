import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import MenuMain from "../components/MenuMain";
import MenuLogin from "../components/MenuLogin";
import RegisterUser from "../components/RegisterUser";
import PrivateRouter from "./PrivateRouter";

import { login } from "../actions/auth";
import { firebase } from "../config-firebase";
import PublicRouter from "./PublicRouter";

const AppRouter = () => {
  const dispatch = useDispatch();

  const [log, setLog] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(login(user.uid, user.displayName));
        setLog(true);
      } else {
        setLog(false);
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <PublicRouter exact path="/login" component={MenuLogin} log={log} />
        <PublicRouter
          exact
          path="/register"
          component={RegisterUser}
          log={log}
        />
        <PrivateRouter exact path="/" log={log} component={MenuMain} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
