import { db } from "../config-firebase";
import { auth } from "../config-firebase";
import { types } from "../types";

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
    
      const id = await referencia.id;

      const newData = {
        ...datos,
        id,
      };
  
      dispatch(crear(newData));
  };
};

export const crear = (data) => {
  return {
    type: types.personaAdd,
    payload: data,
  };
};

export const leerRegistros = (data) => {
  return {
    type: types.personaRead,
    payload: data,
  };
};