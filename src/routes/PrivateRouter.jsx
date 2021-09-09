import React from "react";
import { Redirect, Route } from "react-router";
import LoadScreen from "../components/LoadScreen"

const PrivateRouter = ({ log, component: Component, ...resto }) => {
  return (
    <Route
      {...resto}
      component={(props) =>
        log ? <Component {...props}  logg={log}/> : <Redirect to="/login" logg={log} />
      }
    />
  );
};

export default PrivateRouter;
