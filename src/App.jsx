import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { adminRoutes } from "./routes/index";
import { userRoutes } from "./routes/UserIndex";
import AdminLayout from "./layouts/admin/AdminLayout";
import UserLayout from "./layouts/user/UserLayout";
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
            {userRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = UserLayout;
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
