import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router";
import NotFound from "Pages/NotFound";
import ManagersList from "./ManagersList";
import AddManager from "./AddManager";

const Managers = () => {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.light",
        width: "100%",
        padding: "20px",
      }}
    >
      <Routes>
        <Route path="/" element={<ManagersList />} />
        <Route path="/add" element={<AddManager />} />
        <Route path="/:managerId/edit" element={<AddManager />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
};

export default Managers;
