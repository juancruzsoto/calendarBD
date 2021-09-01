import React from "react";
import MenuLogin from "../components/MenuLogin";
import MenuMain from "../components/MenuMain";
import RegisterUser from "../components/RegisterUser";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const AuthRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={MenuLogin} />
        <Route exact path="/register" component={RegisterUser} />
        <Route exact path="/" component={MenuMain} />
      </Switch>
    </Router>
  );
};

export default AuthRouter;
