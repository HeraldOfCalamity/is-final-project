import { Client } from "../classes/Client";

let CLIENTS: Client[] = [
  { id: "1", name: "Juan", lastname: "Contreras", username: "JContrerasU" },
  { id: "2", name: "Mike", lastname: "Peredo", username: "MPeredoV" },
  { id: "3", name: "Pedro", lastname: "Galindo", username: "PGalindoX" },
  { id: "4", name: "Ronal", lastname: "Medina", username: "RMedinaO" },
  { id: "5", name: "Juaquin", lastname: "Rodriguez", username: "JRodriguezT" },
  { id: "6", name: "Gonzalo", lastname: "Burgos", username: "GBurgosK" },
];

export const getClients = (): Promise<Client[]> => {
  return Promise.resolve(CLIENTS);
};

export const deleteClient = (id: string): Promise<boolean> => {
  CLIENTS = CLIENTS.filter((client) => client.id !== id);
  return Promise.resolve(true);
};

export const updateClient = (updatedClient: Client): Promise<Client> => {
  CLIENTS = CLIENTS.map((client) =>
    client.id === updatedClient.id ? updatedClient : client
  );
  return Promise.resolve(updatedClient);
};
