import { ControlPoint } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import AddSuccessPopUp from "Components/AddSuccessPopUp";
import Builder from "Components/Builder";
import DeletePopUp from "Components/DeletePopUp";
import ErrorScreen from "Components/ErrorScreen";
import LoadingOverlay from "Components/LoadingOverlay";
import PopUp from "Components/Popup";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  addRegion,
  deleteRegion,
  getRegions,
  updateRegion,
} from "States/Actions/RegionsActions";

function AddEditRegion({ handleSubmit, region }) {
  const [name, setName] = useState(region?.name);

  return (
    <Box
      sx={{
        width: "500px",
      }}
    >
      <Typography variant="h5" fontWeight={"bold"} color="primary">
        {region ? "Modifier la region" : "Ajouter une region"}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "20px",
          bgcolor: "#fff",
          borderRadius: "16px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography variant="h6" fontWeight={"bold"} color="secondary">
            Nom de la region
          </Typography>
          <TextField
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{
              width: "100%",
              backgroundColor: "#fff",
              borderColor: "black",
              border: "none",
              height: "40px",
              borderBottom: "2px solid #D9D9D9",
            }}
            InputProps={{
              id: "name",
              style: {
                color: "#000",
                fontSize: "14px",
              },
            }}
          />
        </Box>
        <Button
          sx={{
            bgcolor: "#1E5EFF",
            color: "#fff",
            borderRadius: "6px",
            padding: "10px",
            fontSize: "14px",
            fontWeight: "bold",
            textTransform: "none",
          }}
          onClick={() => handleSubmit({ name })}
        >
          {region ? "Modifier" : "Ajouter"}
        </Button>
      </Box>
    </Box>
  );
}

function Regions() {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [addEditOpen, setAddEditOpen] = useState(false);
  const [addSuccessOpen, setAddSuccessPopUp] = useState(false);
  const [updateSuccessOpen, setUpdateSuccessOpen] = useState(false);
  const [deleteSuccessOpen, setDeleteSuccessOpen] = useState(false);
  const {
    regions,
    error,
    addRegionLoading,
    udpateRegionLoading,
    deleteRegionLoading,
  } = useSelector((state) => state.regions);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(getRegions());
    } catch (error) {
      toast.error(error.message);
    }
  }, [dispatch]);
  const handleSubmit = async (region) => {
    try {
      if (selectedRegion) {
        await dispatch(updateRegion(selectedRegion._id, region));
        setUpdateSuccessOpen(true);
      } else {
        await dispatch(addRegion(region));
        setAddSuccessPopUp(true);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleDeleteRegion = async () => {
    try {
      await dispatch(deleteRegion(selectedRegion._id));
      setDeleteOpen(false);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <Box
      sx={{
        height: "500px",
      }}
    >
      <Builder
        builder={() => {
          if (regions) {
            return (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  padding: "20px",
                  height: "470px",
                  mb: "20px",
                  borderColor: "#fff",
                  border: "1.5px solid #fff",
                  borderRadius: "4px",
                  overflow: "auto",
                }}
              >
                {/* Regions */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <Typography variant="h5" fontWeight={"bold"} color="primary">
                    Regions
                  </Typography>
                  <IconButton
                    onClick={() => {
                      setSelectedRegion(null);
                      setAddEditOpen(true);
                    }}
                  >
                    <ControlPoint />
                  </IconButton>
                </Box>
                <Builder
                  builder={() => {
                    if (regions.length === 0) {
                      return (
                        <ErrorScreen
                          text="Aucune region trouvée"
                          sx={{ height: "50vh" }}
                        />
                      );
                    } else {
                      return (
                        <Box
                          sx={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "20px",
                            borderColor: "#fff",
                          }}
                        >
                          {regions.map((region) => (
                            <Box
                              key={region._id}
                              sx={{
                                height: "100px",
                                bgcolor: "#fff",
                                padding: "10px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "start",
                                gap: "10px",
                                borderRadius: "16px",
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                              }}
                            >
                              <Typography
                                variant="h6"
                                fontWeight={"bold"}
                                color="secondary"
                              >
                                {region.name}
                              </Typography>
                              <Box
                                sx={{
                                  width: "100%",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  gap: "10px",
                                }}
                              >
                                <Button
                                  sx={{
                                    flex: "1",
                                    bgcolor: "#1E5EFF",
                                    color: "#fff",
                                    borderRadius: "6px",
                                    padding: "5px 20px",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    textTransform: "none",
                                  }}
                                  onClick={() => {
                                    setSelectedRegion(region);
                                    setAddEditOpen(true);
                                  }}
                                >
                                  Modifier
                                </Button>
                                <Button
                                  sx={{
                                    flex: "1",
                                    bgcolor: "#FF4A4A",
                                    color: "#fff",
                                    borderRadius: "6px",
                                    padding: "5px 20px",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    textTransform: "none",
                                  }}
                                  onClick={() => {
                                    setSelectedRegion(region);
                                    setDeleteOpen(true);
                                  }}
                                >
                                  Supprimer
                                </Button>
                              </Box>
                            </Box>
                          ))}
                        </Box>
                      );
                    }
                  }}
                />
              </Box>
            );
          } else if (error) {
            return <ErrorScreen text={error} />;
          } else {
            return (
              <Skeleton
                animation="pulse"
                variant="rectangular"
                sx={{
                  bgcolor: "#D9D9D9",
                  borderRadius: "6px",
                  height: "80px",
                }}
              />
            );
          }
        }}
      />
      <PopUp
        open={addEditOpen}
        setOpen={setAddEditOpen}
        style={{ backgroundColor: "white" }}
      >
        <AddEditRegion region={selectedRegion} handleSubmit={handleSubmit} />
      </PopUp>
      <DeletePopUp
        content={`Voulez-vous vraiment supprimer la region ${selectedRegion?.name}`}
        title={"Supprimer la region"}
        open={deleteOpen}
        setOpen={setDeleteOpen}
        onClick={handleDeleteRegion}
      />
      <PopUp open={addSuccessOpen} setOpen={setAddSuccessPopUp}>
        <AddSuccessPopUp
          title={"Region ajoutée avec succès"}
          onClick={() => {
            setAddSuccessPopUp(false);
            setAddEditOpen(false);
          }}
        />
      </PopUp>
      <PopUp open={updateSuccessOpen} setOpen={setUpdateSuccessOpen}>
        <AddSuccessPopUp
          title={"Region modifiée avec succès"}
          onClick={() => {
            setUpdateSuccessOpen(false);
            setAddEditOpen(false);
          }}
        />
      </PopUp>
      <PopUp open={deleteSuccessOpen} setOpen={setDeleteSuccessOpen}>
        <AddSuccessPopUp
          title={"Region supprimée avec succès"}
          onClick={() => setDeleteOpen(false)}
        />
      </PopUp>
      <LoadingOverlay
        open={addRegionLoading || udpateRegionLoading || deleteRegionLoading}
      />
    </Box>
  );
}

export default Regions;
