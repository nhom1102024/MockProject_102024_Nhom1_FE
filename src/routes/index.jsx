import AddEmployee from "../pages/admin/employee/AddEmployee";
import EditEmployee from "../pages/admin/employee/EditEmployee";
import ListEmployee from "../pages/admin/employee/ListEmployee";
import Addcontract from "../pages/customer/contract/AddContract";
import ContractDetail from "../pages/customer/contract/ContractDetail";
import Editcontract from "../pages/customer/contract/EditContract";
import ViewContracts from "../pages/customer/contract/ViewContracts";
import Home from "../pages/home/Home";

export const adminRoutes = [
  { path: "/", component: Home },
  { path: "/employee", component: ListEmployee },
  { path: "/employee/add", component: AddEmployee },
  { path: "/employee/edit/:id", component: EditEmployee },
];

export const publicRoutes = [
  { path: "/", component: Home },
  { path: "/contract", component: ViewContracts },
  { path: "/contract/detail/:id", component: ContractDetail },
  { path: "/contract/add", component: Addcontract },
  { path: "/contract/edit/:id", component: Editcontract },
];
