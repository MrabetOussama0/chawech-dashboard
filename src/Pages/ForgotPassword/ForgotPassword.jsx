import React, { useState } from "react";
import { Route, Routes } from "react-router";
import SendEmail from "./SendEmail";
import SendCode from "./SendCode";
import NotFound from "Pages/NotFound";
import ResetPassword from "./ResetPassword";

const ForgotPassword = () => {
  return (
    <Routes>
      <Route path="/" element={<SendEmail />} />
      <Route path="/send-code" element={<SendCode />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default ForgotPassword;
