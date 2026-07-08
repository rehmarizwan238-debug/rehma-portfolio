import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

import "../styles/hero.css";

function Hero() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      className="hero"
      id="home"
      data-aos="fade-up"
    >
      <div className="container hero-container">

        {/* Left Side */}

        <div
          className="hero-left"
          data-aos="fade-right"
        >

          <span className="hero-tag">
            👋 Welcome To My Portfolio
          </span>

          <h3>Hello, I'm</h3>

          <h1>
            Rehma <span>Rizwan</span>
          </h1>

          <h2>Frontend React Developer</h2>

          <p>
            Passionate Frontend Developer specializing in
            React.js, JavaScript, HTML and CSS.
            I build responsive, modern and user-friendly
            web applications with clean code and optimized
            performance.
          </p>

          <div className="hero-buttons">

            <a
              href="/resume.pdf"
              download
              className="primary-btn"
              aria-label="Download Resume"
            >
              <FaDownload />

              Download Resume
            </a>

            <a
              href="#contact"
              className="secondary-btn"
              aria-label="Go to Contact Section"
            >
              Hire Me

              <FaArrowRight />
            </a>

          </div>

          <div className="hero-social">

            <a
              href="https://github.com/rehmarizwan238"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>

            <a
              href="http://linkedin.com/in/rehma-rizwan-7b4964400"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:rehma.rizwan238@gamil.com"
              aria-label="Send Email"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* Right Side */}

        <div
          className="hero-right"
          data-aos="fade-left"
        >

          <div className="hero-image">

            <img
              src="/profile.png"
              alt="Rehma Rizwan - Frontend React Developer"
              loading="lazy"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;