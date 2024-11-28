import { Terrain } from "../classes/Terrain";

let TERRAINS: Terrain[] = [
  { id: "1", name: "terrain1", coordinates: [23, 23], shape: [[23, 23]] },
];

export const getTerrains = (): Promise<Terrain[]> => {
  return Promise.resolve(TERRAINS);
};

export const deleteTerrain = (id: string): Promise<boolean> => {
  TERRAINS = TERRAINS.filter((terrain) => terrain.id !== id);
  return Promise.resolve(true);
};

export const updateTerrain = (updatedTerrain: Terrain): Promise<Terrain> => {
  TERRAINS = TERRAINS.map((terrain) =>
    terrain.id === updatedTerrain.id ? updatedTerrain : terrain
  );
  return Promise.resolve(updatedTerrain);
};

export const createTerrain = (newTerrain: Terrain): Promise<Terrain> => {
  TERRAINS.push(newTerrain);
  console.log(TERRAINS);
  return Promise.resolve(newTerrain);
};
