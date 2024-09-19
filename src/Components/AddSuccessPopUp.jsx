import { useTheme } from "@emotion/react";
import { CheckOutlined } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

const AddSuccessPopUp = ({ title, onClick }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "540px",
        height: "208px",
        bgcolor: theme.palette.primary.main,
        borderRadius: "6px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "58px",
            height: "58px",
            bgcolor: theme.palette.alt[100],
            border: "1px solid",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CheckOutlined
            sx={{
              fontSize: "28px",
              color: theme.palette.alt.main,
            }}
          />
        </Box>
        <Typography
          sx={{
            color: theme.palette.secondary.main,
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "right",
          alignItems: "end",
          m: "0 20px -30px 0",
        }}
      >
        <Button
          size="small"
          variant="contained"
          sx={{
            bgcolor: theme.palette.alt.main,
            color: theme.palette.primary.main,
            fontSize: "16px",
            fontWeight: "bold",
            height: "30px",
            width: "30px",
            p: "0",
            ":hover": {
              bgcolor: theme.palette.alt.main,
              color: theme.palette.primary.main,
            },
          }}
          onClick={onClick}
        >
          OK
        </Button>
      </Box>
    </Box>
  );
};

export default AddSuccessPopUp;
