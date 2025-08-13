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
            <a
              href="https://www.instagram.com/7th_heaven_tattoo?igsh=MXBuYXE2b2dzcDRmMQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              DM for Booking
            </a>
          </li>
          <li>
            <a
              href="#artist-portfolio"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("artist-portfolio");
                if (element) {
                  const navbarHeight =
                    document.querySelector(".navbar").offsetHeight;
                  const elementPosition = element.offsetTop - navbarHeight - 20;
                  window.scrollTo({
                    top: elementPosition,
                    behavior: "smooth",
                  });
                }
                setIsMenuOpen(false);
              }}
            >
              Artist Portfolio
            </a>
          </li>
          <li>
            <a
              href="#reviews"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("reviews");
                if (element) {
                  const navbarHeight =
                    document.querySelector(".navbar").offsetHeight;
                  const elementPosition = element.offsetTop - navbarHeight - 20;
                  window.scrollTo({
                    top: elementPosition,
                    behavior: "smooth",
                  });
                }
                setIsMenuOpen(false);
              }}
            >
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
