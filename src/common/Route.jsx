import { Routes, Route, Navigate } from "react-router-dom";
import RolesPage from "../pages/Roles";
import Layout from "./Layout";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/roles" element={<Layout />}>
        <Route index element={<RolesPage />} />
      </Route>
      
      <Route path="/" element={<Navigate to="/roles" />} />
    </Routes>
  );
};

export default AppRoute;
