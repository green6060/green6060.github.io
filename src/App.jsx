import "./App.css";
import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <div className="logo-placeholder">Logo</div>
          </div>

          {/* Hamburger menu button for mobile */}
          <button
            className="navbar-toggle"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span className={`hamburger ${isMenuOpen ? "open" : ""}`}>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </span>
          </button>

          <ul className={`navbar-nav ${isMenuOpen ? "open" : ""}`}>
            <li>
              <a href="#" className="nav-link">
                DM for Booking
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Artist Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Reviews
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Aftercare
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Directions
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <header>
        <h1>Seventh Heaven Tattoo</h1>
      </header>
    </div>
  );
}

export default App;
