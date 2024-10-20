import Home from "../pages/home/Home";
import Dayoff from "../pages/home/dayoff/Dayoff";
import Candidates from "../pages/home/candidates/candidates";

export const adminRoutes = [
  { path: "/admin", component: Home },
  { path: "/admin/dayoff", component: Dayoff },
  { path: "/admin/candidates", component: Candidates },
];
