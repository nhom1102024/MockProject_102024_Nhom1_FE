import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";
import "../../assets/css/SideBar.css";

function SideBarStaff() {
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
        // navigate("/contract");
        break;
      case "schedule":
        navigate("/schedule");
        break;
      case "equipment": {
        navigate("/staff/equipment");
        break;
      }
      case "building": {
        navigate("/staff/apartment");
        break;
      }
      case "service": {
        navigate("/staff/services");
        break;
      }
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
      label: "Personal Profile",
    },
    {
      key: "financial",
      label: "Financial Management",
    },
    {
      key: "asset",
      label: "Asset Management",
      children: [
        {
          key: "building",
          icon: <RightOutlined />,
          label: "Building Information",
        },
        {
          key: "technical",
          icon: <RightOutlined />,
          label: "Technical Systems",
          children: [
            {
              key: "equipment",
              icon: <RightOutlined />,
              label: "System List",
            },
            {
              key: "service",
              icon: <RightOutlined />,
              label: "Service Systems",
            },
          ],
        },
        {
          key: "contract",
          icon: <RightOutlined />,
          label: "Service Contracts",
        },
        {
          key: "maintenance",
          icon: <RightOutlined />,
          label: "Maintenance Management",
          children: [
            {
              key: "service",
              icon: <RightOutlined />,
              label: "Maintenance Service",
            },
            {
              key: "schedule",
              icon: <RightOutlined />,
              label: "Maintenance Schedule",
            },
            {
              key: "complaint",
              icon: <RightOutlined />,
              label: "Complaint list",
            },
          ],
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

export default SideBarStaff;
