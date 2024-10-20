import { Menu } from "antd";
import { RightOutlined } from "@ant-design/icons";
import "./SideBar.css";
import { useNavigate } from "react-router-dom";
function SideBarAdmin() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    console.log(e.key);
    switch (e.key) {
      case "home": {
        navigate("/");
        break;
      }
      case "financial": {
        // navigate('/')
        break;
      }
      case "technical": {
        navigate("/staff/equipment");
        break;
      }
      case "apartment": {
        navigate("/staff/apartment");
        break;
      }
      case "buildinfor": {
        navigate("/staff/building");
        break;
      }
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
          key: "building",
          icon: <RightOutlined />,
          label: "Building Management",
          children: [
            {
              key: "apartment",
              icon: <RightOutlined />,
              label: "Apartment Information",
            },
            {
              key: "buildinfor",
              icon: <RightOutlined />,
              label: "Building Information",
            },
          ],
        },
        {
          key: "technical",
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
        onClick={(e) => handleClick(e)}
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
