import { useTheme } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddSuccessPopUp from "Components/AddSuccessPopUp";
import CustomField from "Components/CustomField";
import LoadingOverlay from "Components/LoadingOverlay";
import LoadingScreen from "Components/LoadingScreen";
import PopUp from "Components/Popup";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import {
  addManager,
  getManager,
  updateManager,
} from "States/Actions/ManagersActions";

const AddManager = () => {
  const dispatch = useDispatch();
  const { managerId } = useParams();
  const [addSuccessOpen, setAddSuccessOpen] = useState(false);
  const [updateSuccessOpen, setUpdateSuccessOpen] = useState(false);
  const {
    getManagerLoading,
    manager,
    addManagerLoading,
    updateManagerLoading,
  } = useSelector((state) => state.managers);
  const navigate = useNavigate();
  useEffect(() => {
    const getManagerData = async () => {
      try {
        console.log("managerId", managerId);
        
        if (managerId) {
          await dispatch(getManager(managerId));
        }
      } catch (error) {
        toast.error(error.message);
      }
    };
    getManagerData();
  }, [dispatch]);
  const onSubmit = async (values) => {
    try {
      const manager = {
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        password: values.password,
        phone: values.phone,
      };
      if (managerId) {
        await dispatch(updateManager(managerId, manager));
        setUpdateSuccessOpen(true);
      } else {
        await dispatch(addManager(manager));
        setAddSuccessOpen(true);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <Formik
      enableReinitialize={true}
      onSubmit={onSubmit}
      initialValues={{
        first_name: managerId ? manager?.manager.first_name : "",
        last_name: managerId ? manager?.manager.last_name : "",
        email: managerId ? manager?.manager.email : "",
        phone: managerId ? manager?.manager.phone : "",
      }}
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
          {getManagerLoading ? (
            <LoadingScreen />
          ) : (
            <>
              <Form>
                {/* Header */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h3"
                    fontWeight="bold"
                    color={"primary.main"}
                  >
                    Nouveau Traiteur
                  </Typography>
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
                      {managerId ? "Modifier" : "Ajouter"}
                    </Button>
                  </Box>
                </Box>
                <Box
                  sx={{
                    height: "75vh",
                    overflow: "auto",
                    display: "flex",
                    gap: "20px",
                  }}
                >
                  <Box flex="1">
                    <CustomField
                      value={values.first_name}
                      isDisabled={false}
                      name="first_name"
                      type="text"
                      title="Prénom"
                    />
                    <CustomField
                      value={values.last_name}
                      isDisabled={false}
                      name="last_name"
                      type="text"
                      title="Nom"
                    />
                    <CustomField
                      value={values.email}
                      isDisabled={false}
                      name="email"
                      type="email"
                      title="Email"
                    />
                  </Box>
                  <Box flex="1">
                    <CustomField
                      value={managerId ? "********" : values.password}
                      isDisabled={!!managerId}
                      name="password"
                      type="text"
                      title="Mot de passe"
                    />
                    <CustomField
                      value={values.phone}
                      isDisabled={false}
                      title="Téléphone"
                      name="phone"
                      type="phone"
                    />
                  </Box>
                </Box>
              </Form>
              <PopUp open={addSuccessOpen}>
                <AddSuccessPopUp
                  title={"Ajout de traiteur confirmé"}
                  onClick={() => {
                    setAddSuccessOpen(false);
                    navigate("/managers");
                  }}
                />
              </PopUp>
              <PopUp open={updateSuccessOpen}>
                <AddSuccessPopUp
                  title={"Modification de traiteur confirmée"}
                  onClick={() => {
                    setUpdateSuccessOpen(false);
                    navigate("/managers");
                  }}
                />
              </PopUp>
              <LoadingOverlay
                open={addManagerLoading || updateManagerLoading}
              />
            </>
          )}
        </Box>
      )}
    </Formik>
  );
};

export default AddManager;
