import { useTheme } from "@emotion/react";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import image from "Images/contact.jpg";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import CustomField from "Components/CustomField";
import { ContactSupport } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addAlert } from "States/Actions/AlertsActions";
import PopUp from "Components/Popup";
import AddSuccessPopUp from "Components/AddSuccessPopUp";
import LoadingOverlay from "Components/LoadingOverlay";

const ContactItem = ({ contact }) => {
  const theme = useTheme();
  return (
    <Link to={contact.link} target="_blank" style={{ textDecoration: "none" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {contact.icon}
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "bold",
            color: theme.palette.secondary.main,
          }}
        >
          {contact.title}
        </Typography>
      </Box>
    </Link>
  );
};

const Contact = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [addSuccessOpen, setAddSuccessOpen] = useState(false);
  const { addAlertLoading, error } = useSelector((state) => state.alerts);
  const contacts = [
    {
      title: "Email",
      icon: <ContactSupport />,
      link: "mailto:ttt",
    },
    {
      title: "Téléphone",
      icon: <ContactSupport />,
      link: "tel:ttt",
    },
    {
      title: "Adresse",
      icon: <ContactSupport />,
      link: "https://goo.gl/maps/ttt",
    },
  ];
  const handleSubmit = async (values) => {
    try {
      const alert = {
        email: values.email,
        subject: values.subject,
        description: values.description,
      };
      await dispatch(addAlert(alert));
      setAddSuccessOpen(true);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "start",
        flexDirection: "column",
      }}
      id="contact"
    >
      <Typography
        sx={{
          color: theme.palette.secondary.main,
          fontWeight: "bold",
          fontSize: "2rem",
          textAlign: "left",
          margin: "100px 10px 10px 10px",
          alignSelf: "start",
        }}
      >
        Contact
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "70%",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            backgroundImage: `url(${image})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "15px",
            flex: "1",
          }}
        />
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Typography
            sx={{
              fontSize: "32px",
              color: theme.palette.secondary.main,
              fontWeight: "bold",
            }}
          >
            Contactez-nous
          </Typography>
          <Box
            sx={{
              width: "60%",
            }}
          >
            <Formik
              initialValues={{ email: "", subject: "", description: "" }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("Adresse email invalide")
                  .required("Champs requis"),
                subject: Yup.string()
                  .min(3, "Doit contenir au moins 3 caractères")
                  .required("Champs requis"),
                description: Yup.string()
                  .min(10, "Doit contenir au moins 10 caractères")
                  .required("Champs requis"),
              })}
              onSubmit={handleSubmit}
            >
              {({ values }) => (
                <Form>
                  <CustomField
                    label={"Email"}
                    name={"email"}
                    value={values.email}
                    type={"email"}
                  />
                  <CustomField
                    label={"Objet"}
                    name={"subject"}
                    value={values.subject}
                    type={"text"}
                  />
                  <CustomField
                    label={"Description"}
                    name={"description"}
                    value={values.description}
                    type={"text"}
                    multiline
                    rows={4}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.tertiary.main,
                        width: "147px",
                        height: "40px",
                        border: "1px solid",
                        borderRadius: "6px",
                        textTransform: "none",
                        fontSize: "15px",
                        fontWeight: "600",
                      }}
                      type="submit"
                      startIcon={
                        <ContactSupport
                          sx={{
                            color: theme.palette.tertiary.main,
                            fontSize: "20px",
                            mr: "15px",
                          }}
                        />
                      }
                    >
                      Confirmer
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </Box>
      <PopUp open={addSuccessOpen} setOpen={setAddSuccessOpen}>
        <AddSuccessPopUp
          onClick={() => setAddSuccessOpen(false)}
          title={"Email envoyé avec succès"}
        />
      </PopUp>
      <LoadingOverlay open={addAlertLoading} />
    </Box>
  );
};

export default Contact;
