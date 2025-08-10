import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img
            src="/images/styled_header_contrast_transparent_bkg.png"
            alt="Seventh Heaven Tattoo"
            className="navbar-logo-image"
          />
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
  );
}

export default Navbar;
