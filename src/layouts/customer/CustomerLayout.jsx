import HeaderCustomer from "../../components/customer/Header";
import SideBarCustomer from "../../components/customer/SideBar";
import "../../assets/css/Layout.css";

const CustomerLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <HeaderCustomer />
      <div className="body-wrapper">
        <SideBarCustomer />
        <div className="content-wrapper">{children}</div>
      </div>
    </div>
  );
};

export default CustomerLayout;
