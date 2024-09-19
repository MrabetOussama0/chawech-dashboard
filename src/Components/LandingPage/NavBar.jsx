import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

function NavItem({ text, link, color }) {
  return (
    <a href={`#${link}`} style={{ textDecoration: "none" }}>
      <Typography
        sx={{
          color: color,
          fontSize: "16px",
          fontWeight: "500",
        }}
      >
        {text}
      </Typography>
    </a>
  );
}

function NavBar() {
  const theme = useTheme();
  const navItems = [
    { text: "Bienvenue", link: "welcome" },
    { text: "Services", link: "services" },
    { text: "À propos", link: "about" },
    { text: "Contact", link: "contact" },
  ];
  const getColor = (item, index) => {
    const links = navItems.map((item) => item.link);
    if (index === 0 && !links.includes(window.location.href.split("#")[1])) {
      return theme.palette.tertiary.main;
    }
    if (window.location.href.includes(item.link)) {
      return theme.palette.tertiary.main;
    }
    return theme.palette.primary.main;
  };
  return (
    <Box
      sx={{
        width: "33%",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {navItems.map((item, index) => (
        <NavItem
          key={index}
          text={item.text}
          link={item.link}
          index={index}
          color={getColor(item, index)}
        />
      ))}
    </Box>
  );
}

export default NavBar;
