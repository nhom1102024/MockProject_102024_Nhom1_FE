import HeaderStaff from "../../components/staff/Header";
import SideBarStaff from "../../components/staff/SideBar";
import "../../assets/css/Layout.css";

const StaffLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <HeaderStaff />
      <div className="body-wrapper">
        <SideBarStaff />
        <div className="content-wrapper">{children}</div>
      </div>
    </div>
  );
};

export default StaffLayout;
