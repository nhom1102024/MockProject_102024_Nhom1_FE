import { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  adminRoutes,
  authenticateRoutes,
  customerRoutes,
  staffRoutes,
} from "./routes";
import AdminLayout from "./layouts/admin/AdminLayout";
import CustomerLayout from "./layouts/customer/CustomerLayout";
import StaffLayout from "./layouts/staff/StaffLayout";
import "../src/assets/css/App.css";

function App() {
  const [role, setRole] = useState("");
  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    if (savedRole && savedRole !== role) {
      setRole(savedRole);
    }
  }, []);
  let routes;
  let Layout;
  if (!role) {
    routes = authenticateRoutes;
    Layout = Fragment;
  } else if (role === "admin") {
    routes = adminRoutes;
    Layout = AdminLayout;
  } else if (role === "customer") {
    routes = customerRoutes;
    Layout = CustomerLayout;
  } else if (role === "staff") {
    routes = staffRoutes;
    Layout = StaffLayout;
  }
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            {routes.map((route, index) => {
              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
