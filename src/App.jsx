import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { adminRoutes, publicRoutes } from "./routes";
import AdminLayout from "./layouts/admin/AdminLayout";
import "../src/assets/css/App.css";
import { useState } from "react";
import CustomerLayout from "./layouts/customer/CustomerLayout";

function App() {
  const [role, setRole] = useState("customer");
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            {role === "admin"
              ? adminRoutes.map((route, index) => {
                  const Page = route.component;
                  let Layout = AdminLayout;
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
                })
              : publicRoutes.map((route, index) => {
                  const Page = route.component;
                  let Layout = CustomerLayout;
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
