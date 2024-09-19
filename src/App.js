import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import SendEmail from "Pages/ForgotPassword/SendEmail";
import LandingPage from "Pages/LandingPage";
import Login from "Pages/Login";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router";
import AdminRoute from "Routes/AdminRoutes";
import PrivateRoute from "Routes/PrivateRoute";
import { themeSettings } from "theme";

const ROLES = {
  ADMIN: "ADMIN",
  SUPER_ADMIN: "SUPER_ADMIN",
};

function App() {
  const theme = useMemo(() => createTheme(themeSettings()), []);
  const token = useSelector((state) => state.auth.token);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/forgot-password/*"
          element={token ? <Navigate to="/" /> : <SendEmail />}
        />
        <Route
          path="/"
          element={
            token ? (
              <PrivateRoute requiredRoles={[ROLES.SUPER_ADMIN]}>
                <AdminRoute />
              </PrivateRoute>
            ) : (
              <LandingPage />
            )
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute requiredRoles={[ROLES.SUPER_ADMIN]}>
              <AdminRoute />
            </PrivateRoute>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
