import React from "react";
import Banner from "../../Images/banner.png";
import { Box, Button } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Apple, Google, IosShare } from "@mui/icons-material";
function Welcome() {
  const theme = useTheme();
  return (
    <Box
      id="welcome"
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          mt: "5%",
          backgroundImage: `url(${Banner})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          border: "1px solid",
          borderColor: theme.palette.tertiary.light,
          borderRadius: "24px",
        }}
      />
      <Button
        sx={{
          position: "absolute",
          right: "30%",
          top: "60%",
          color: theme.palette.secondary.main,
          textTransform: "none",
          fontWeight: "bold",
          fontSize: "18px",
          border: "2px solid",
          borderRadius: "6px",
        }}
        startIcon={<Google />}
        href="https://play.google.com/store/apps/details?id=com.chawech.client"
        target="_blank"
      >
        Télécharger l'application
      </Button>
      <Button
        sx={{
          position: "absolute",
          right: "20%",
          top: "68%",
          color: theme.palette.secondary.main,
          textTransform: "none",
          fontWeight: "bold",
          fontSize: "18px",
          border: "2px solid",
          borderRadius: "6px",
        }}
        startIcon={<Apple />}
        // href="https://play.google.com/store/apps/details?id=com.chawech.client"
        // target="_blank"
      >
        Télécharger l'application
      </Button>
    </Box>
  );
}

export default Welcome;
