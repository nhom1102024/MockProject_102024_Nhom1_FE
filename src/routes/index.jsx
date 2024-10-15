import ListEmployee from "../pages/employee/ListEmployee";
import Home from "../pages/home/Home";

export const adminRoutes = [
  { path: "/", component: Home },
  { path: "/employee", component: ListEmployee },
];
