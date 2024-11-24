import { Link } from "react-router-dom";
import navbarRoutes from "../config/navbar-paths";

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        {navbarRoutes.map((route) => (
          <li>
            <Link key={route.text} to={route.path}>
              {route.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
