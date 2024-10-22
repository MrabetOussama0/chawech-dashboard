import { Box, Tooltip, Typography } from "@mui/material";
import Builder from "Components/Builder";
import ErrorScreen from "Components/ErrorScreen";
import LoadingScreen from "Components/LoadingScreen";
import React, { useEffect } from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import { getHomeData } from "States/Actions/HomeActions";
import Categories from "./Categories";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { toast } from "react-toastify";
import Regions from "./Regions";

const StatCard = ({ title, Icon, value, color }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        padding: "8px 15px",
        borderRadius: "5px",
        backgroundColor: color,
        height: "100px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4" fontWeight={"bold"}>
          {title}
        </Typography>
        <Icon style={{ fontSize: "25px" }} />
      </Box>
      <Typography variant="h3" fontWeight={"600"}>
        {value}
      </Typography>
    </Box>
  );
};

function Home() {
  const dispatch = useDispatch();
  const { homeData, error } = useSelector((state) => state.home);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        await dispatch(getHomeData());
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchHomeData();
  }, [dispatch]);

  return (
    <Builder
      builder={() => {
        if (error) {
          return <ErrorScreen text={error} />;
        } else if (homeData) {
          return (
            <Box
              sx={{
                backgroundColor: "secondary.light",
                width: "100%",
                padding: "20px",
                height: "calc(100vh - 60px)",
                overflow: "auto",
              }}
            >
              <Typography variant="h4" fontWeight={"bold"}>
                Dashboard
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr 1fr",
                  gap: "20px",
                  margin: "15px 0",
                }}
              >
                <StatCard
                  title={"Utilisateurs"}
                  Icon={BsPeopleFill}
                  value={homeData.usersNb}
                  color={"#2962ff"}
                />
                <StatCard
                  title={"Boutiques"}
                  Icon={BsFillArchiveFill}
                  value={homeData.shopsNb}
                  color={"#ff6d00"}
                />
                <StatCard
                  title={"Clients"}
                  Icon={BsFillGrid3X3GapFill}
                  value={homeData.clientsNb}
                  color={"#2e7d32"}
                />
                <StatCard
                  title={"Alertes"}
                  Icon={BsFillBellFill}
                  value={homeData.alertNb}
                  color={"#d50000"}
                />
              </Box>
              <Box className="charts">
                <ResponsiveContainer height={300}>
                  <BarChart
                    width={500}
                    height={300}
                    data={homeData.stats}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="boutique" />
                    <YAxis />
                    <Legend />
                    <Bar dataKey="ordre" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>

                <ResponsiveContainer height={300}>
                  <BarChart
                    width={500}
                    height={300}
                    data={homeData.stats}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="boutique" />
                    <YAxis />
                    <Legend />
                    <Bar dataKey="montant" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
                <ResponsiveContainer height={300}>
                  <Categories />
                </ResponsiveContainer>
                <ResponsiveContainer height={300}>
                  <Regions />
                </ResponsiveContainer>
              </Box>
            </Box>
          );
        } else {
          return <LoadingScreen />;
        }
      }}
    />
  );
}

export default Home;
