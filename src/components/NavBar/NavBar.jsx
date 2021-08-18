import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  return (
    <div>
      <header className="header">
        <nav className="navbar">
          <a href="/" className="nav-logo">
            OMDB
          </a>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link className="nav-link" to={"/login"}>
                LogIn
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/signup"}>
                SignUp
              </Link>
            </li>
          </ul>
          <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
