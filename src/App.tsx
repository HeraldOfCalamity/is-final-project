import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import MapComponent from "./components/MapComponent";
import { Container } from "@mui/material";
import ClientList from "./pages/clients/ClientList";
import NotFoundPage from "./pages/NotFoundPage";
import ClientLayout from "./pages/clients/ClientLayout";
import NewClient from "./pages/clients/NewClient";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="map" element={<MapComponent />} />
          <Route path="clients" element={<ClientLayout />}>
            <Route index element={<ClientList />} />
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
