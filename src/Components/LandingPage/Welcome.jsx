import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Apple, Google } from "@mui/icons-material";

function Welcome() {
  const theme = useTheme();
  return (
    <Box
      id="welcome"
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Typography
        sx={{
          color: theme.palette.secondary.main,
          fontSize: "50px",
          fontWeight: "600",
        }}
      >
        Sarbini
      </Typography>
      <Typography
        sx={{
          color: theme.palette.secondary.light,
          fontSize: "25px",
          fontWeight: "500",
          mt: "10px",
        }}
      >
        Vos repas préférés à portée de main
      </Typography>
      <Typography
        sx={{
          color: theme.palette.secondary.main,
          fontSize: "20px",
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        Télécharger l'application pour profiter de nos services
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
        }}
      >
        <IconButton
          sx={{
            color: theme.palette.secondary.main,
            fontSize: "40px",
            border: "2px solid",
            borderRadius: "6px",
          }}
          href="https://play.google.com/store/apps/details?id=com.chawech.client"
          target="_blank"
        >
          <Google />
        </IconButton>
        <IconButton
          sx={{
            color: theme.palette.secondary.main,
            fontSize: "40px",
            border: "2px solid",
            borderRadius: "6px",
          }}
        >
          <Apple />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Welcome;
