import React, { createContext, useContext, useEffect, useReducer } from "react";
import { authReducer, initialState } from "./authReducer";
import actionCreators from "./authActionCreators";
import { validateToken } from "../../utils";

const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const token = localStorage.getItem("access token");
    if (token && validateToken(token)) {
      dispatch(actionCreators.logIn({ token }));
    }
  }, []);
  return (
    <authContext.Provider value={{ state, dispatch }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(authContext);
  if (context) {
    return context;
  }
  throw new Error("auth context error");
};

export default AuthContextProvider;
