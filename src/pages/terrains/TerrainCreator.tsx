import { useState } from "react";
import { Terrain } from "../../classes/Terrain";
import { MapContainer, Polygon, TileLayer, useMapEvents } from "react-leaflet";
import { Box, Button, Paper, TextField } from "@mui/material";
import { MAP_CENTER } from "../../config/map-metadata";

interface TerrainCreatorProps {
  onSave: (terrain: Terrain) => void;
  onCancel: () => void;
}

const TerrainCreator: React.FC<TerrainCreatorProps> = ({
  onSave,
  onCancel,
}) => {
  const [isCreating, setIsCreating] = useState(false);
  const [points, setPoints] = useState<[number, number][]>([]);
  const [terrainName, setTerrainName] = useState("");

  const MapClickHandler: React.FC = () => {
    useMapEvents({
      click: (e) => {
        if (isCreating) {
          const newPoint: [number, number] = [e.latlng.lat, e.latlng.lng];
          setPoints((prevPoints) => [...prevPoints, newPoint]);
        }
      },
    });
    return null;
  };

  const undoLastPoint = () => {
    setPoints((prevPoints) => prevPoints.slice(0, -1));
  };

  const cancelCreation = () => {
    setIsCreating(false);
    setPoints([]);
    setTerrainName("");
    // onCancel();
  };

  const saveTerrain = () => {
    if (points.length < 3 || !terrainName) {
      alert("A terrain must have at least 3 points and a name.");
      return;
    }

    const newTerrain: Terrain = {
      id: Math.random().toString(36).slice(2, 9),
      name: terrainName,
      shape: points,
    };

    onSave(newTerrain);
    cancelCreation(); //reset after saving;
  };

  return (
    <div style={{ height: "70vh", width: "100%" }}>
      <Box
        sx={{
          position: "absolute",
          zIndex: 1000,
          // borderStyle: "solid",
          top: 127,
          left: 70,
        }}
      >
        {isCreating ? (
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              // backgroundColor: theme.palette.secondary.main,
              alignItems: "center",
              opacity: 0.9,
              width: "40vw",
              p: 1,
            }}
          >
            <TextField
              type="text"
              variant="outlined"
              label="Terrain Name"
              value={terrainName}
              onChange={(e) => setTerrainName(e.target.value)}
              sx={{
                mb: 2,
                p: 1,
              }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexGrow: 1,
              }}
            >
              <Button variant="contained" color="info" onClick={undoLastPoint}>
                Undo
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={cancelCreation}
              >
                Cancel
              </Button>
              <Button variant="contained" color="primary" onClick={saveTerrain}>
                Save
              </Button>
            </Box>
          </Paper>
        ) : (
          <Box>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setIsCreating(true)}
              sx={{
                mr: 1,
              }}
            >
              New Terrain
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => onCancel()}
            >
              Return
            </Button>
          </Box>
        )}
      </Box>

      <MapContainer
        center={MAP_CENTER}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapClickHandler />

        {points.length > 0 && (
          <Polygon
            positions={points}
            pathOptions={{
              color: "green",
              fillColor: "lime",
              fillOpacity: 0.3,
            }}
          />
        )}
      </MapContainer>
    </div>
  );
};

export default TerrainCreator;
