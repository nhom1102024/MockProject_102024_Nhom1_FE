import ListEquipment from "../pages/staff/equipment/ListEquipment";
import AddEquipment from "../pages/staff/equipment/AddEquipment";
import EditEquipment from "../pages/staff/equipment/EditEquipment";
import ListApartment from "../pages/staff/apartment/ListApartment";
import AddMaintenanceRoom from "../pages/staff/apartment/AddMaintenanceRoom";
import EditMaintenanceRoom from "../pages/staff/apartment/EditMaintenanceRoom";
import ListService from "../pages/staff/services/ListService";
import AddService from "../pages/staff/services/AddService";
import EditService from "../pages/staff/services/EditService";
import Home from "../pages/home/Home";

export const adminRoutes = [
  { path: "/", component: Home },
  { path: "/staff/equipment", component: ListEquipment },
  { path: "/staff/equipment/add", component: AddEquipment },
  { path: "/staff/equipment/edit/:id", component: EditEquipment },
  { path: "/staff/apartment", component: ListApartment },
  { path: "/staff/apartment/add", component: AddMaintenanceRoom },
  { path: "/staff/apartment/edit/:id", component: EditMaintenanceRoom },
  { path: "/staff/services", component: ListService },
  { path: "/staff/services/add", component: AddService },
  { path: "/staff/services/edit/:id", component: EditService },
];
