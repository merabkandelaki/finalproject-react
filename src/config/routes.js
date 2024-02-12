import AuthGuard from "../Guard/AuthGuard";
import { HOME, LOGIN, REGISTER } from "../constants/routes";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import NotFound from "../pages/not-found/index";

const routes = [
  {
    path: HOME,
    Component: Home,
    Guard: AuthGuard,
  },
  {
    path: LOGIN,
    Component: SignIn,
  },
  {
    path: REGISTER,
    Component: SignUp,
  },
  {
    path: "*",
    Component: NotFound,
  },
];

export default routes;
