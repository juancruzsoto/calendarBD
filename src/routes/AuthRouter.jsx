import React from "react";
import MenuLogin from "../components/MenuLogin";
import RegisterUser from "../components/RegisterUser";
import {Redirect, Switch, Route } from "react-router-dom";

const AuthRouter = () => {
  return (
      <Switch>
        <Route exact path="/login" component={MenuLogin} />
        <Route exact path="/register" component={RegisterUser} />

        <Redirect to="/auth/login" />
    </Switch>
  );
};

export default AuthRouter;
