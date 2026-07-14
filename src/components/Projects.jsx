import { useState } from "react";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaSearch,
} from "react-icons/fa";

import { projects } from "../data/projects";

import "../styles/projects.css";

function Projects() {

  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase()) ||
    project.description.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <section
      id="projects"
      className="projects"
    >

      <div className="container">

        {/* Heading */}

        <div className="section-heading">

          <span>Portfolio</span>

          <h2>Featured Projects</h2>

          <p>
            A collection of projects demonstrating
            my frontend development skills,
            responsive design and React experience.
          </p>

        </div>

        {/* Search */}

        <div className="project-search">

          <FaSearch />

          <input
            type="text"
            placeholder="Search project..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />

        </div>

        {/* Grid */}

        <div className="projects-grid">
                    {filteredProjects.map((project) => (

            <div
              className="project-card"
              key={project.id}
            >

              <img
                src={project.image}
                alt={project.title}
              />

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                {/* Technology Stack */}

                <div className="tech-stack">

                  {project.technologies.map((tech, index) => (

                    <span key={index}>
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Buttons */}

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