import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const ShopCard = ({ shop, setDeleteOpen, setSelectedShop }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.1)",
        borderRadius: "5px",
        marginBottom: "10px",
        bgcolor: "secondary.main",
        width: "300px",
        height: "200px",
        padding: "10px",
      }}
    >
      {/* Info */}
      <Box>
        <Box
          sx={{
            position: "relative",
            height: "100px",
            width: "300px",
          }}
        >
          <Box
            sx={{
              backgroundImage: `url(${
                process.env.REACT_APP_UPLOAD_URL + shop.image
              })`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "100%",
              width: "100%",
              borderRadius: "5px",
            }}
          />
          <Typography
            sx={{
              position: "absolute",
              bottom: "5px",
              left: "5px",
              backgroundColor: "rgba(0,0,0,0.5)",
              color: "white",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            {shop.name}
          </Typography>
        </Box>
        <Box
          sx={{
            bgcolor: "tertiary.main",
            height: "1px",
            margin: "0 20px",
          }}
        />
        {/* Info */}
        <Box
          sx={{
            padding: "10px",
            textAlign: "start",
          }}
        >
          <Typography
            sx={{
              fontSize: "1rem",
            }}
          >
            {shop.address}
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
            }}
          >
            {shop.phone}
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
            }}
          >
            {shop.email}
          </Typography>
        </Box>
      </Box>
      {/* Actions */}
      <Box>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "alt.main",
              color: "white",
              padding: "5px",
              width: "120px",
              borderRadius: "5px",
              cursor: "pointer",
              textAlign: "center",
            }}
            onClick={() => navigate(`${shop._id}/edit`)}
          >
            Modifier
          </Box>
          <Box
            sx={{
              backgroundColor: "error.main",
              color: "white",
              padding: "5px",
              width: "120px",
              borderRadius: "5px",
              cursor: "pointer",
              textAlign: "center",
            }}
            onClick={() => {
              setSelectedShop(shop);
              setDeleteOpen(true);
            }}
          >
            Supprimer
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ShopCard;
