import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router";
import ShopsList from "./ShopsList";
import AddShop from "./AddShop";
import NotFound from "Pages/NotFound";

const Shops = () => {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.light",
        width: "100%",
        padding: "20px",
      }}
    >
      <Routes>
        <Route path="/" element={<ShopsList />} />
        <Route path="/add" element={<AddShop />} />
        <Route path="/:shopId/edit" element={<AddShop />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
};

export default Shops;
