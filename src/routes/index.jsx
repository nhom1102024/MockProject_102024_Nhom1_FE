import Home from "../pages/home/Home";
import ListEmployeeContract from "../pages/Contract/ListEmployeeContract";
import EditContract from "../pages/Contract/EditContract";
import AddContract from "../pages/Contract/AddContract";
import RentAnApartment from "../pages/rentanapartment/RentAnApartment";
import CustomerHome from "../pages/customerhome/CustomerHome";
import ViewFinesList from "../pages/fines/ViewFinesList";
import FineDetail from "../pages/fines/FineDetail";

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
  { path: "/view-fines-list", element: <ViewFinesList />, role: "customer" },
  { path: "/fine-detail/:id", element: <FineDetail />, role: "customer" },
];
