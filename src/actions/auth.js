import { db, firebase, googleAuthProvider } from "../config-firebase";
import { types } from "../types";

export const googleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(async({ user }) => {
         await db
          .collection(`${user.uid}/cumpleaños/profile`)
          .add({nombre: user.displayName});
        dispatch(login(user.uid, user.displayName));
      })
      .catch(() => {});
  };
};

export const register = (email, password, username) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: username });
        await db
          .collection(`${user.uid}/cumpleaños/profile`)
          .add({nombre: user.displayName});
        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) => {
        console.log(e);
        return alert("¡Hubo un error en el registro del usuario!");
      });
  };
};

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};

export const emailAndPasswordLogin = (email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      })
      .catch(() => {
        return alert("Correo y/o contraseña no válida");
      });
  };
};

export const logout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();

    dispatch({
      type: types.logout,
    });
  };
};
