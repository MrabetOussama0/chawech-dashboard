import { Box, Button, Typography } from "@mui/material";
import AddSuccessPopUp from "Components/AddSuccessPopUp";
import CustomField from "Components/CustomField";
import LoadingOverlay from "Components/LoadingOverlay";
import PopUp from "Components/Popup";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { updatePassword, updateUser } from "States/Actions/UserActions";
import * as Yup from "yup";

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, updateUserLoading, updatePasswordLoading } = useSelector(
    (state) => state.user
  );
  const [updateSuccessOpen, setUpdateSuccessOpen] = useState(false);
  const onSubmit = async (values) => {
    try {
      const data = {
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        phone: values.phone,
      };
      await dispatch(updateUser(data));
      setUpdateSuccessOpen(true);
    } catch (error) {
      toast.error(error.message);
    }
  };
  const changePassword = async (values, { resetForm }) => {
    try {
      await dispatch(updatePassword(values.old_password, values.new_password));
      resetForm();
      setUpdateSuccessOpen(true);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        gap: "50px",
      }}
    >
      <Box
        sx={{
          flex: "1",
        }}
      >
        <Typography variant="h4" fontWeight={"bold"}>
          Informations personnelles
        </Typography>
        <Formik
          enableReinitialize={true}
          onSubmit={onSubmit}
          initialValues={user}
          validationSchema={Yup.object().shape({
            first_name: Yup.string().required("Le prénom est obligatoire"),
            last_name: Yup.string().required("Le nom est obligatoire"),
            email: Yup.string()
              .email("Veuillez saisir une adresse email valide")
              .required("L'email est obligatoire"),
            phone: Yup.string().required(
              "Le numéro de téléphone est obligatoire"
            ),
          })}
          validateOnMount={true}
        >
          {({ values, handleSubmit, setFieldValue }) => (
            <Box
              className="content"
              sx={{
                "span.error-message": {
                  m: ".5px -10px",
                  fontSize: "12px",
                  color: "error.main",
                  position: "absolute",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "100%",
                },
              }}
            >
              <Form>
                <Box>
                  <CustomField
                    value={values.first_name}
                    name="first_name"
                    type="text"
                    title="Prénom"
                  />
                  <CustomField
                    value={values.last_name}
                    name="last_name"
                    type="text"
                    title="Nom"
                  />
                  <CustomField
                    value={values.email}
                    name="email"
                    type="text"
                    title="Email"
                  />
                  <CustomField
                    value={values.phone}
                    name="phone"
                    type="text"
                    title="Téléphone"
                  />
                  <Button
                    sx={{
                      mt: "10px",
                      width: "100px",
                      fontSize: "16px",
                      fontWeight: "400",
                      backgroundColor: "alt.main",
                      textTransform: "none",
                      ":hover": {
                        backgroundColor: "alt[400]",
                      },
                    }}
                    type="submit"
                  >
                    {"Modifier"}
                  </Button>
                </Box>
              </Form>
              <PopUp open={updateSuccessOpen}>
                <AddSuccessPopUp
                  title={"Mise à jour réussie"}
                  onClick={() => {
                    setUpdateSuccessOpen(false);
                  }}
                />
              </PopUp>
              <LoadingOverlay open={updateUserLoading} />
            </Box>
          )}
        </Formik>
      </Box>
      <Box
        sx={{
          flex: "1",
        }}
      >
        <Typography variant="h4" fontWeight={"bold"}>
          Modifer le mot de passe
        </Typography>
        <Formik
          enableReinitialize={true}
          onSubmit={changePassword}
          initialValues={{
            old_password: "",
            new_password: "",
            confirm_password: "",
          }}
          validationSchema={Yup.object().shape({
            old_password: Yup.string()
              .min(8, "Le mot de passe doit contenir au moins 8 caractères")
              .required("Le mot de passe est obligatoire"),
            new_password: Yup.string()
              .min(8, "Le mot de passe doit contenir au moins 8 caractères")
              .required("Le mot de passe est obligatoire"),
            confirm_password: Yup.string()
              .oneOf(
                [Yup.ref("new_password"), null],
                "Les mots de passe ne correspondent pas"
              )
              .required("Le mot de passe est obligatoire"),
          })}
          validateOnMount={true}
        >
          {({ values }) => (
            <Box
              className="content"
              sx={{
                "span.error-message": {
                  m: ".5px -10px",
                  fontSize: "12px",
                  color: "error.main",
                  position: "absolute",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "100%",
                },
              }}
            >
              <Form>
                <Box>
                  <CustomField
                    value={values.old_password}
                    name="old_password"
                    type="text"
                    title="Ancien mot de passe"
                  />
                  <CustomField
                    value={values.new_password}
                    name="new_password"
                    type="text"
                    title="Nouveau mot de passe"
                  />
                  <CustomField
                    value={values.confirm_password}
                    name="confirm_password"
                    type="text"
                    title="Confirmer le mot de passe"
                  />
                  <Button
                    sx={{
                      mt: "10px",
                      width: "100px",
                      fontSize: "16px",
                      fontWeight: "400",
                      backgroundColor: "alt.main",
                      textTransform: "none",
                      ":hover": {
                        backgroundColor: "alt[400]",
                      },
                    }}
                    type="submit"
                  >
                    {"Modifier"}
                  </Button>
                </Box>
              </Form>
              <PopUp open={updateSuccessOpen}>
                <AddSuccessPopUp
                  title={"Mise à jour réussie"}
                  onClick={() => {
                    setUpdateSuccessOpen(false);
                  }}
                />
              </PopUp>
              <LoadingOverlay
                open={updateUserLoading || updatePasswordLoading}
              />
            </Box>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default UpdateProfile;
