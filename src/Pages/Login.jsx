import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, IconButton, InputAdornment } from "@mui/material";
import CustomField from "Components/CustomField";
import LoadingOverlay from "Components/LoadingOverlay";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { signIn } from "States/Actions/AuthActions";
import { useNavigate } from "react-router";
import login from "Images/login.png";
import { toast } from "react-toastify";
import logo from "Images/logo.png";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, token } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (values) => {
    try {
      await dispatch(
        signIn({ email: values.email, password: values.password })
      );
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, []);

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
          position: "relative",
        }}
      >
        <Box
          sx={{
            height: "50px",
            width: "50px",
            backgroundImage: `url(${logo})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            borderRadius: "10px",
            cursor: "pointer",
            position: "absolute",
            top: "20px",
            left: "20px",
          }}
          onClick={() => navigate("/")}
        />
      </Box>
      <Box
        sx={{
          flex: "1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Adresse email invalide")
              .required("Champ obligatoire"),
            password: Yup.string()
              .min(8, "Minimum 8 caractères")
              .required("Champ obligatoire"),
          })}
          onSubmit={onSubmit}
        >
          {({ values }) => (
            <Form
              style={{
                width: "50%",
              }}
            >
              <CustomField
                label={"Email"}
                name={"email"}
                value={values.email}
                type={"email"}
              />
              <CustomField
                label={"Mot de passe"}
                name={"password"}
                value={values.password}
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={(e) => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityOff color="secondary" />
                        ) : (
                          <Visibility color="secondary" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="text"
                  sx={{
                    color: "grey",
                    textTransform: "none",
                    fontSize: "12px",
                  }}
                  onClick={() => navigate("/forgot-password")}
                >
                  Mot de passe oublié ?
                </Button>
              </Box>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{
                  mt: 3,
                  mb: 2,
                  color: "secondary.main",
                  fontSize: "18px",
                  fontWeight: "bold",
                  borderColor: "secondary.main",
                  textTransform: "none",
                }}
              >
                Log In
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
      <LoadingOverlay open={isLoading} />
    </Box>
  );
};

export default Login;
