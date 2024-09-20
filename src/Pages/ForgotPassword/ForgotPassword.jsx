import React, { useState } from "react";
import SendEmail from "./SendEmail";
import SendCode from "./SendCode";
import login from "Images/login.png";

import ResetPassword from "./ResetPassword";
import { Box } from "@mui/material";

const builder = (callback) => {
  return callback();
};

const ForgotPassword = () => {
  const [currentRoute, setCurrentRoute] = useState("send-email");
  const [email, setEmail] = useState(null);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100vh",
        bgcolor: "tertiary.main",
      }}
    >
      <Box
        sx={{
          flex: "1",
          backgroundImage: `url(${login})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
      {builder(() => {
        if (currentRoute === "send-email") {
          return (
            <SendEmail setCurrentRoute={setCurrentRoute} setEmail={setEmail} />
          );
        } else if (currentRoute === "send-code") {
          return <SendCode setCurrentRoute={setCurrentRoute} />;
        } else if (currentRoute === "reset-password") {
          return <ResetPassword email={email} />;
        } else {
          return <></>;
        }
      })}
    </Box>
  );
};

export default ForgotPassword;
