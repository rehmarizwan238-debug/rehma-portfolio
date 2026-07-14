import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 120;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
          setActiveLink(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className={scrolled ? "header scrolled" : "header"}>
      <div className="container navbar">
        {/* Logo */}

        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          Rehma<span>.</span>
        </a>

        {/* Navigation */}

        <nav>
          <ul
            className={menuOpen ? "nav-links active" : "nav-links"}
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  className={
                    activeLink === item.id ? "active-link" : ""
                  }
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side */}

        <div className="nav-right">

          <a
            href="/Resume.pdf"
            download
            className="resume-btn"
          >
            <FaDownload />
            Resume
          </a>

          <ThemeToggle />

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen ? "Close Menu" : "Open Menu"
            }
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>
    </header>
  );
}

export default Navbar;