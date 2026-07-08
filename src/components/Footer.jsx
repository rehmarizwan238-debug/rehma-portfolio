import "../styles/footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <h2>Rehma Rizwan</h2>

      <p>Frontend React Developer</p>

      <div className="footer-icons">

        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>

        <a href="mailto:rehma@example.com">
          <FaEnvelope />
        </a>

      </div>

      <p className="copyright">
        © 2026 Rehma Rizwan. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;