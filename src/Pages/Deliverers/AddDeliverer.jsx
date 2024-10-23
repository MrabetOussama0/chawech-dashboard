import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddSuccessPopUp from "Components/AddSuccessPopUp";
import CustomDropDown from "Components/CustomDropDown";
import CustomField from "Components/CustomField";
import LoadingOverlay from "Components/LoadingOverlay";
import LoadingScreen from "Components/LoadingScreen";
import PopUp from "Components/Popup";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import * as Yup from "yup";
import {
  addDeliverer,
  getDeliverer,
  updateDeliverer,
} from "States/Actions/DeliverersActions";
import { getRegions } from "States/Actions/RegionsActions";

const AddDeliverer = () => {
  const dispatch = useDispatch();
  const { delivererId } = useParams();
  const [addSuccessOpen, setAddSuccessOpen] = useState(false);
  const [updateSuccessOpen, setUpdateSuccessOpen] = useState(false);
  const {
    getDelivererLoading,
    deliverer,
    addDelivererLoading,
    updateDelivererLoading,
  } = useSelector((state) => state.deliverers);
  const { regions, getRegionsLoading } = useSelector((state) => state.regions);
  const navigate = useNavigate();
  useEffect(() => {
    const getDelivererData = async () => {
      try {
        await dispatch(getRegions());
        if (delivererId) {
          await dispatch(getDeliverer(delivererId));
        }
      } catch (error) {
        toast.error(error.message);
      }
    };
    getDelivererData();
  }, [dispatch]);
  const onSubmit = async (values) => {
    try {
      const deliverer = {
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        password: values.password,
        phone: values.phone,
        region: values.region,
      };
      if (delivererId) {
        await dispatch(updateDeliverer(delivererId, deliverer));
        setUpdateSuccessOpen(true);
      } else {
        await dispatch(addDeliverer(deliverer));
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
        first_name: delivererId ? deliverer?.first_name : "",
        last_name: delivererId ? deliverer?.last_name : "",
        email: delivererId ? deliverer?.email : "",
        phone: delivererId ? deliverer?.phone : "",
        region: delivererId ? deliverer?.region : "",
      }}
      validationSchema={Yup.object().shape({
        first_name: Yup.string().required("Prénom est requis"),
        last_name: Yup.string().required("Nom est requis"),
        email: Yup.string()
          .email("Email est invalide")
          .required("Email est requis"),
        phone: Yup.string().required("Téléphone est requis"),
        region: Yup.string().required("Region est requise"),
        password: Yup.string().when("email", {
          is: (delivererId) => !delivererId || delivererId === "",
          then: () => Yup.string().required("Mot de passe est requis"),
          otherwise: () => Yup.string().notRequired(),
        }),
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
          {getDelivererLoading ? (
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
                      {delivererId ? "Modifier" : "Ajouter"}
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
                      value={delivererId ? "********" : values.password}
                      isDisabled={!!delivererId}
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
                    <Box>
                      <Typography
                        height="15px"
                        variant="h6"
                        color={"grey"}
                        mb=".6rem"
                      >
                        Region
                      </Typography>
                      <CustomDropDown
                        getItems={(item) =>
                          regions.find((region) => region._id === item).name
                        }
                        items={regions.map((region) => region._id)}
                        name={"region"}
                        value={values.region}
                      />
                    </Box>
                  </Box>
                </Box>
              </Form>
              <PopUp open={addSuccessOpen}>
                <AddSuccessPopUp
                  title={"Ajout de traiteur confirmé"}
                  onClick={() => {
                    setAddSuccessOpen(false);
                    navigate("/deliverers");
                  }}
                />
              </PopUp>
              <PopUp open={updateSuccessOpen}>
                <AddSuccessPopUp
                  title={"Modification de traiteur confirmée"}
                  onClick={() => {
                    setUpdateSuccessOpen(false);
                    navigate("/deliverers");
                  }}
                />
              </PopUp>
              <LoadingOverlay
                open={addDelivererLoading || updateDelivererLoading}
              />
            </>
          )}
        </Box>
      )}
    </Formik>
  );
};

export default AddDeliverer;
