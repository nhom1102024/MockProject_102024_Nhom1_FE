import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";
import "../../assets/css/SideBar.css";

function SideBarAdmin() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    switch (e.key) {
      case "home":
        navigate("/");
        break;
      case "financial":
        // navigate("/page2");
        break;
      case "humanrsc":
        navigate("/employee");
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
      key: "financial",
      label: "Financial Management",
    },
    {
      key: "humanrsc",
      label: "Human Resources Management",
    },
    {
      key: "asset",
      label: "Asset Management",
      children: [
        {
          key: "g1",
          icon: <RightOutlined />,
          label: "Building Information",
        },
        {
          key: "g2",
          icon: <RightOutlined />,
          label: "Technical Systems",
        },
        {
          key: "g3",
          icon: <RightOutlined />,
          label: "Service Contracts",
        },
        {
          key: "g4",
          icon: <RightOutlined />,
          label: "Company Maintenance",
        },
      ],
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

export default SideBarAdmin;
