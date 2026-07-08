import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container navbar">

        <a
          href="#home"
          className="logo"
          aria-label="Go to Home"
        >
          Rehma<span>.</span>
        </a>

        <nav aria-label="Main Navigation">
          <ul
            id="primary-navigation"
            className={menuOpen ? "nav-links active" : "nav-links"}
          >
            <li>
              <a href="#home" onClick={closeMenu}>
                Home
              </a>
            </li>

            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>

            <li>
              <a href="#skills" onClick={closeMenu}>
                Skills
              </a>
            </li>

            <li>
              <a href="#services" onClick={closeMenu}>
                Services
              </a>
            </li>

            <li>
              <a href="#projects" onClick={closeMenu}>
                Projects
              </a>
            </li>

            <li>
              <a href="#testimonials" onClick={closeMenu}>
                Testimonials
              </a>
            </li>

            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="nav-right">

          <ThemeToggle />

          <button
            type="button"
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;