import { Outlet } from "react-router-dom";
import LocationBreadCrumb from "../../components/LocationBreadcrumb";

const TerrainLayout: React.FC = () => {
  return (
    <>
      <LocationBreadCrumb />
      <Outlet />
    </>
  );
};

export default TerrainLayout;
