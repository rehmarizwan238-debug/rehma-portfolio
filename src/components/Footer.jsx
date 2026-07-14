import "../styles/footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {

  return (

    <footer className="footer">

      <div className="container">

        <h2>

          Rehma <span>Rizwan</span>

        </h2>

        <p className="footer-desc">

          Frontend React Developer passionate about
          building responsive, modern and user-friendly
          web applications with React.js.

        </p>

        <div className="footer-links">

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#contact">Contact</a>

        </div>

        <div className="footer-icons">

          <a
            href="https://github.com/rehmarizwan238-debug"
            target="_blank"
            rel="noreferrer"
          >

            <FaGithub />

          </a>

          <a
            href="https://www.linkedin.com/in/rehma-rizwan-7b4964400"
            target="_blank"
            rel="noreferrer"
          >

            <FaLinkedin />

          </a>

          <a
            href="mailto:rehma.rizwan238@gmail.com"
          >

            <FaEnvelope />

          </a>

        </div>
                <div className="footer-bottom">

          <p>

            © 2026 Rehma Rizwan. All Rights Reserved.

          </p>

          <a
            href="#home"
            className="back-top"
            aria-label="Back to Top"
          >

            <FaArrowUp />

          </a>

        </div>

      </div>

    </footer>

  );
}

export default Footer;