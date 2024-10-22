import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router";
import NotFound from "Pages/NotFound";
import DeliverersList from "./DeliverersList";
import AddDeliverer from "./AddDeliverer";

const Deliverers = () => {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.light",
        width: "100%",
        padding: "20px",
      }}
    >
      <Routes>
        <Route path="/" element={<DeliverersList />} />
        <Route path="/add" element={<AddDeliverer />} />
        <Route path="/:delivererId/edit" element={<AddDeliverer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
};

export default Deliverers;
