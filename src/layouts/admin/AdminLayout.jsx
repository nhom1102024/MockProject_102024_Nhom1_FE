// import { Breadcrumb, Layout, Menu, theme } from "antd";
import HeaderAdmin from "../../components/admin/header/Header";
import "./AdminLayout.css";
import SideBarAdmin from "../../components/admin/sidebar/SideBar";
import ContentAdmin from "../../components/admin/content/Content";
// const { Header, Content, Sider } = Layout;

// eslint-disable-next-line react/prop-types
const AdminLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <HeaderAdmin />
      <div className="body-wrapper">
        <SideBarAdmin />
        <div className="content-wrapper">
          <ContentAdmin>{children}</ContentAdmin>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
