import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { adminRoutes } from "./routes";
import AdminLayout from "./layouts/admin/AdminLayout";
import Profile from "./pages/home/Profile"; 
import UtilityList from "./pages/home/UtilityList"; 
import MaintenanceRequest from "./pages/home/MaintenanceRequest";
import ComplaintList from "./pages/home/ComplaintList";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            {adminRoutes.map((route, index) => {
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
            {/* Route cho MaintenanceRequestt */}
            <Route 
              path="/maintenancerequest" 
              element={
                <AdminLayout>
                  <MaintenanceRequest />
                </AdminLayout>
              } 
            />
              {/* Route cho ComplaintList */}
              <Route 
              path="/complaintlist" 
              element={
                <AdminLayout>
                  <ComplaintList />
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
