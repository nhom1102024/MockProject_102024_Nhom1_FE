import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { adminRoutes } from "./routes";
import AdminLayout from "./layouts/admin/AdminLayout";
import Profile from "./pages/home/Profile"; // Cập nhật đường dẫn
import UtilityList from "./pages/home/UtilityList"; // Đường dẫn tới trang UtilityList
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            {adminRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = AdminLayout; // Sử dụng AdminLayout cho các route admin
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
            {/* Route cho Profile */}
            <Route 
              path="/profile" 
              element={
                <AdminLayout>
                  <Profile />
                </AdminLayout>
              } 
            />
            {/* Route cho UtilityList */}
            <Route 
              path="/utilitylist" 
              element={
                <AdminLayout>
                  <UtilityList />
                </AdminLayout>
              } 
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
