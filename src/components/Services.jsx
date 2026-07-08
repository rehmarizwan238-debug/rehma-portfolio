import "../styles/services.css";
import { services } from "../data/services";

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">

        <h2 className="section-title">
          My Services
        </h2>

        <div className="services-grid">

          {services.map((service) => (

            <div className="service-card" key={service.id}>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;