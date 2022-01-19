import { Link } from "react-router-dom";
import logo from "./cocktail_icon.png";
import "./Nav.css";

function Nav() {
  return (
    <nav className="Nav">
      <img className="nav_logo" src={logo} alt="cocktail icon" />
      <Link className="nav_link" to="/">
        Home
      </Link>
      <Link className="nav_link" to="/about">
        About
      </Link>
    </nav>
  );
}
export default Nav;
