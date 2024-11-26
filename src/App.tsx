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
import { CLIENTS } from "./public/sample-client-data";
import { useEffect, useState } from "react";

const App: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    setClients(CLIENTS);
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="map" element={<MapComponent />} />
          <Route path="clients" element={<ClientLayout />}>
            <Route index element={<ClientTable clients={clients} />} />
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
