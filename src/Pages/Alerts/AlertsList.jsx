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
import { useDispatch, useSelector } from "react-redux";
import LoadingScreen from "Components/LoadingScreen";
import ErrorScreen from "Components/ErrorScreen";
import Builder from "Components/Builder";
import { getAlerts } from "States/Actions/AlertsActions";
import { formatString } from "Helpers/formt_string";
import PopUp from "Components/Popup";
import { toast } from "react-toastify";

const AlertRow = ({ item, setAlertsDetailsOpen, setSelectedAlert }) => {
  const mailtoLink = `mailto:${item.email}?subject=RE : ${item.subject}`;
  return (
    <TableRow
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
      }}
    >
      <TableCell>{formatString(item.email, 30)}</TableCell>
      <TableCell>{formatString(item.subject, 40)}</TableCell>
      <TableCell>{formatString(item.description, 50)}</TableCell>
      <TableCell
        align="center"
        sx={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          variant="outlined"
          sx={{
            color: "tertiary.main",
            borderColor: "tertiary.main",
            textTransform: "none",
          }}
          onClick={() => {
            setSelectedAlert(item);
            setAlertsDetailsOpen(true);
          }}
        >
          Consulter
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "tertiary.main",
            borderColor: "tertiary.main",
            textTransform: "none",
          }}
          href={mailtoLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Répondre
        </Button>
      </TableCell>
    </TableRow>
  );
};

const AlertsList = () => {
  const dispatch = useDispatch();
  const [selectedAlert, setSelectedAlert] = useState(null);
  const [alertDetailsOpen, setAlertsDetailsOpen] = useState(false);
  const { getAlertsLoading, error, alerts } = useSelector(
    (state) => state.alerts
  );

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        await dispatch(getAlerts());
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchAlerts();
  }, [dispatch]);

  return (
    <Box>
      <Builder
        builder={() => {
          if (getAlertsLoading) {
            return <LoadingScreen />;
          } else if (error) {
            return <ErrorScreen />;
          } else if (alerts.length === 0) {
            return <ErrorScreen text="Aucune alerte trouvée" />;
          } else {
            return (
              <Box>
                <Typography variant="h4" fontWeight={"bold"}>
                  Liste des alertes
                </Typography>
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
                          <TableCell>Email</TableCell>
                          <TableCell>Object</TableCell>
                          <TableCell>Description</TableCell>
                          <TableCell align="center">Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {alerts.map((item) => (
                          <AlertRow
                            key={item._id}
                            item={item}
                            setAlertsDetailsOpen={setAlertsDetailsOpen}
                            setSelectedAlert={setSelectedAlert}
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
      <PopUp open={alertDetailsOpen} setOpen={setAlertsDetailsOpen}>
        <Box
          sx={{
            width: "40vw",
            height: "80vh",
            bgcolor: "white",
            overflow: "auto",
            padding: "20px",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                color: "grey",
              }}
            >
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "black",
                  textWrap: "nowrap",
                  marginRight: "5px",
                }}
              >
                Email :
              </span>
              {selectedAlert?.email}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                color: "grey",
              }}
            >
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "black",
                  textWrap: "nowrap",
                  marginRight: "5px",
                }}
              >
                Object :
              </span>
              {selectedAlert?.subject}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "16px",
                color: "grey",
              }}
            >
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "black",
                  textWrap: "nowrap",
                  marginRight: "5px",
                }}
              >
                Description :
              </span>
              {selectedAlert?.description}
            </Typography>
          </Box>
        </Box>
      </PopUp>
    </Box>
  );
};

export default AlertsList;
