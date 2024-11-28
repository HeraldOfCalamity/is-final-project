import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIconRetina from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { MapContainer, Marker, Polygon, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Terrain } from "../classes/Terrain";
import { MAP_CENTER } from "../config/map-metadata";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIconRetina,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface MapComponentProps {
  terrains: Terrain[];
}

const MapComponent: React.FC<MapComponentProps> = ({ terrains }) => {
  const position: [number, number] = MAP_CENTER;

  return (
    <div style={{ height: "50vh", width: "100%" }}>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Terrain Rendering */}
        {terrains.map((terrain) => (
          <Polygon
            key={"sh_" + terrain.name}
            positions={terrain.shape}
            pathOptions={{
              color: "blue",
              fillColor: "cyan",
              fillOpacity: 0.3,
            }}
          >
            <Popup>{terrain.name}</Popup>
          </Polygon>
        ))}

        <Marker position={position}>
          <Popup>Map Center (popup message)</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
