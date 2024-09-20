import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import login from "Images/login.png";
import { toast } from "react-toastify";
import { Box, Button } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import CustomField from "Components/CustomField";
import LoadingOverlay from "Components/LoadingOverlay";
import { resetPassword } from "States/Actions/UserActions";

const ResetPassword = ({ email }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { resetPasswordLoading, sessionId } = useSelector(
    (state) => state.user
  );

  const onSubmit = async (values) => {
    try {
      await dispatch(resetPassword(email, values.password, sessionId));
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Box
      sx={{
        flex: "1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Formik
        initialValues={{
          password: "",
        }}
        validationSchema={Yup.object({
          password: Yup.string()
            .min(8, "Le mot de passe doit contenir au moins 8 caractères")
            .required("Champ obligatoire"),
        })}
        enableReinitialize={true}
        validateOnMount={true}
        onSubmit={onSubmit}
      >
        {({ values }) => (
          <Form
            style={{
              width: "50%",
            }}
          >
            <CustomField
              label={"Mot de passe"}
              name={"password"}
              value={values.password}
              type={"text"}
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
      <LoadingOverlay open={resetPasswordLoading} />
    </Box>
  );
};

export default ResetPassword;
