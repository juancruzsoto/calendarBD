import { db } from "../config-firebase";
import { auth } from "../config-firebase";

export const crearRegistro = (name, date) => {
  return async (dispatch, getState) => {
    const uid = auth().currentUser.uid;

    const datos = {
      nombre: name,
      fecha: date,
    };

    const referencia = await db
      .collection(`${uid}/cumpleaños/personas`)
      .add(datos);
    console.log(referencia);
  };
};
