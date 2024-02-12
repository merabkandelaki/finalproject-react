import { jwtDecode } from "jwt-decode";

export const decodeToken = (token) => {
  return jwtDecode(token);
};

export const toggleLocalStorage = (token) => {
  if (token) {
    localStorage.setItem("access token", token);
  } else {
    localStorage.removeItem("access token");
  }
};

export const validateToken = (token) => {
  const userData = decodeToken(token);
  const currentDate = Date.now() / 1000;
  return currentDate < userData.exp;
};
