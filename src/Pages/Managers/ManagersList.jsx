import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import LoadingScreen from "Components/LoadingScreen";
import ErrorScreen from "Components/ErrorScreen";
import Builder from "Components/Builder";
import { deleteManager, getManagers } from "States/Actions/ManagersActions";
import DeletePopUp from "Components/DeletePopUp";
import { toast } from "react-toastify";
import LoadingOverlay from "Components/LoadingOverlay";
import AddSuccessPopUp from "Components/AddSuccessPopUp";
import PopUp from "Components/Popup";

const ManagerRow = ({ manager, setDeleteOpen, setSelectedManager }) => {
  const navigate = useNavigate();
  return (
    <TableRow
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
      }}
    >
      <TableCell>{manager.manager.last_name}</TableCell>
      <TableCell>{manager.manager.first_name}</TableCell>
      <TableCell>{manager.manager.email}</TableCell>
      <TableCell>{manager.manager.phone}</TableCell>
      <TableCell>{manager.shop ? manager.shop.name : "-"}</TableCell>
      <TableCell
        sx={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}
        align="center"
      >
        <Button
          variant="outlined"
          sx={{
            color: "tertiary.main",
            borderColor: "tertiary.main",
            textTransform: "none",
          }}
          onClick={() => navigate(`${manager.manager._id}/edit`)}
        >
          Modifier
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "tertiary.main",
            borderColor: "tertiary.main",
            textTransform: "none",
          }}
          onClick={() => {
            setSelectedManager(manager.manager);
            setDeleteOpen(true);
          }}
        >
          Supprimer
        </Button>
      </TableCell>
    </TableRow>
  );
};

const ManagersList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteSuccessOpen, setDeleteSuccessOpen] = useState(false);
  const [selectedManager, setSelectedManager] = useState({});
  const { managers, getManagersLoading, error, deleteManagerLoading } =
    useSelector((state) => state.managers);
  useEffect(() => {
    try {
      dispatch(getManagers());
    } catch (error) {
      toast.error(error.message);
    }
  }, [dispatch]);
  const handleDelete = async () => {
    try {
      await dispatch(deleteManager(selectedManager._id));
      setSelectedManager({});
      setDeleteSuccessOpen(true);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Box>
      <Builder
        builder={() => {
          if (getManagersLoading) {
            return <LoadingScreen />;
          } else if (error) {
            return <ErrorScreen />;
          } else if (managers.length === 0) {
            return <ErrorScreen text="Aucun traiteur trouvée !" />;
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
                    Traiteurs
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
                    onClick={() => navigate("/managers/add")}
                  >
                    Ajouter un traiteur
                  </Button>
                </Box>
                <Box
                  sx={{
                    mt: "20px",
                    display: "flex",
                    height: "75vh",
                    overflow: "auto",
                  }}
                >
                  {/* table */}
                  <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Nom</TableCell>
                          <TableCell>Prénom</TableCell>
                          <TableCell>Email</TableCell>
                          <TableCell>Téléphone</TableCell>
                          <TableCell>Boutique</TableCell>
                          <TableCell align="center">Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {managers.map((manager) => (
                          <ManagerRow
                            key={manager.manager._id}
                            manager={manager}
                            setDeleteOpen={setDeleteOpen}
                            setSelectedManager={setSelectedManager}
                          />
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </Box>
            );
          }
        }}
      />
      <DeletePopUp
        content={"Voulez-vous vraiment supprimer ce traiteur ?"}
        title={"Supprimer le traiteur"}
        open={deleteOpen}
        setOpen={setDeleteOpen}
        onClick={() => handleDelete()}
      />
      <PopUp open={deleteSuccessOpen} setOpen={setDeleteSuccessOpen}>
        <AddSuccessPopUp
          title={"Suppression de traiteur confirmée"}
          onClick={() => {
            setDeleteSuccessOpen(false);
          }}
        />
      </PopUp>
      <LoadingOverlay open={deleteManagerLoading} />
    </Box>
  );
};

export default ManagersList;
