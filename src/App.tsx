import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { Container } from "@mui/material";
import ClientTable from "./pages/clients/ClientTable";
import NotFoundPage from "./pages/NotFoundPage";
import ClientLayout from "./pages/clients/ClientLayout";
import { useEffect, useState } from "react";
import TerrainLayout from "./pages/terrains/TerrainLayout";
import TerrainDisplay from "./pages/terrains/TerrrainDisplay";
import { createTerrain, getTerrains } from "./services/terrain-service";
import { Terrain } from "./classes/Terrain";
import TerrainCreator from "./pages/terrains/TerrainCreator";
import NewClient from "./pages/clients/NewClient";

const App: React.FC = () => {
  const [terrains, setTerrains] = useState<Terrain[]>([]);

  useEffect(() => {
    fetchTerrains();
  }, []);

  const fetchTerrains = async () => {
    const fetchedTerrains = await getTerrains();
    setTerrains(fetchedTerrains);
  };

  const handleNewTerrain = (terrain: Terrain) => {
    createTerrain(terrain);
  };

  const handleCancelTerrain = () => {
    window.location.pathname = "/terrains";
  };

  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="clients" element={<ClientLayout />}>
            <Route index element={<ClientTable />} />
            <Route path="new" element={<NewClient />} />
            {/* <Route path='edit' element={<EditClient />} /> */}
          </Route>
          <Route path="terrains" element={<TerrainLayout />}>
            <Route index element={<TerrainDisplay terrains={terrains} />} />
            <Route
              path="new"
              element={
                <TerrainCreator
                  onSave={handleNewTerrain}
                  onCancel={handleCancelTerrain}
                />
              }
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
