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
    try {
      dispatch(getAlerts());
    } catch (error) {
      toast.error(error.message);
    }
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
              {selectedAlert?.description} Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Sequi deserunt architecto nobis
              molestiae quae, dolorem optio inventore, tempora ipsum in eius,
              quisquam ipsa nisi doloremque! Quae maxime eum rerum enim odit
              voluptatum repudiandae ipsum quam ducimus dolores sit commodi
              recusandae repellendus modi voluptates voluptate, aspernatur,
              doloribus quo totam quos accusamus laborum magnam? A pariatur
              quasi, nesciunt at nam ex itaque modi dolor reiciendis libero sint
              qui dolorem eligendi labore culpa ad molestias error perferendis
              repudiandae neque! Natus, praesentium inventore facilis nemo
              molestias consequuntur animi necessitatibus culpa vitae
              exercitationem dignissimos rem et dolor consequatur cumque ad
              magnam accusantium, nulla accusamus repellendus quod harum.
              Inventore provident cumque necessitatibus dicta. Magnam, debitis,
              at cupiditate iure totam quidem recusandae voluptatum deserunt, ab
              neque modi aperiam earum reiciendis animi possimus perspiciatis
              odit fugiat adipisci quaerat dolores corporis itaque eius. Porro
              explicabo numquam assumenda sequi mollitia fugit debitis. Neque
              maiores assumenda quaerat, corrupti eius aspernatur illum mollitia
              officiis excepturi error voluptate nesciunt debitis saepe
              explicabo rem blanditiis. Accusantium ipsa neque suscipit eveniet
              doloribus autem, iusto nostrum saepe fugit porro. Obcaecati
              architecto molestias dignissimos totam voluptatem quam labore
              ipsum assumenda? Voluptate, eligendi modi iure quisquam eius
              deleniti repudiandae aperiam id cupiditate error temporibus
              dolorem tempora blanditiis. Ad, quae iste, molestiae fuga
              doloremque voluptates ipsam sapiente eveniet animi adipisci amet
              in earum obcaecati! Accusantium quia neque eligendi soluta ullam
              ipsum hic quo a labore incidunt voluptatum praesentium, quos eius
              minima deserunt quibusdam optio numquam ad exercitationem deleniti
              voluptatem aperiam officia dolore. Velit nam quia eaque dicta sint
              amet debitis quidem repudiandae. Reprehenderit, dolor! Eaque
              blanditiis molestiae mollitia, adipisci odit officia numquam nulla
              aliquam corrupti animi, commodi fugit natus ab qui! Aspernatur,
              asperiores, odio consequatur tempora facere perspiciatis soluta
              nam magnam, porro amet maiores laudantium maxime natus
              necessitatibus deserunt. Pariatur rerum culpa nam libero molestiae
              eum, voluptatum voluptate cumque quam dicta, molestias illum!
              Laborum totam facere quam ipsa, culpa quo expedita exercitationem
              blanditiis quod eaque ipsam quisquam quidem consectetur
              accusantium atque odio ab maiores ea corporis, voluptatum
              voluptates consequuntur veritatis nostrum? Ut esse neque sed!
              Error earum deleniti ut rerum consequatur eius, sed cupiditate
              animi, perferendis quibusdam nostrum, a dolorum! Error minima
              quaerat saepe natus expedita accusantium vitae eius placeat a,
              quam animi totam, facere, explicabo aspernatur fugit officia ullam
              perspiciatis veritatis consectetur. Dicta consectetur corrupti cum
              quis temporibus, omnis sed facere fugit tenetur architecto error
              debitis enim vel aspernatur soluta, ad laborum quidem cumque
              ducimus ex repudiandae a fuga odit asperiores! Cumque eaque
              aspernatur soluta. Quidem porro quos incidunt commodi similique,
              blanditiis odio atque cumque voluptatum, voluptate ut aliquam at
              facere consequatur praesentium ipsa harum, et vel qui nihil alias
              sint exercitationem ea obcaecati! Tenetur, velit rem. At cum
              rerum, nihil iste in itaque dicta labore vero, voluptatem optio,
              maxime modi? Molestias in aut nisi hic quos quae pariatur
              necessitatibus iste doloremque, omnis dignissimos quisquam nulla
              minus ab recusandae explicabo porro sapiente, temporibus modi
              voluptatibus aliquid officia numquam aperiam ratione! Maiores non
              voluptatibus cupiditate quasi voluptas, inventore officia aliquam
              nostrum nisi reprehenderit natus magnam ab error obcaecati
              possimus?
            </Typography>
          </Box>
        </Box>
      </PopUp>
    </Box>
  );
};

export default AlertsList;
