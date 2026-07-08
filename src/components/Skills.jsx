import "../styles/skills.css";
import { skills } from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="skills">

      <div className="container">

        <h2 className="section-title">
          My Skills
        </h2>

        <div className="skills-grid">

          {skills.map((skill, index) => (

            <div
              className="skill-card"
              key={index}
            >

              <div className="skill-header">

                <h3>{skill.name}</h3>

                <span>
                  {skill.level}
                </span>

              </div>

              <div className="progress-bar">

                <div
                  className="progress"
                  style={{
                    width: skill.level
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