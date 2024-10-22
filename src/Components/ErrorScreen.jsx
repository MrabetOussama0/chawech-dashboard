import { Box, Typography } from "@mui/material";
import React from "react";

const ErrorScreen = ({
  text = "Une erreur s'est produite, veuillez réessayer plus tard",
  sx = {},
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        ...sx,
      }}
    >
      <Typography
        sx={{
          color: "error.main",
          fontSize: "20px",
          fontWeight: "600",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default ErrorScreen;
