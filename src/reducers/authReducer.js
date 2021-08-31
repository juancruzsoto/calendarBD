import { types } from "../types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return action.payload;
    case types.logout:
      return {};
    default:
      return state;
  }
};
