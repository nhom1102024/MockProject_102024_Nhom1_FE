import Home from "../pages/home/Home";
import ListEmployeeContract from "../pages/Contract/ListEmployeeContract";
import EditContract from "../pages/Contract/EditContract";
import AddContract from "../pages/Contract/AddContract";
import RentAnApartment from "../pages/rentanapartment/RentAnApartment";
import CustomerHome from "../pages/customerhome/CustomerHome";

export const adminRoutes = [
  { path: "/admin-home", element: <Home /> },
  { path: "/list-employee-contract", element: <ListEmployeeContract /> },
  { path: "/edit-contract/:id", element: <EditContract /> },
  { path: "/add-contract", element: <AddContract /> },
];

export const customerRoutes = [
  {
    path: "/home",
    element: <CustomerHome />,
    role: "customer",
  },
  { path: "/rent-anapartment", element: <RentAnApartment />, role: "customer" },
];
