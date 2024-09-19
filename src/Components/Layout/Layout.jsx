import { Box } from "@mui/material";
import { Outlet } from "react-router";
import SideBar from "./SideBar";
import Header from "./Header";
import { useState } from "react";

const Layout = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(true);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <Box>
      <Header OpenSidebar={OpenSidebar} openSidebarToggle={openSidebarToggle} />
      <Box display="flex">
        <SideBar openSidebarToggle={openSidebarToggle} />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
