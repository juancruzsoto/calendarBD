import React from "react";
import { Redirect, Route } from "react-router";
import LoadScreen from "../components/LoadScreen";

const PublicRouter = ({ log, component: Component, ...resto }) => {
  console.log(log, "loggg");
  return (
    <Route
      {...resto}
      component={(props) =>
        log ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRouter;
