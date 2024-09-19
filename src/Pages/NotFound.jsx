import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Box
      sx={{
        minHeight: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "secondary.main",
      }}
    >
      <Typography
        sx={{
          fontSize: "5rem",
          fontWeight: "500",
          fontFamily: "monospace",
        }}
      >
        404
      </Typography>
      <Typography
        sx={{
          fontSize: "1.5rem",
          fontWeight: "300",
        }}
      >
        Page not found
      </Typography>
    </Box>
  );
};

export default NotFound;
