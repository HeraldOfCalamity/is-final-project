import { Terrain } from "../../classes/Terrain";
import MapComponent from "../../components/MapComponent";

interface TerrainDisplayProps {
  terrains: Terrain[];
}

const TerrainDisplay: React.FC<TerrainDisplayProps> = ({ terrains }) => {
  return <MapComponent terrains={terrains} />;
};

export default TerrainDisplay;
