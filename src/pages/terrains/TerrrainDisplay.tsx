import { Button } from "@mui/material";
import { Terrain } from "../../classes/Terrain";
import MapComponent from "../../components/MapComponent";

interface TerrainDisplayProps {
  terrains: Terrain[];
}

const TerrainDisplay: React.FC<TerrainDisplayProps> = ({ terrains }) => {
  return (
    <>
      <MapComponent terrains={terrains} />
      <Button sx={{ mt: 2 }} variant="contained" href="/terrains/new">
        New Terrain
      </Button>
    </>
  );
};

export default TerrainDisplay;
