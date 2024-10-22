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
import {
  deleteDeliverer,
  getDeliverers,
} from "States/Actions/DeliverersActions";
import DeletePopUp from "Components/DeletePopUp";
import { toast } from "react-toastify";
import LoadingOverlay from "Components/LoadingOverlay";
import AddSuccessPopUp from "Components/AddSuccessPopUp";
import PopUp from "Components/Popup";

const DelivererRow = ({ deliverer, setDeleteOpen, setSelectedDeliverer }) => {
  const navigate = useNavigate();
  return (
    <TableRow
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
      }}
    >
      <TableCell>{deliverer.last_name}</TableCell>
      <TableCell>{deliverer.first_name}</TableCell>
      <TableCell>{deliverer.email}</TableCell>
      <TableCell>{deliverer.phone}</TableCell>
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
          onClick={() => navigate(`${deliverer._id}/edit`)}
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
            setSelectedDeliverer(deliverer);
            setDeleteOpen(true);
          }}
        >
          Supprimer
        </Button>
      </TableCell>
    </TableRow>
  );
};

const DeliverersList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteSuccessOpen, setDeleteSuccessOpen] = useState(false);
  const [selectedDeliverer, setSelectedDeliverer] = useState({});
  const { deliverers, getDeliverersLoading, error, deleteDelivererLoading } =
    useSelector((state) => state.deliverers);
  useEffect(() => {
    const getDeliverersData = async () => {
      try {
        await dispatch(getDeliverers());
      } catch (error) {
        toast.error(error.message);
      }
    };
    getDeliverersData();
  }, [dispatch]);
  const handleDelete = async () => {
    try {
      await dispatch(deleteDeliverer(selectedDeliverer._id));
      setSelectedDeliverer({});
      setDeleteSuccessOpen(true);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Box>
      <Builder
        builder={() => {
          if (getDeliverersLoading) {
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
                    Livreurs
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
                    onClick={() => navigate("/deliverers/add")}
                  >
                    Ajouter un livreur
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
                          <TableCell align="center">Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {deliverers.map((deliverer) => (
                          <DelivererRow
                            key={deliverer._id}
                            deliverer={deliverer}
                            setDeleteOpen={setDeleteOpen}
                            setSelectedDeliverer={setSelectedDeliverer}
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
        content={"Voulez-vous vraiment supprimer ce livreur ?"}
        title={"Supprimer le livreur"}
        open={deleteOpen}
        setOpen={setDeleteOpen}
        onClick={() => handleDelete()}
      />
      <PopUp open={deleteSuccessOpen} setOpen={setDeleteSuccessOpen}>
        <AddSuccessPopUp
          title={"Suppression de livreur confirmée"}
          onClick={() => {
            setDeleteSuccessOpen(false);
          }}
        />
      </PopUp>
      <LoadingOverlay open={deleteDelivererLoading} />
    </Box>
  );
};

export default DeliverersList;
