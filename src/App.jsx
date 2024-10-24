import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { adminRoutes, customerRoutes } from "./routes";
import AdminLayout from "./layouts/admin/AdminLayout";
import CustomerLayout from "./layouts/customer/CustomerLayout";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Routes dành cho admin */}
          {adminRoutes.map((route, index) => {
            const Layout = AdminLayout;
            return (
              <Route
                key={index}
                path={route.path}
                element={<Layout>{route.element}</Layout>}
              />
            );
          })}

          {/* Routes dành cho customer */}
          {customerRoutes.map((route, index) => {
            const Layout = CustomerLayout;
            return (
              <Route
                key={index}
                path={route.path}
                element={<Layout>{route.element}</Layout>}
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
