import { FaDownload, FaGraduationCap, FaLaptopCode, FaUserTie } from "react-icons/fa";
import "../styles/about.css";

function About() {
  return (
    <section id="about" className="about">

      <div className="container">

        <div className="section-heading">

          <span>Get To Know Me</span>

          <h2>About Me</h2>

          <p>
            Passionate Frontend Developer dedicated to creating
            modern, responsive and user-friendly web applications.
          </p>

        </div>

        <div className="about-content">

          {/* Left Side */}

          <div className="about-left">

            <div className="about-image">

              <img
                src="/profile.png"
                alt="Rehma Rizwan"
              />

            </div>

          </div>

          {/* Right Side */}

          <div className="about-right">

            <h3>
              Frontend & React Developer
            </h3>

            <p>
              I am a passionate Frontend Developer with a strong
              interest in building responsive, modern and interactive
              web applications using React.js, JavaScript, HTML5 and CSS3.
            </p>

            <p>
              I enjoy transforming ideas into real digital products
              with clean code, attractive UI design and excellent
              user experience. My goal is to continuously improve
              my skills and contribute to innovative software projects.
            </p>

            {/* About Cards */}

            <div className="about-cards">

              <div className="about-card">

                <FaGraduationCap />

                <h4>Education</h4>

                <p>BS Computer Science</p>

              </div>

              <div className="about-card">

                <FaLaptopCode />

                <h4>Projects</h4>

                <p>10+ Completed</p>

              </div>

              <div className="about-card">

                <FaUserTie />

                <h4>Experience</h4>

                <p>Frontend Development</p>

              </div>

            </div>

            <a
              href="/resume.pdf"
              download
              className="about-btn"
            >
              <FaDownload />

              Download Resume

            </a>
                        {/* Education Timeline */}

            <div className="about-timeline">

              <div className="timeline-item">
                <div className="timeline-dot"></div>

                <div className="timeline-content">
                  <h4>BS Computer Science</h4>
                  <span>2023 - Present</span>
                  <p>Lahore College for Women University (LCWU)</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>

                <div className="timeline-content">
                  <h4>Intermediate (ICS)</h4>
                  <span>Completed</span>
                  <p>Punjab group of colleges</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>

                <div className="timeline-content">
                  <h4>Matriculation</h4>
                  <span>Completed</span>
                  <p>Science Group</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;