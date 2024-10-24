import AddEmployee from "../pages/admin/employee/AddEmployee";
import EditEmployee from "../pages/admin/employee/EditEmployee";
import ListEmployee from "../pages/admin/employee/ListEmployee";
import Dayoff from "../pages/admin/dayoff/Dayoff";
import Addcontract from "../pages/customer/contract/AddContract";
import ContractDetail from "../pages/customer/contract/ContractDetail";
import Editcontract from "../pages/customer/contract/EditContract";
import ViewContracts from "../pages/customer/contract/ViewContracts";
import ViewHolidays from "../pages/customer/holiday/ViewHolidays";
import Home from "../pages/home/Home";
import Candidates from "../pages/admin/candidates/Candidates";
import ListEmployeeContract from "../pages/Contract/ListEmployeeContract";
import EditContract from "../pages/Contract/EditContract";
import AddContract from "../pages/Contract/AddContract";
import RentAnApartment from "../pages/rentanapartment/RentAnApartment";
import CustomerHome from "../pages/customerhome/CustomerHome";
import ViewFinesList from "../pages/fines/ViewFinesList";
import FineDetail from "../pages/fines/FineDetail";

export const adminRoutes = [
  { path: "/", component: Home },
  { path: "/employee", component: ListEmployee },
  { path: "/employee/add", component: AddEmployee },
  { path: "/employee/edit/:id", component: EditEmployee },
  { path: "/dayoff", component: Dayoff },
  { path: "/candidates", component: Candidates },
  { path: "/list-employee-contract", component: ListEmployeeContract },
  { path: "/edit-contract/:id", component: EditContract },
  { path: "/add-contract", component: AddContract },
];

export const publicRoutes = [
  { path: "/", component: CustomerHome },
  { path: "/contract", component: ViewContracts },
  { path: "/contract/detail/:id", component: ContractDetail },
  { path: "/contract/add", component: Addcontract },
  { path: "/contract/edit/:id", component: Editcontract },
  { path: "/holiday", component: ViewHolidays },
  { path: "/rent-anapartment", component: RentAnApartment },
  { path: "/view-fines-list", component: ViewFinesList },
  { path: "/fine-detail/:id", component: FineDetail },
];
