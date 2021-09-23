import React from "react";
import { Redirect, Route } from "react-router";
import LoadScreen from "../components/LoadScreen"

const PrivateRouter = ({ log, loading, component: Component, ...resto }) => {
  
  return (
    <Route
      {...resto}
      component={(props) =>
        log ? <Component {...props}/> : (loading ? <LoadScreen/> : <Redirect to="/login"/>)
      }
    />
  );
};

export default PrivateRouter;
