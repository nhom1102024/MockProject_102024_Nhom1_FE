// import { Breadcrumb, Layout, Menu, theme } from "antd";
import HeaderCustomer from "../../components/customer/header/Header";
import "./CustomerLayout.css";
import SideBarCustomer from "../../components/customer/sidebar/SideBar";
import ContentCustomer from "../../components/customer/content/Content";
// const { Header, Content, Sider } = Layout;

// eslint-disable-next-line react/prop-types
const CustomerLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <HeaderCustomer />
      <div className="body-wrapper">
        <SideBarCustomer />
        <div className="content-wrapper">
          <ContentCustomer>{children}</ContentCustomer>
        </div>
      </div>
    </div>
  );
};

export default CustomerLayout;
