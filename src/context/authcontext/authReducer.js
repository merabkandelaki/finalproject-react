import { decodeToken, toggleLocalStorage } from "../../utils";
import authActions from "./authActions";

export const initialState = {
  isUserLoggedIn: false,
  user: {
    userName: "",
    email: "",
  },
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case authActions.logIn: {
      const { token } = payload;
      toggleLocalStorage(token);
      const userData = decodeToken(token);
      return {
        ...state,
        isUserLoggedIn: true,
        user: {
          userName: userData.userName,
          email: userData.email,
        },
      };
    }

    case authActions.logOut: {
      toggleLocalStorage();
      return {
        ...state,
        isUserLoggedIn: false,
        user: {
          userName: "",
          email: "",
        },
      };
    }

    default:
      return state;
  }
};
