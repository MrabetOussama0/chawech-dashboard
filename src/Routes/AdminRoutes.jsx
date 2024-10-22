import Layout from "Components/Layout/Layout";
import Alerts from "Pages/Alerts/Alerts";
import Deliverers from "Pages/Deliverers/Deliverers";
import Home from "Pages/Home/Home";
import Managers from "Pages/Managers/Managers";
import NotFound from "Pages/NotFound";
import Profile from "Pages/Profile/Profile";
import Shops from "Pages/Shops/Shops";
import { Route, Routes } from "react-router";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shops/*" element={<Shops />} />
        <Route path="/managers/*" element={<Managers />} />
        <Route path="/reports/*" element={<Alerts />} />
        <Route path="/deliverers/*" element={<Deliverers />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
