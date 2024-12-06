import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MAP_CENTER } from "../config/map-metadata";
import { Typography } from "@mui/material";

interface ClickableMapProps {
  coords: [number, number];
  setCoords: (coords: [number, number]) => void;
}

const ClickableMap: React.FC<ClickableMapProps> = ({ coords, setCoords }) => {
  // const [coordinates, setCoordinates] = useState<Coords | null>(null);

  const MapClickHandler = () => {
    useMapEvents({
      click: (event) => {
        const { lat, lng } = event.latlng;
        setCoords([lat, lng]);
        // setCoordinates({ lat, lng });
      },
    });

    return null; // This component doesn't render anything
  };

  return (
    <div>
      <Typography variant="h6">Select Coordenates</Typography>
      <MapContainer
        center={MAP_CENTER} // Initial map center
        zoom={16} // Initial zoom level
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapClickHandler />
        {
          <Marker
            position={coords[0] === 0 || coords[1] === 0 ? MAP_CENTER : coords}
          />
        }
      </MapContainer>
    </div>
  );
};

export default ClickableMap;
