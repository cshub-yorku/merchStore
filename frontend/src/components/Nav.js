import "../styles/Nav.css";
import cshub from "../assets/cshub.png";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navigation">
      <img
        className="Navbar__Link Navbar__Link-brand"
        src={cshub}
        alt="icon"
        id="icon"
      />

      <div className="Navbar__Link Navbar__Link-toggle">
        <span id="tog">
          <i className="fas fa-bars"></i>
        </span>
      </div>

      <nav className="Navbar__Items Navbar__Items--right">
        <Link to="/">Home</Link>
        <a href="https://www.cshub.tech/Events.html" className="navItems">
          Events
        </a>
        <a href="https://www.cshub.tech/Resources.html" className="navItems">
          Resources
        </a>
        <Link to="/csshop">Store</Link>
      </nav>

      <div className="progress"></div>
    </div>
  );
}
