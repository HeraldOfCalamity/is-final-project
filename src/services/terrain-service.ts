import { Terrain } from "../classes/Terrain";

let TERRAINS: Terrain[] = [
  {
    id: "1",
    name: "Terreno 1",
    coordinates: [-17.413388, -66.046402],
    shape: [
      [-17.413381, -66.046535],
      [-17.413294, -66.046478],
      [-17.413287, -66.046445],
      [-17.413395, -66.046266],
      [-17.413501, -66.046342],
    ],
  },
  {
    id: "2",
    name: "Terreno 2",
    coordinates: [-17.413509, -66.046205],
    shape: [
      [-17.413501, -66.046342],
      [-17.413395, -66.046266],
      [-17.413502, -66.046089],
      [-17.413536, -66.046081],
      [-17.413619, -66.046134],
    ],
  },
  {
    id: "3",
    name: "Terreno 3",
    coordinates: [-17.413483, -66.046464],
    shape: [
      [-17.413453, -66.04658],
      [-17.413381, -66.046535],
      [-17.413501, -66.046342],
      [-17.413575, -66.046387],
    ],
  },
  {
    id: "4",
    name: "Terreno 4",
    coordinates: [-17.413605, -66.046254],
    shape: [
      [-17.413575, -66.046387],
      [-17.413501, -66.046342],
      [-17.413619, -66.046134],
      [-17.413694, -66.046187],
    ],
  },
  {
    id: "5",
    name: "Terreno 5",
    coordinates: [-17.413556, -66.046504],
    shape: [
      [-17.413529, -66.046632],
      [-17.413453, -66.04658],
      [-17.413575, -66.046387],
      [-17.413652, -66.046435],
    ],
  },
  {
    id: "6",
    name: "Terreno 6",
    coordinates: [-17.413676, -66.046312],
    shape: [
      [-17.413652, -66.046435],
      [-17.413575, -66.046387],
      [-17.413694, -66.046187],
      [-17.413767, -66.046241],
    ],
  },
  {
    id: "7",
    name: "Terreno 7",
    coordinates: [-17.413636, -66.046565],
    shape: [
      [-17.413607, -66.046683],
      [-17.413529, -66.046632],
      [-17.413652, -66.046435],
      [-17.413726, -66.046489],
    ],
  },
  {
    id: "8",
    name: "Terreno 8",
    coordinates: [-17.41375, -66.046359],
    shape: [
      [-17.413726, -66.046489],
      [-17.413652, -66.046435],
      [-17.413767, -66.046241],
      [-17.413847, -66.046289],
    ],
  },
  {
    id: "9",
    name: "Terreno 9",
    coordinates: [-17.41375, -66.046359],
    shape: [
      [-17.413763, -66.046743],
      [-17.413718, -66.046755],
      [-17.413607, -66.046683],
      [-17.413726, -66.046489],
      [-17.41384, -66.046568],
    ],
  },
  {
    id: "10",
    name: "Terreno 10",
    coordinates: [-17.413833, -66.046426],
    shape: [
      [-17.41384, -66.046568],
      [-17.413726, -66.046489],
      [-17.413847, -66.046289],
      [-17.413909, -66.046338],
      [-17.413925, -66.046379],
    ],
  },
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
