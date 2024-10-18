import { Menu } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./SideBar.css";

function SideBarAdmin() {
  const navigate = useNavigate(); // Khởi tạo navigate

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
          key: "service-contracts",
          icon: <RightOutlined />,
          label: "Service Contracts",
          children: [
            {
              key: "list-employee-contract",
              label: "List Employee Contracts",
            },
            {
              key: "add-contract",
              label: "Add Contract",
            },
          ],
        },
        {
          key: "g4",
          icon: <RightOutlined />,
          label: "Company Maintenance",
        },
      ],
    },
  ];

  // Hàm xử lý sự kiện khi người dùng click vào các mục
  const onClick = (e) => {
    // Điều hướng đến các trang tương ứng dựa trên key
    if (e.key === "add-contract") {
      navigate("/add-contract");
    } else if (e.key === "list-employee-contract") {
      navigate("/list-employee-contract");
    }
    // Bạn có thể thêm nhiều điều hướng cho các mục khác nếu cần
  };

  return (
    <div className="sidebar">
      <Menu
        onClick={onClick} // Thêm hàm onClick vào Menu
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
