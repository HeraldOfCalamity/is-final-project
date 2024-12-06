import React from "react";
import { MapContainer, TileLayer, Polygon, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Terrain } from "../../classes/Terrain";
import { Client } from "../../classes/Client";
import { MAP_CENTER } from "../../config/map-metadata";

interface MapViewProps {
  terrains: Terrain[];
  clients: Client[];
}

const MapView: React.FC<MapViewProps> = ({ terrains, clients }) => {
  return (
    <MapContainer
      center={MAP_CENTER}
      zoom={16}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {/* Render Terrain Polygons */}
      {terrains.map((terrain) => (
        <Polygon key={terrain.id} positions={terrain.shape} color="blue">
          <Popup>{terrain.name}</Popup>
        </Polygon>
      ))}

      {/* Render Client Markers */}
      {clients.map((client) => (
        <Marker key={client.id} position={client.coordenates}>
          <Popup>
            {client.name} {client.lastname} ({client.username})
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
