import { Menu } from "antd";
import { RightOutlined } from "@ant-design/icons";
import "./SideBar.css";
import { useNavigate } from "react-router-dom";
function SideBarAdmin() {
  const navigate = useNavigate();
  const items = [
    {
      key: "home",
      label: "Home Page",
      onClick: () => navigate("/"),
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
        {
          key: "dayoff",
          icon: <RightOutlined />,
          label: "Manage Dayoff",
          onClick: () => navigate("/dayoff"),
        },
      ],
    },
  ];
  return (
    <div className="sidebar">
      <Menu
        // onClick={onClick}
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
