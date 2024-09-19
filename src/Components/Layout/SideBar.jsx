import { Box, List, ListItem, Typography } from "@mui/material";
import logo from "Images/logo.png";
import React, { useEffect } from "react";
import {
  BsShop,
  BsGrid1X2,
  BsMenuButtonWide,
  BsGear,
  BsPeople,
  BsPerson,
} from "react-icons/bs";
import { useLocation, useNavigate } from "react-router";

function Sidebar({ openSidebarToggle }) {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      title: "Dashboard",
      icon: <BsGrid1X2 fontSize={"20px"} />,
      link: "/",
    },
    {
      title: "Boutiques",
      icon: <BsShop fontSize={"20px"} />,
      link: "/shops",
    },
    {
      title: "Traiteurs",
      icon: <BsPeople fontSize={"20px"} />,
      link: "/managers",
    },
    {
      title: "Rapports",
      icon: <BsMenuButtonWide fontSize={"20px"} />,
      link: "/reports",
    },
    {
      title: "Profile",
      icon: <BsPerson fontSize={"20px"} />,
      link: "/profile",
    },
  ];
  return (
    <Box
      sx={{
        width: openSidebarToggle ? "250px" : "60px",
        height: "calc(100vh - 60px)",
        backgroundColor: "secondary.main",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px 0",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${logo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: openSidebarToggle ? "60px" : "30px",
            width: openSidebarToggle ? "60px" : "30px",
            borderRadius: "50%",
          }}
        />
        <Typography
          sx={{
            color: "white",
            fontSize: "1.5rem",
            fontWeight: "bold",
            display: !openSidebarToggle && "none",
          }}
        >
          Chawech
        </Typography>
      </Box>
      <List
        sx={{
          padding: "0",
          listStyleType: "none",
        }}
      >
        {navItems.map((item, index) => (
          <ListItem
            sx={{
              cursor: "pointer",
              padding: "20px 10px",
              backgroundColor:
                location.pathname === item.link && "secondary.dark",
              "&:hover": {
                backgroundColor: "secondary.dark",
              },
              display: "flex",
              justifyContent: openSidebarToggle ? "start" : "center",
              alignItems: "center",
              gap: "10px",
            }}
            key={index}
            onClick={() => navigate(item.link)}
          >
            {item.icon}
            <Typography
              sx={{
                marginLeft: "10px",
                fontSize: "1rem",
                fontWeight: "bold",
                display: !openSidebarToggle && "none",
              }}
            >
              {item.title}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Sidebar;
