import { useTheme } from "@emotion/react";
import { Box, Button, Typography } from "@mui/material";
import AddSuccessPopUp from "Components/AddSuccessPopUp";
import Builder from "Components/Builder";
import CustomDropDown from "Components/CustomDropDown";
import CustomField from "Components/CustomField";
import ErrorScreen from "Components/ErrorScreen";
import LoadingOverlay from "Components/LoadingOverlay";
import LoadingScreen from "Components/LoadingScreen";
import PopUp from "Components/Popup";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { getManagers } from "States/Actions/ManagersActions";
import { addShop, getShop, updateShop } from "States/Actions/ShopsActions";
import * as Yup from "yup";

const AddShop = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { shopId } = useParams();
  const [addSuccessOpen, setAddSuccessOpen] = useState(false);
  const [updateSuccessOpen, setUpdateSuccessOpen] = useState(false);
  const { getShopLoading, shop, addShopLoading, updateShopLoading } =
    useSelector((state) => state.shops);
  const { managers, getManagersLoading, error } = useSelector(
    (state) => state.managers
  );
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const shopsTypes = [
    "restaurant",
    "supermarket",
    "bakery",
    "cafe",
    "pastry",
    "other",
  ];
  const getShopType = (type) => {
    if (type === "restaurant") return "Restaurant";
    if (type === "supermarket") return "Supermarché";
    if (type === "bakery") return "Boulangerie";
    if (type === "cafe") return "Café";
    if (type === "pastry") return "Patisserie";
    if (type === "other") return "Autre";
    return "Autre";
  };
  useEffect(() => {
    try {
      if (shopId) {
        dispatch(getShop(shopId));
      }
      dispatch(getManagers());
    } catch (error) {
      toast.error(error.message);
    }
  }, [dispatch]);
  const onSubmit = async (values) => {
    try {
      const manager = managers.find(
        (elem) => elem.manager._id === values.manager
      );
      const shop = {
        name: values.name,
        description: values.description,
        manager: manager.manager.email,
        address: values.address,
        type: values.type,
        image: image,
      };
      if (shopId) {
        await dispatch(updateShop(shopId, shop));
        setUpdateSuccessOpen(true);
      } else {
        await dispatch(addShop(shop));
        setAddSuccessOpen(true);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <Builder
      builder={() => {
        if (getShopLoading || getManagersLoading) {
          return <LoadingScreen />;
        } else if (error) {
          return <ErrorScreen text={error} />;
        } else {
          return (
            <Formik
              enableReinitialize={true}
              onSubmit={onSubmit}
              initialValues={{
                name: shop?.name || "",
                description: shop?.description || "",
                manager: shop?.manager || managers[0]?.manager?._id || "",
                address: shop?.address || "",
                type: shop?.type || "restaurant",
              }}
              validationSchema={Yup.object({
                name: Yup.string().required("Champ obligatoire"),
                description: Yup.string().required("Champ obligatoire"),
                manager: Yup.string().required("Champ obligatoire"),
                address: Yup.string().required("Champ obligatoire"),
                type: Yup.string().required("Champ obligatoire"),
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
                  {getShopLoading ? (
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
                            Nouveau Boutique
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
                              {shopId ? "Modifier" : "Ajouter"}
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
                              value={values.name}
                              isDisabled={false}
                              name="name"
                              type="text"
                              title="Nom de la boutique"
                            />
                            <CustomField
                              value={values.description}
                              isDisabled={false}
                              name="description"
                              type="text"
                              title="Description"
                              multiline
                              rows={4}
                            />
                            <CustomDropDown
                              getItems={(item) =>
                                `${
                                  managers.find(
                                    (elem) => elem.manager._id === item
                                  ).manager.email
                                }`
                              }
                              name="manager"
                              value={values.manager}
                              items={managers.map((item) => item.manager._id)}
                            />
                          </Box>
                          <Box flex="1">
                            <CustomField
                              value={values.address}
                              isDisabled={false}
                              name="address"
                              type="text"
                              title="Adresse"
                            />
                            <Box>
                              <Typography
                                height="15px"
                                variant="h6"
                                color={theme.palette.grey[600]}
                                mb=".6rem"
                              >
                                Type de boutique
                              </Typography>
                              <CustomDropDown
                                name="type"
                                value={values.type}
                                items={shopsTypes}
                                getItems={getShopType}
                              />
                            </Box>
                            <input
                              name="image"
                              type="file"
                              accept="image/*"
                              id="image"
                              onChange={(e) => setImage(e.target.files[0])}
                              style={{
                                display: "none",
                              }}
                            />
                            <Box
                              sx={{
                                height: "140px",
                                border: "1px solid",
                                borderColor: "tertiary.main",
                                borderRadius: "9px",
                                mt: "20px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                cursor: "pointer",
                              }}
                              component={"label"}
                              htmlFor="image"
                            >
                              <Typography
                                sx={{
                                  color: "tertiary.main",
                                  fontWeight: "bold",
                                  fontSize: "16px",
                                  mb: "10px",
                                }}
                              >
                                Cliquez ici pour sélectionner des images
                              </Typography>
                              <Typography
                                sx={{
                                  color: "tertiary.main",
                                  fontWeight: "bold",
                                  fontSize: "12px",
                                }}
                              >
                                Formats acceptés: JPG, PNG, JPEG
                              </Typography>
                              <Typography
                                sx={{
                                  color: image
                                    ? "tertiary.main"
                                    : "warning.main",
                                  fontSize: "12px",
                                }}
                              >
                                {image
                                  ? image.name
                                  : "Aucune image sélectionnée"}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Form>
                      <PopUp open={addSuccessOpen}>
                        <AddSuccessPopUp
                          title={"Ajout de boutique confirmé"}
                          onClick={() => {
                            setAddSuccessOpen(false);
                            navigate("/shops");
                          }}
                        />
                      </PopUp>
                      <PopUp open={updateSuccessOpen}>
                        <AddSuccessPopUp
                          title={"Modification de boutique confirmée"}
                          onClick={() => {
                            setUpdateSuccessOpen(false);
                            navigate("/shops");
                          }}
                        />
                      </PopUp>
                      <LoadingOverlay
                        open={addShopLoading || updateShopLoading}
                      />
                    </>
                  )}
                </Box>
              )}
            </Formik>
          );
        }
      }}
    />
  );
};

export default AddShop;
