import { Routes, Route, Navigate } from "react-router-dom";
import RolesPage from "../pages/Roles";
import Layout from "./Layout";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/roles-permissions/" element={<Layout />}>
        <Route index element={<RolesPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
