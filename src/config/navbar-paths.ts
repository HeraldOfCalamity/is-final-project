interface Route {
  path: string;
  text: string;
}

const navbarRoutes: Route[] = [
  { path: "/", text: "Home" },
  { path: "/map", text: "Map" },
  { path: "/clients", text: "Clients" },
  { path: "/about", text: "About" },
];

export default navbarRoutes;
