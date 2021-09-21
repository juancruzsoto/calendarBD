import React from "react";
import { Redirect, Route } from "react-router";
import LoadScreen from "../components/LoadScreen"

const PrivateRouter = ({ log, component: Component, ...resto }) => {
  
  console.log(log,"loggg")
  return (
    <Route
      {...resto}
      component={(props) =>
        log ? <Component {...props}  log={log}/> : <Redirect to="/login" log={log} />
      }
    />
  );
};

export default PrivateRouter;
