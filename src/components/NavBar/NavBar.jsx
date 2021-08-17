import { useRef, useEffect } from 'react';
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
              <a href="#" className="nav-link">
                LogIn
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Register
              </a>
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
