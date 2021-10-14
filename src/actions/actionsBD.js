import { db } from "../config-firebase";
import { auth } from "../config-firebase";

export const crearRegistro = () => {
  return async (dispatch, getState) => {
    const uid = auth().currentUser.uid

    const datos = {
      nombre: "Fabri Totora",
      fecha: new Date(),
    };

    const referencia = await db.collection(`${uid}/cumpleaños/personas`).add(datos);
    console.log(referencia)
  };
};
