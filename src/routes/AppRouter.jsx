import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth,db } from "../config-firebase";
import { leerRegistros } from "../actions/actionsBD";
import PublicRouter from "./PublicRouter";

import MenuView from "../views/MenuView";
import CalendarView from "../views/CalendarView";
import BirthDaysView from "../views/BirthDaysView";
import ProfileView from "../components/Profile.jsx";
import LoginView from "../views/LoginView";
import RegisterUser from "../components/RegisterUser";
import PrivateRouter from "./PrivateRouter";
import { login } from "../actions/auth";
import AddBDView from "../views/AddBDView";


const AppRouter = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [log, setLog] = useState(false);

 const loadData = async (uid) => {
    const response = await db.collection(`${uid}/cumpleaños/personas`).get();
    const data = [];
  
    response.forEach((persona) => {
      const personaData = persona.data();
  
      data.push({
        id: persona.id,
        ...personaData,
      });
    });
  
    return data;
  };
  useEffect(() => {
  auth().onAuthStateChanged(async (user) => {
    if (user) {
      dispatch(login(user.uid, user.displayName));
      setLog(true);

      const personaData = await loadData(user.uid);

      dispatch(leerRegistros(personaData));
    } else {
      setLog(false);
    }
    setLoading(false)
  });
}, [dispatch]);
  return (
    <Router>
      <Switch>
        <PublicRouter
          exact
          path="/login"
          component={LoginView}
          log={log}
          loading={loading}
        />
        <PublicRouter
          exact
          path="/register"
          component={RegisterUser}
          log={log}
          loading={loading}
        />
        <PublicRouter
          exact
          path="/addBirthday/:uid"
          component={AddBDView}
          log={false}
          loading={loading}
        />

        <PrivateRouter exact path="/" log={log} loading={loading} component={MenuView} />
        <PrivateRouter exact path="/perfil" log={log} loading={loading} component={ProfileView} />
        <PrivateRouter exact path="/calendario" log={log} loading={loading} component={CalendarView} />
        <PrivateRouter exact path="/cumpleaños" log={log} loading={loading} component={BirthDaysView} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
