import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

import "../styles/contact.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {

  const form = useRef();

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");

  useEffect(() => {

    AOS.init({
      duration:1000,
      once:true,
    });

  }, []);

  const sendEmail = (e) => {

    e.preventDefault();

    setLoading(true);

    setSuccess("");

    setError("");

    emailjs

      .sendForm(

        "service_opzmnqc",

        "template_9dg6t09",

        form.current,

        "-6Q9hQGw75Ybx2x0K"

      )

      .then(() => {

        setSuccess("✅ Message sent successfully!");

        setLoading(false);

        form.current.reset();

      })

      .catch(() => {

        setError("❌ Something went wrong.");

        setLoading(false);

      });

  };

  return (

    <section
      className="contact"
      id="contact"
    >

      <div className="container">

        <div className="section-heading">

          <span>Contact</span>

          <h2>Let's Work Together</h2>

          <p>

            Have an idea or project?

            Feel free to contact me anytime.

          </p>

        </div>

        <div className="contact-container">

          {/* Left Side */}

          <div
            className="contact-info"
            data-aos="fade-right"
          >

            <h3>

              Get In Touch

            </h3>

            <p>

              I'm always open to discussing

              new opportunities, internships

              and frontend projects.

            </p>

            <div className="info-item">

              <FaEnvelope />

              <span>

                rehma.rizwan238@gmail.com

              </span>

            </div>

            <div className="info-item">

              <FaPhoneAlt />

              <span>

                +92 348 7134292

              </span>

            </div>

            <div className="info-item">

              <FaMapMarkerAlt />

              <span>

                Lahore, Pakistan

              </span>

            </div>

            <div className="social-links">

              <a
                href="https://github.com/rehmarizwan238-debug"
                target="_blank"
                rel="noreferrer"
              >

                <FaGithub />

              </a>

              <a
                href="https://linkedin.com/in/rehma-rizwan-7b4964400"
                target="_blank"
                rel="noreferrer"
              >

                <FaLinkedin />

              </a>

            </div>

          </div>

          {/* Contact Form */}

          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
            data-aos="fade-left"
          >
                      <label>

              Full Name

            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              required
            />

            <label>

              Email Address

            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />

            <label>

              Subject

            </label>

            <input
              type="text"
              name="subject"
              placeholder="Enter subject"
              required
            />

            <label>

              Message

            </label>

            <textarea
              name="message"
              rows="6"
              placeholder="Write your message..."
              required
            ></textarea>

            {success && (

              <p className="success-message">

                {success}

              </p>

            )}

            {error && (

              <p className="error-message">

                {error}

              </p>

            )}

            <button
              type="submit"
              className="contact-btn"
              disabled={loading}

            >

              <FaPaperPlane />

              {loading ? "Sending..." : "Send Message"}
              </button>

          </form>

        </div>

      </div>

    </section>

  );
}

export default Contact;