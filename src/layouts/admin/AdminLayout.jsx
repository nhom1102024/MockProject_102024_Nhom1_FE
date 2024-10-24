import HeaderAdmin from "../../components/admin/Header";
import SideBarAdmin from "../../components/admin/SideBar";
import "../../assets/css/Layout.css";

const AdminLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <HeaderAdmin />
      <div className="body-wrapper">
        <SideBarAdmin />
        <div className="content-wrapper">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
