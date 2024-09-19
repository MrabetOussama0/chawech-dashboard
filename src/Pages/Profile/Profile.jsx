import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router";
import NotFound from "Pages/NotFound";
import UpdateProfile from "./UpdateProfile";

const Profile = () => {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.light",
        width: "100%",
        padding: "20px",
      }}
    >
      <Routes>
        <Route path="/" element={<UpdateProfile />} />
        {/* <Route path="/:alertId/" element={<AddAlert />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
};

export default Profile;
