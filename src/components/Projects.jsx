import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/projects";
import "../styles/projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">

      <div className="container">

        <h2 className="section-title">
          My Projects
        </h2>

        <div className="projects-grid">

          {projects.map((project) => (

            <div className="project-card" key={project.id}>

              <img
                src={project.image}
                alt={project.title}
              />

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-stack">

                  {project.technologies.map((tech, index) => (

                    <span key={index}>
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="project-buttons">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="github-btn"
                  >
                    <FaGithub />

                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="demo-btn"
                  >
                    <FaExternalLinkAlt />

                    Live Demo
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;