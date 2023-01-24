import { AUTH_LOGIN } from "../actions/login&register";
export const loggedUser = (state = {}, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return state={...action.user};
    default:
      return state;
  }
};
