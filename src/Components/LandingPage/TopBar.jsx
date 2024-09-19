import { Box, Button } from "@mui/material";
import React from "react";
import logo from "Images/logo.png";
import { useTheme } from "@emotion/react";
import NavBar from "./NavBar";
import { LoginOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router";
function TopBar() {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        bgcolor: theme.palette.secondary.main,
        padding: "10px",
        position: "fixed",
        zIndex: "1",
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          height: "50px",
          width: "50px",
          backgroundImage: `url(${logo})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          borderRadius: "10px",
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      />
      {/* Navigation */}
      <NavBar />
      {/* Login Button */}
      <Box>
        <Button
          sx={{
            backgroundColor: theme.palette.tertiary.main,
            color: "black",
            width: "147px",
            height: "40px",
            border: "none",
            borderRadius: "6px",
            textTransform: "none",
            fontSize: "15px",
            fontWeight: "600",
          }}
          startIcon={
            <LoginOutlined
              sx={{
                color: "black",
                fontSize: "20px",
                mr: "15px",
              }}
            />
          }
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default TopBar;
