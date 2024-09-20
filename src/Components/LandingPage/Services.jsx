import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import onlineOrder from "Images/online_order.png";
import fastDelivery from "Images/fast_delivery.png";
import takeOrder from "Images/take_order.png";
import realtimeTracking from "Images/realtime_tracking.png";
import orderHistory from "Images/order_history.png";

const ServiceCard = ({ service }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "column",
        width: "200px",
        height: "250px",
        padding: "5px",
      }}
    >
      <Box
        sx={{
          height: "70px",
          width: "70px",
          backgroundImage: `url(${service.image})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          borderRadius: "50%",
        }}
      />
      <Typography
        sx={{
          color: theme.palette.secondary.main,
          fontSize: "18px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {service.title}
      </Typography>
      <Typography
        sx={{
          color: "grey",
          fontSize: "14px",
          textAlign: "center",
        }}
      >
        {service.description.length > 100
          ? service.description.substring(0, 100)
          : service.description}
      </Typography>
    </Box>
  );
};

function Services() {
  const theme = useTheme();
  const services = [
    {
      title: "Commande en ligne",
      description:
        "Accédez à une large sélection de plats et desserts, disponibles pour commande en quelques clics.",
      image: onlineOrder,
    },
    {
      title: "Livraison rapide",
      description:
        "Faites-vous livrer vos repas directement à votre emplacement sur l'avenue Mohamed V ou à la Cité de la Culture.",
      image: fastDelivery,
    },
    {
      title: "Retrait en personne",
      description:
        "Récupérez vos commandes directement chez le traiteur à l'heure qui vous convient.",
      image: takeOrder,
    },
    {
      title: "Suivi en temps réel",
      description:
        "Suivez l'évolution de votre commande, de la préparation à la livraison.",
      image: realtimeTracking,
    },
    {
      title: "Historique des commandes",
      description: "Consultez facilement vos commandes passées.",
      image: orderHistory,
    },
  ];
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        flexDirection: "column",
      }}
      id="services"
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
        Nos Services
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
          width: "60%",
        }}
      >
        {services.map((item, index) => (
          <ServiceCard key={index} service={item} />
        ))}
      </Box>
    </Box>
  );
}

export default Services;
