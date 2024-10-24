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
              key: "view-fines-list",
              label: "View Fines List",
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
    {
      key: "notification",
      label: "Notification",
    },
    {
      key: "logout",
      label: "Log out",
    },
  ];

  // Hàm xử lý sự kiện khi người dùng click vào các mục
  const onClick = (e) => {
    // Điều hướng đến các trang tương ứng dựa trên key
    if (e.key === "add-contract") {
      navigate("/add-contract");
    } else if (e.key === "list-employee-contract") {
      navigate("/list-employee-contract");
    } else if (e.key === "view-fines-list") {
      navigate("/view-fines-list"); // Điều hướng đến trang View Fines List
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
