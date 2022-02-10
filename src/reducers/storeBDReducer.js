import { types } from "../types";

const initialState = {
  data: [],
};

export const storeBDReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.personaAdd:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case types.personaRead:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state; 
  }
};
