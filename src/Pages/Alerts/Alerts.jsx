import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router";
import AlertsList from "./AlertsList";
import NotFound from "Pages/NotFound";

const Alerts = () => {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.light",
        width: "100%",
        padding: "20px",
      }}
    >
      <Routes>
        <Route path="/" element={<AlertsList />} />
        {/* <Route path="/:alertId/" element={<AddAlert />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
};

export default Alerts;
