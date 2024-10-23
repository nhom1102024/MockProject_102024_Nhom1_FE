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
