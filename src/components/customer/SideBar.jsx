import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import "../../assets/css/SideBar.css";
import { RightOutlined } from "@ant-design/icons";

function SideBarCustomer() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    switch (e.key) {
      case "home":
        navigate("/");
        break;
      case "financial":
        // navigate("/page2");
        break;
      case "contract":
        navigate("/contract");
        break;
      case "holiday":
        navigate("/holiday");
        break;
      case "view-fines-list":
        navigate("/view-fines-list");
        break;
      case "register-utilities":
        navigate("/register-utilities");
        break;
      default:
        break;
    }
  };

  const items = [
    {
      key: "home",
      label: "Home Page",
    },
    {
      key: "personal",
      label: "Personal information",
    },
    {
      key: "contract",
      label: "Contract",
    },
    {
      key: "request",
      label: "Request a maintenance",
    },
    {
      key: "register",
      label: "Register utilities",
    },
    {
      key: "pay",
      label: "Pay",
      children: [
        {
          key: "g1",
          // icon: <RightOutlined />,
          label: "Service Contact",
          children: [
            {
              key: "view-fines-list",
              // icon: <RightOutlined />,
              label: "View Fines List",
            },
          ],
        },
      ],
    },
    {
      key: "notify",
      label: "Notification",
    },
    {
      key: "holiday",
      label: "Holiday",
    },
    {
      key: "logout",
      label: "Log out",
    },
  ];
  return (
    <div className="sidebar">
      <Menu
        onClick={handleClick}
        className="sidebar-menu"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </div>
  );
}

export default SideBarCustomer;
