import React from "react";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";
import { Terrain } from "../../classes/Terrain";
import { Client } from "../../classes/Client";

interface StatisticsPanelProps {
  terrains: Terrain[];
  clients: Client[];
}

const StatisticsPanel: React.FC<StatisticsPanelProps> = ({
  terrains,
  clients,
}) => {
  const colors = ["#0088FE", "#FFBB28", "#FF8042"];

  // Calculate client distribution
  const clientDistribution = terrains.map((terrain) => {
    const count = clients.filter((client) =>
      isClientInTerrain(client.coordenates, terrain.shape)
    ).length;
    return { name: terrain.name, value: count };
  });

  return (
    <div
      style={{
        width: "100%",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h3>Dashboard Statistics</h3>
      <p>Total Clients: {clients.length}</p>

      <PieChart width={400} height={300}>
        <Pie
          data={clientDistribution}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {clientDistribution.map((_, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

// Utility function to check if a point is within a polygon
const isClientInTerrain = (
  point: [number, number],
  polygon: [number, number][]
) => {
  const [x, y] = point;
  let inside = false;

  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const [xi, yi] = polygon[i];
    const [xj, yj] = polygon[j];

    const intersect =
      yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;

    if (intersect) inside = !inside;
  }

  return inside;
};

export default StatisticsPanel;
