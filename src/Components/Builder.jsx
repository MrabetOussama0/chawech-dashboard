import { Box } from "@mui/material";
import React from "react";

const Builder = ({ builder }) => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "transparent",
      }}
    >
      {builder()}
    </Box>
  );
};

export default Builder;
