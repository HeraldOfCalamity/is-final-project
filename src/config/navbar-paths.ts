interface Route {
  path: string;
  text: string;
}

const navbarRoutes: Route[] = [
  { path: "/", text: "Home" },
  { path: "/about", text: "About" },
  { path: "/map", text: "Map" },
];

export default navbarRoutes;
