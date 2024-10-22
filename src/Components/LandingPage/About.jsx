import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";
import image from "Images/about.png";

const About = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "start",
        flexDirection: "column",
      }}
      id="about"
    >
      <Typography
        sx={{
          color: theme.palette.secondary.main,
          fontWeight: "bold",
          fontSize: "2rem",
          textAlign: "left",
          margin: "60px 10px 10px 10px",
          alignSelf: "start",
        }}
      >
        À propos
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "70%",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Typography
            sx={{
              fontSize: "32px",
              color: theme.palette.secondary.main,
              fontWeight: "bold",
            }}
          >
            À propos de nous
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              color: theme.palette.secondary.main,
              textAlign: "center",
              width: "70%",
            }}
          >
            Sarbini est une application mobile qui permet aux utilisateurs de
            l'avenue Mohamed V et de la Cité de la Culture à Tunis de commander
            facilement des repas et des desserts. Avec Sarbini, profitez d'un
            service rapide et pratique adapté à vos besoins.
          </Typography>
        </Box>
        <Box
          sx={{
            height: "100%",
            width: "100%",
            backgroundImage: `url(${image})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "15px",
            flex: "1",
          }}
        />
      </Box>
    </Box>
  );
};

export default About;
