import React, { useState } from "react";
import { Provider } from "react-redux";
import AppRouter from "./routes/AppRouter";
import { store } from "./store/store";
import { auth } from "./config-firebase";

function App() {
  const [loading, setLoading] = useState(true);
  const [log, setLog] = useState(false);

  auth().onAuthStateChanged(async (user) => {
    if (user) {
      setLog(true);
    } else {
      setLog(false);
    }
    setLoading(false)
  });

  return (
    <Provider store={store}>
      {console.log(log,"logapp")}
      <AppRouter log={log} loading={loading}/>
    </Provider>
  );
}

export default App;
