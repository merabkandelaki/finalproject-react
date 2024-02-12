import authActions from "./authActions";

function logIn(payload) {
  return {
    type: authActions.logIn,
    payload,
  };
}

function logOut(payload) {
  return {
    type: authActions.logOut,
    payload,
  };
}

const actionCreators = {
  logIn,
  logOut,
};

export default actionCreators;
