import "../styles/services.css";
import { services } from "../data/services";

import {
  FaLaptopCode,
  FaReact,
  FaMobileAlt,
} from "react-icons/fa";

function Services() {

  return (

    <section
      id="services"
      className="services"
    >

      <div className="container">

        {/* Section Heading */}

        <div className="section-heading">

          <span>What I Do</span>

          <h2>My Services</h2>

          <p>
            I provide modern frontend development services
            focused on responsive design, clean code and
            excellent user experience.
          </p>

        </div>

        {/* Top Service Highlights */}

        <div className="services-top">

          <div className="service-highlight">

            <FaLaptopCode />

            <h3>Frontend Development</h3>

            <p>
              Responsive websites using
              HTML5, CSS3 & JavaScript.
            </p>

          </div>

          <div className="service-highlight">

            <FaReact />

            <h3>React Development</h3>

            <p>
              Interactive React applications
              with reusable components.
            </p>

          </div>

          <div className="service-highlight">

            <FaMobileAlt />

            <h3>Responsive UI</h3>

            <p>
              Mobile-friendly layouts
              for every screen size.
            </p>

          </div>

        </div>

        {/* Service Cards */}

        <div className="services-grid">
                    {services.map((service) => (

            <div
              className="service-card"
              key={service.id}
            >

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <button
                type="button"
                className="service-btn"
              >
                Learn More
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Services;