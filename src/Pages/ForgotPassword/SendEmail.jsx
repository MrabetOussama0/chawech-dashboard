import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import login from "Images/login.png";
import { toast } from "react-toastify";
import { Box, Button } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import CustomField from "Components/CustomField";
import LoadingOverlay from "Components/LoadingOverlay";
import { generateOTP } from "States/Actions/UserActions";

const SendEmail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { generateOTPLoading } = useSelector((state) => state.user);

  const onSubmit = async (values) => {
    try {
      await dispatch(generateOTP(values.email));
      navigate(`send-code?email=${values.email}`);
    } catch (error) {
      toast.error(error.message);
    }
  };

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
      <Box
        sx={{
          flex: "1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Formik
          initialValues={{ email: "" }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Adresse email invalide")
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
                Envoyer
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
      <LoadingOverlay open={generateOTPLoading} />
    </Box>
  );
};

export default SendEmail;
