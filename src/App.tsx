import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { Container } from "@mui/material";
import ClientTable from "./pages/clients/ClientTable";
import NotFoundPage from "./pages/NotFoundPage";
import ClientLayout from "./pages/clients/ClientLayout";
import ClientForm from "./pages/clients/ClientForm";
import { Client, ClientFormField } from "./classes/Client";
import { useEffect, useState } from "react";
import {
  createClient,
  deleteClient,
  getClients,
  updateClient,
} from "./services/client-service";
import TerrainLayout from "./pages/terrains/TerrainLayout";
import TerrainDisplay from "./pages/terrains/TerrrainDisplay";
import { getTerrains } from "./services/terrain-service";
import { Terrain } from "./classes/Terrain";

const App: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [terrains, setTerrains] = useState<Terrain[]>([]);

  const emptyClient: Client = {
    id: "",
    name: "",
    lastname: "",
    username: "",
  };

  const newClientFormFields: ClientFormField[] = [
    { fieldName: "id", disabled: false },
    { fieldName: "username", disabled: false },
    { fieldName: "name", disabled: false },
    { fieldName: "lastname", disabled: false },
  ];

  const editClientFormFields: ClientFormField[] = [
    { fieldName: "id", disabled: true },
    { fieldName: "username", disabled: false },
    { fieldName: "name", disabled: false },
    { fieldName: "lastname", disabled: false },
  ];

  useEffect(() => {
    fetchClients();
    fetchTerrains();
  }, []);

  const fetchClients = async () => {
    const fetchedClients = await getClients();
    setClients(fetchedClients);
  };

  const fetchTerrains = async () => {
    const fetchedTerrains = await getTerrains();
    setTerrains(fetchedTerrains);
  };

  const handleClientDeletion = async (clientId: string) => {
    const confirmed = await deleteClient(clientId);
    if (confirmed) {
      fetchClients();
    }
  };

  const handleClientEdition = async (updatedClient: Client) => {
    const editedClient = await updateClient(updatedClient);
    console.log("updatedClient:", editedClient);
    fetchClients();
  };

  const handleNewClient = (client: Client) => {
    createClient(client);
    redirectToClientTable();
  };

  const redirectToClientTable = (): void => {
    window.location.pathname = "/clients";
    fetchClients();
  };

  const handleCloseNewClientForm = () => {
    redirectToClientTable();
  };

  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="clients" element={<ClientLayout />}>
            <Route
              index
              element={
                <ClientTable
                  clientFields={editClientFormFields}
                  clients={clients}
                  onDelete={handleClientDeletion}
                  onEdit={handleClientEdition}
                />
              }
            />
            <Route
              path="new"
              element={
                <ClientForm
                  clientFields={newClientFormFields}
                  handleCancel={handleCloseNewClientForm}
                  formTitle="Client Registration"
                  handleFormSubmit={handleNewClient}
                  initialClientValue={emptyClient}
                />
              }
            />
            {/* <Route path='edit' element={<EditClient />} /> */}
          </Route>
          <Route path="terrains" element={<TerrainLayout />}>
            <Route index element={<TerrainDisplay terrains={terrains} />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
