import { Button } from "@mui/material";
import { Terrain } from "../../classes/Terrain";
import MapComponent from "../../components/MapComponent";
import TerrainTable from "./TerrainTable";
import { AddLocation } from "@mui/icons-material";

interface TerrainDisplayProps {
  terrains: Terrain[];
}

const TerrainDisplay: React.FC<TerrainDisplayProps> = ({ terrains }) => {
  return (
    <>
      <MapComponent terrains={terrains} />
      <Button
        startIcon={<AddLocation />}
        fullWidth
        sx={{ mt: 2 }}
        variant="contained"
        href="/terrains/new"
      >
        New Terrain
      </Button>
      <TerrainTable terrains={terrains} />
    </>
  );
};

export default TerrainDisplay;
