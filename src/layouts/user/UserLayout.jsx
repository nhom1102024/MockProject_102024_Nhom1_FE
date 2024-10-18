import { Breadcrumb, Layout, Menu, theme } from "antd";
import "./UserLayout.css";
import HeaderUser from "../../components/user/header/Header";
import SideBarUser from "../../components/user/sidebar/SideBar";
import ContentUser from "../../components/user/content/Content";
const { Header, Content, Sider } = Layout;

const UserLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <HeaderUser />
      <div className="body-wrapper">
        <SideBarUser />
        <div className="content-wrapper">
          <ContentUser>{children}</ContentUser>
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
