import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
  FaCode,
} from "react-icons/fa";

import "../styles/hero.css";

function Hero() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section
      className="hero"
      id="home"
    >

      {/* Background Shapes */}

      <div className="hero-bg-circle circle-1"></div>
      <div className="hero-bg-circle circle-2"></div>

      <div className="container hero-container">

        {/* ================= LEFT SIDE ================= */}

        <div
          className="hero-left"
          data-aos="fade-right"
        >

          <span className="hero-tag">
            🚀 Available For Internship & Frontend Projects
          </span>

          <h3>
            Hello, I'm
          </h3>

          <h1>
            Rehma <span>Rizwan</span>
          </h1>

          <h2>
            Frontend React Developer
          </h2>

          <p>
            I design and build modern, responsive and
            user-friendly web applications using
            React.js, JavaScript, HTML5 and CSS3.
            My focus is creating clean UI, smooth user
            experience and high-performance websites
            that solve real-world problems.
          </p>

          {/* Hero Statistics */}

          <div className="hero-stats">

            <div className="stat-box">
              <h3>10+</h3>
              <span>Projects</span>
            </div>

            <div className="stat-box">
              <h3>100%</h3>
              <span>Responsive</span>
            </div>

            <div className="stat-box">
              <h3>24/7</h3>
              <span>Learning</span>
            </div>

          </div>

          {/* Buttons */}

          <div className="hero-buttons">

            <a
              href="/resume.pdf"
              download
              className="primary-btn"
            >
              <FaDownload />

              Download Resume

            </a>
          
            <a
              href="#projects"
              className="secondary-btn"
            >
              View Projects

              <FaArrowRight />
            </a>
            </div>
                      {/* Social Icons */}

          <div className="hero-social">

            <a
              href="https://github.com/rehmarizwan238-debug"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/rehma-rizwan-7b4964400"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:rehma.rizwan238@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div
          className="hero-right"
          data-aos="fade-left"
        >

          <div className="hero-image">

            <img
              src="/profile.png"
              alt="Rehma Rizwan"
              loading="lazy"
            />

            {/* Floating Badge */}

            <div className="floating-badge">

              <FaCode />

              <span>React Developer</span>

            </div>

            {/* Experience Card */}

            <div className="experience-card">

              <h3>10+</h3>

              <p>Completed Projects</p>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Hero;