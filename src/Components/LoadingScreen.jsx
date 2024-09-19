import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "Images/loading.json";

const LoadingScreen = () => {
  return (
    <Box>
      <Lottie animationData={animationData} style={{ height: "70vh" }} />
    </Box>
  );
};

export default LoadingScreen;
