interface Route {
  path: string;
  text: string;
}

const navbarRoutes: Route[] = [
  { path: "/", text: "Home" },
  { path: "/clients", text: "Clients" },
  { path: "/terrains", text: "Terrains" },
  // { path: "/about", text: "About" },
];

export default navbarRoutes;
