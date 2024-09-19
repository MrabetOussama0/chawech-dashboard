import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { BsPersonCircle, BsJustify, BsXLg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { signOut } from "States/Actions/AuthActions";

function Header({ OpenSidebar, openSidebarToggle }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const handleSignOut = () => {
    dispatch(signOut());
    navigate("/login");
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
        height: "60px",
        backgroundColor: "secondary.main",
      }}
    >
      <Box>
        {openSidebarToggle ? (
          <BsXLg
            style={{
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
            onClick={OpenSidebar}
          />
        ) : (
          <BsJustify
            style={{
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
            onClick={OpenSidebar}
          />
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          gap: "20px",
          padding: "5px",
          width: "250px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BsPersonCircle
            style={{
              fontSize: "2rem",
              cursor: "pointer",
            }}
          />

          <Box>
            <Typography
              sx={{
                fontSize: "1rem",
              }}
            >
              {user?.first_name} {user?.last_name}
            </Typography>
            <Typography
              sx={{
                fontSize: "0.8rem",
              }}
            >
              {user?.email}
            </Typography>
          </Box>
        </Box>
        <Button
          sx={{
            backgroundColor: "error.main",
            color: "white",
            padding: "5px",
            borderRadius: "5px",
            fontSize: "0.8rem",
            fontWeight: "500",
            textTransform: "none",
          }}
          onClick={handleSignOut}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
}

export default Header;
