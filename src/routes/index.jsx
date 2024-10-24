import AddEmployee from "../pages/admin/employee/AddEmployee";
import EditEmployee from "../pages/admin/employee/EditEmployee";
import ListEmployee from "../pages/admin/employee/ListEmployee";
import Addcontract from "../pages/customer/contract/AddContract";
import ContractDetail from "../pages/customer/contract/ContractDetail";
import Editcontract from "../pages/customer/contract/EditContract";
import ViewContracts from "../pages/customer/contract/ViewContracts";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AcceptMaintenanceRequest from "../pages/staff/schedule/AcceptMaintenanceRequest";
import ListMaintenance from "../pages/staff/schedule/ListMaintenance";
import ViewSchedule from "../pages/staff/schedule/ViewSchedule";

export const authenticateRoutes = [
  { path: "/", component: Login },
  { path: "/register", component: Register },
];

export const adminRoutes = [
  { path: "/", component: Home },
  { path: "/employee", component: ListEmployee },
  { path: "/employee/add", component: AddEmployee },
  { path: "/employee/edit/:id", component: EditEmployee },
];

export const customerRoutes = [
  { path: "/", component: Home },
  { path: "/contract", component: ViewContracts },
  { path: "/contract/detail/:id", component: ContractDetail },
  { path: "/contract/add", component: Addcontract },
  { path: "/contract/edit/:id", component: Editcontract },
];

export const staffRoutes = [
  { path: "/", component: Home },
  { path: "/schedule", component: ListMaintenance },
  { path: "/schedule/view", component: ViewSchedule },
  { path: "/schedule/:id", component: AcceptMaintenanceRequest },
];
