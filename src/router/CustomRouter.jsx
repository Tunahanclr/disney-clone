import Notfound from "../pages/notFound/notfound";
import Landing from "../pages/LandingPage/Landing";
import Login from "../pages/login/login";
import Signup from "../pages/Signup/Signup";
import Home from "../pages/home/Home";
import ForgotPassword from "../pages/login/ForgotPassword";

export const CustomRouter = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
  {
    path:'/forgot-password',
    element:<ForgotPassword/>
  }
];
