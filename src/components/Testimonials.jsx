import "../styles/testimonials.css";
import { testimonials } from "../data/testimonials";
import { FaStar } from "react-icons/fa";

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">

        <h2 className="section-title">
          Client Testimonials
        </h2>

        <div className="testimonials-grid">

          {testimonials.map((item) => (

            <div className="testimonial-card" key={item.id}>

              <div className="stars">

                {[...Array(item.rating)].map((_, index) => (
                  <FaStar key={index} />
                ))}

              </div>

              <p className="review">
                "{item.review}"
              </p>

              <h3>{item.name}</h3>

              <span>{item.role}</span>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;