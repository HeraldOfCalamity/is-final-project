import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const LocationBreadCrumb: React.FC = () => {
  const [location, setLocation] = useState<string[]>([]);

  useEffect(() => {
    setLocation(getPathArray());
  }, []);

  const getPathArray = (): string[] => {
    const pathArray = window.location.pathname.split("/").slice(1);
    return pathArray;
  };

  const getBasePath = (): string => {
    const path = "/" + location[0];
    return path;
  };

  const getPathForIndex = (index: number): string => {
    const basePath = getBasePath();
    const composedPath =
      basePath + "/" + location.slice(1, index + 1).join("/");
    console.log(composedPath);
    return composedPath;
  };

  return (
    <>
      <Breadcrumbs>
        {location[0] && (
          <Link href={getBasePath()} underline="hover" color="inherit">
            <Typography variant="h6">{location[0].toUpperCase()}</Typography>
          </Link>
        )}
        {location.length > 1 &&
          location.map(
            (path, i) =>
              i > 0 && (
                <Link key={path} underline="hover" href={getPathForIndex(i)}>
                  {path}
                </Link>
              )
          )}
      </Breadcrumbs>
    </>
  );
};

export default LocationBreadCrumb;
