import { Outlet } from "react-router-dom";
import LocationBreadCrumb from "../../components/LocationBreadcrumb";

const ClientLayout: React.FC = () => {
  return (
    <>
      <LocationBreadCrumb />
      <Outlet />
    </>
  );
};

export default ClientLayout;
