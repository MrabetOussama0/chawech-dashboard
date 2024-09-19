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
import { updateUser } from "States/Actions/UserActions";

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, updateUserLoading } = useSelector((state) => state.user);
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
  return (
    <Box>
      <Typography variant="h4" fontWeight={"bold"}>
        Informations personnelles
      </Typography>
      <Formik
        enableReinitialize={true}
        onSubmit={onSubmit}
        initialValues={user}
        // validationSchema={shopSchema}
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
              <Box
                sx={{
                  width: "50%",
                }}
              >
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
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <Button
                    sx={{
                      width: "100px",
                      fontSize: "16px",
                      fontWeight: "400",
                      backgroundColor: "primary.main",
                      color: "alt.main",
                      border: "1px solid",
                      borderRadius: "4px",
                      borderColor: "grey.light",
                      textTransform: "none",
                      ":hover": {
                        backgroundColor: "primary[400]",
                      },
                    }}
                    onClick={() => navigate(-1)}
                  >
                    Annuler
                  </Button>
                  <Button
                    sx={{
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
  );
};

export default UpdateProfile;
