import React from "react";
import MenuLogin from "../components/MenuLogin";
import RegisterUser from "../components/RegisterUser";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const AuthRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={MenuLogin} />
        <Route exact path="/register" component={RegisterUser} />
      </Switch>
    </Router>
  );
};

export default AuthRouter;
