import Home from "../pages/home/Home";
import Dayoff from "../pages/home/Dayoff";
import MDayoff from "../pages/home/dayoff/Dayoff";

export const adminRoutes = [
  { path: "/admin", component: Home },
  { path: "/mdayoff", component: MDayoff },
];
