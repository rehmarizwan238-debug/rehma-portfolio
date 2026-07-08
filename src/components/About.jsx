import "../styles/about.css";

function About() {
  return (
    <section id="about" className="about">

      <div className="container">

        <h2 className="section-title">
          About Me
        </h2>

        <div className="about-content">

          <div className="about-text">

            <h3>
              Frontend & React Developer
            </h3>

            <p>
              I am a passionate Frontend Developer who enjoys
              building modern, responsive and user-friendly
              websites using React.js, JavaScript, HTML and CSS.
            </p>

            <p>
              My goal is to create professional web applications
              with clean code, optimized performance and
              excellent user experience.
            </p>

            <button className="about-btn">
              Download Resume
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;