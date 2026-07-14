import "../styles/testimonials.css";
import { testimonials } from "../data/testimonials";

import {
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";

function Testimonials() {

  return (

    <section
      className="testimonials"
      id="testimonials"
    >

      <div className="container">

        {/* Section Heading */}

        <div className="section-heading">

          <span>Testimonials</span>

          <h2>What Clients Say</h2>

          <p>
            Feedback from clients and project collaborations
            reflecting quality, professionalism and
            commitment to delivering responsive websites.
          </p>

        </div>

        <div className="testimonials-grid">
                    {testimonials.map((item) => (

            <div
              className="testimonial-card"
              key={item.id}
            >

              <FaQuoteLeft className="quote-icon" />

              <div className="stars">

                {[...Array(item.rating)].map((_, index) => (

                  <FaStar key={index} />

                ))}

              </div>

              <p className="review">
                "{item.review}"
              </p>

              <div className="client-info">

                <h3>{item.name}</h3>

                <span>{item.role}</span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Testimonials;