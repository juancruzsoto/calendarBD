import React from "react";
import { Redirect, Route } from "react-router";
import LoadScreen from "../components/LoadScreen";

const PublicRouter = ({ log, loading, component: Component, ...resto }) => {
  console.log(log, "loggg");
  return (
    <Route
      {...resto}
      component={(props) =>
        log ? <Redirect to="/" /> : (loading ? <LoadScreen/> :<Component {...props} />)
      }
    />
  );
};

export default PublicRouter;
