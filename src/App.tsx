import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import MapComponent from "./components/MapComponent";
import { Container } from "@mui/material";
import ClientTable from "./pages/clients/ClientTable";
import NotFoundPage from "./pages/NotFoundPage";
import ClientLayout from "./pages/clients/ClientLayout";
import NewClient from "./pages/clients/NewClient";
import { Client } from "./classes/Client";
import { useEffect, useState } from "react";
import {
  deleteClient,
  getClients,
  updateClient,
} from "./services/client-service";

const App: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    const fetchedClients = await getClients();
    setClients(fetchedClients);
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

  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="map" element={<MapComponent />} />
          <Route path="clients" element={<ClientLayout />}>
            <Route
              index
              element={
                <ClientTable
                  clients={clients}
                  onDelete={handleClientDeletion}
                  onEdit={handleClientEdition}
                />
              }
            />
            <Route path="new" element={<NewClient />} />
            {/* <Route path='edit' element={<EditClient />} /> */}
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
