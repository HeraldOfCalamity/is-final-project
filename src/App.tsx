import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import MapComponent from "./components/MapComponent";
import { Container } from "@mui/material";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/map" element={<MapComponent />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
