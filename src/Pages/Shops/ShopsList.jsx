import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ShopCard from "./ShopCard";
import { useDispatch, useSelector } from "react-redux";
import LoadingScreen from "Components/LoadingScreen";
import ErrorScreen from "Components/ErrorScreen";
import Builder from "Components/Builder";
import { deleteShop, getShops } from "States/Actions/ShopsActions";
import DeletePopUp from "Components/DeletePopUp";
import PopUp from "Components/Popup";
import AddSuccessPopUp from "Components/AddSuccessPopUp";
import LoadingOverlay from "Components/LoadingOverlay";
import { toast } from "react-toastify";

const ShopsList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteSuccessOpen, setDeleteSuccessOpen] = useState(false);
  const [selectedShop, setSelectedShop] = useState({});
  const { shops, getShopsLoading, error, deleteShopLoading } = useSelector(
    (state) => state.shops
  );
  useEffect(() => {
    const getShopsData = async () => {
      try {
        await dispatch(getShops());
      } catch (error) {
        toast.error(error.message);
      }
    }
    getShopsData();
  }, [dispatch]);

  const handleDelete = async () => {
    try {
      await dispatch(deleteShop(selectedShop._id));
      setSelectedShop({});
      setDeleteSuccessOpen(true);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Box>
      <Builder
        builder={() => {
          if (getShopsLoading) {
            return <LoadingScreen />;
          } else if (error) {
            return <ErrorScreen />;
          } else {
            return (
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h4" fontWeight={"bold"}>
                    Boutiques
                  </Typography>

                  <Button
                    sx={{
                      backgroundColor: "secondary.dark",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "secondary.dark",
                      },
                      fontWeight: "600",
                      fontSize: "0.8rem",
                      textTransform: "none",
                    }}
                    onClick={() => navigate("/shops/add")}
                  >
                    Ajouter une boutique
                  </Button>
                </Box>
                <Box
                  sx={{
                    mt: "20px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    height: "75vh",
                    overflow: "auto",
                  }}
                >
                  <Builder
                    builder={() => {
                      if (shops.length === 0) {
                        return (
                          <ErrorScreen
                            text="Aucune boutique trouvée !"
                            sx={{ height: "70vh" }}
                          />
                        );
                      } else {
                        return shops.map((shop, index) => {
                          return (
                            <ShopCard
                              key={index}
                              shop={shop}
                              setDeleteOpen={setDeleteOpen}
                              setSelectedShop={setSelectedShop}
                            />
                          );
                        });
                      }
                    }}
                  />
                </Box>
              </Box>
            );
          }
        }}
      />
      <DeletePopUp
        content={"Voulez-vous vraiment supprimer cette boutique ?"}
        title={"Supprimer la boutique"}
        open={deleteOpen}
        setOpen={setDeleteOpen}
        onClick={() => handleDelete()}
      />
      <PopUp open={deleteSuccessOpen} setOpen={setDeleteSuccessOpen}>
        <AddSuccessPopUp
          title={"Suppression de la boutique confirmée"}
          onClick={() => {
            setDeleteSuccessOpen(false);
          }}
        />
      </PopUp>
      <LoadingOverlay open={deleteShopLoading} />
    </Box>
  );
};

export default ShopsList;
