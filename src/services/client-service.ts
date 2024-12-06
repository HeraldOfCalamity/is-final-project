import axios from "axios";
import { Client } from "../classes/Client";
import { CLIENTS_ENDPOINT, URL } from "../config/endpoint-config";

// let CLIENTS: Client[] = [
//   {
//     id: "1",
//     name: "Juan",
//     lastname: "Contreras",
//     username: "JContrerasU",
//     coordenates: [2, 2],
//   },
//   {
//     id: "2",
//     name: "Mike",
//     lastname: "Peredo",
//     username: "MPeredoV",
//     coordenates: [2, 2],
//   },
//   {
//     id: "3",
//     name: "Pedro",
//     lastname: "Galindo",
//     username: "PGalindoX",
//     coordenates: [2, 2],
//   },
//   {
//     id: "4",
//     name: "Ronal",
//     lastname: "Medina",
//     username: "RMedinaO",
//     coordenates: [2, 2],
//   },
//   {
//     id: "5",
//     name: "Juaquin",
//     lastname: "Rodriguez",
//     username: "JRodriguezT",
//     coordenates: [2, 2],
//   },
//   {
//     id: "6",
//     name: "Gonzalo",
//     lastname: "Burgos",
//     username: "GBurgosK",
//     coordenates: [2, 2],
//   },
// ];

const clientUrl = `${URL}/${CLIENTS_ENDPOINT}`;

export const getClients = async (): Promise<Client[]> => {
  // return Promise.resolve(CLIENTS);
  const response = await axios.get(clientUrl);
  return response.data;
};

export const deleteClient = async (id: string): Promise<string> => {
  // CLIENTS = CLIENTS.filter((client) => client.id !== id);
  // return Promise.resolve(true);
  const response = await axios.delete(`${clientUrl}/${id}`);
  return response.data;
};

export const updateClient = async (updatedClient: Client): Promise<Client> => {
  // CLIENTS = CLIENTS.map((client) =>
  //   client.id === updatedClient.id ? updatedClient : client
  // );
  // return Promise.resolve(updatedClient);
  const response = await axios.patch(
    `${clientUrl}/${updatedClient.id}`,
    updatedClient
  );
  return response.data;
};

export const createClient = async (newClient: Client): Promise<Client> => {
  // CLIENTS.push(newClient);
  // console.log(CLIENTS);
  // return Promise.resolve(newClient);
  const response = await axios.post(clientUrl, newClient);
  alert("Successfully created client");
  return response.data;
};
