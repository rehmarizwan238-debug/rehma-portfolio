import "../styles/skills.css";
import { skills } from "../data/skills";

import {
  FaCode,
  FaLaptopCode,
  FaAward,
} from "react-icons/fa";

function Skills() {

  return (

    <section
      id="skills"
      className="skills"
    >

      <div className="container">

        {/* Heading */}

        <div className="section-heading">

          <span>My Expertise</span>

          <h2>Professional Skills</h2>

          <p>
            My technical skills and knowledge gained
            through university projects, self-learning
            and practical frontend development.
          </p>

        </div>

        {/* Top Cards */}

        <div className="skills-top">

          <div className="skill-info-card">

            <FaCode />

            <h3>Frontend</h3>

            <p>
              HTML5, CSS3, JavaScript,
              React.js
            </p>

          </div>

          <div className="skill-info-card">

            <FaLaptopCode />

            <h3>Responsive UI</h3>

            <p>
              Mobile First Design &
              Modern Layouts
            </p>

          </div>

          <div className="skill-info-card">

            <FaAward />

            <h3>Problem Solving</h3>

            <p>
              Clean Code &
              Logical Thinking
            </p>

          </div>

        </div>

        {/* Progress Skills */}

        <div className="skills-grid">
                  {skills.map((skill, index) => (

            <div
              className="skill-card"
              key={index}
            >

              <div className="skill-header">

                <h3>{skill.name}</h3>

                <span>{skill.level}</span>

              </div>

              <div className="progress-bar">

                <div
                  className="progress"
                  style={{
                    width: skill.level,
                  }}
                ></div>

              </div>

            </div>

          ))}

        </div>

    </div>

    </section>

  );
}

export default Skills;