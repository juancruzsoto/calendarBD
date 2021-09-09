import React from "react";
import { Redirect, Route } from "react-router";
import LoadScreen from "../components/LoadScreen";

const PublicRouter = ({ log, component: Component, ...resto }) => {
  return (
    <Route
      {...resto}
      render={(props) => {
        // if (log) return <LoadScreen />;
        return <>{log ? <Redirect to="/" /> : <Component {...props} />}</>;
      }}
      // component={(props) =>
      //   log ? <Redirect to="/" /> : <Component {...props} />
      // }
    />
  );
};

export default PublicRouter;
