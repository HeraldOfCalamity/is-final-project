import { Dashboard } from "@mui/icons-material";
import MapView from "./dashboard/MapView";
import { useEffect, useState } from "react";
import { Client } from "../classes/Client";
import { Terrain } from "../classes/Terrain";
import { getClients } from "../services/client-service";
import { getTerrains } from "../services/terrain-service";
import StatisticsPanel from "./dashboard/StatisticsPanel";
import { Typography } from "@mui/material";

const Home: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [terrains, setTerrains] = useState<Terrain[]>([]);

  const fetchClients = async () => {
    setClients(await getClients());
  };

  const fetchTerrains = async () => {
    setTerrains(await getTerrains());
  };

  useEffect(() => {
    fetchClients();
    fetchTerrains();
  }, []);

  return (
    <>
      <Typography variant="h2">
        <Dashboard /> Dashboard
      </Typography>
      <MapView clients={clients} terrains={terrains} />

      <StatisticsPanel clients={clients} terrains={terrains} />
    </>
  );
};

export default Home;
