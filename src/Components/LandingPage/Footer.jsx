import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";
import logo from "Images/logo.png";
import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  X,
  YouTube,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

function Footer() {
  const theme = useTheme();
  const links = [
    {
      icon: <FacebookOutlined color="primary" />,
      link: "https://www.facebool.com",
    },
    {
      icon: <YouTube color="primary" />,
      link: "https://www.facebool.com",
    },
    {
      icon: <Instagram color="primary" />,
      link: "https://www.facebool.com",
    },
    {
      icon: <LinkedIn color="primary" />,
      link: "https://www.facebool.com",
    },
    {
      icon: <X color="primary" />,
      link: "https://www.facebool.com",
    },
  ];
  return (
    <Box
      sx={{
        height: "50vh",
        backgroundColor: theme.palette.secondary.main,
        padding: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              height: "60px",
              width: "60px",
              backgroundImage: `url(${logo})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              borderRadius: "50%",
            }}
          />
          <Typography
            sx={{
              color: theme.palette.tertiary.main,
              fontSize: "32px",
              fontWeight: "bold",
              letterSpacing: "2px",
            }}
          >
            Chawech
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            style={{
              flex: "1",
              textAlign: "center",
              fontSize: "16px",
              padding: "0 20px",
            }}
          >
            Chawech est une application mobile innovante en Tunisie, conçue pour
            simplifier la commande de repas et desserts pour les utilisateurs
            situés sur l'avenue Mohamed V et à la Cité de la Culture à Tunis.
            Avec une interface intuitive, Chawech permet aux utilisateurs de
            parcourir une large sélection de plats, de passer commande en
            quelques clics et de choisir entre la livraison rapide ou le retrait
            en personne. L'application offre également un suivi en temps réel
            des commandes, garantissant une expérience fluide et personnalisée.
            Chawech transforme votre manière de commander, en rendant chaque
            repas plus accessible et pratique.
          </Typography>
          <Box
            sx={{
              flex: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "30px",
            }}
          >
            {links.map((item, index) => {
              return (
                <Link key={index} to={item.link}>
                  {item.icon}
                </Link>
              );
            })}
          </Box>
        </Box>
        <Box
          sx={{
            height: "1px",
            width: "100%",
            backgroundColor: theme.palette.tertiary.main,
            padding: "0 20px",
          }}
        />
        <Typography
          sx={{
            fontSize: "14px",
            textAlign: "center",
            width: "100%",
          }}
        >
          Chawech @ 2024. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
