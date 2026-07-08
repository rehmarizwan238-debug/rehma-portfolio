import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

import "./styles/global.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/about.css";
import "./styles/skills.css";
import "./styles/services.css";
import "./styles/projects.css";
import "./styles/testimonials.css";
import "./styles/contact.css";
import "./styles/footer.css";
import "./styles/scrolltop.css";

function App() {
  return (
    <div className="app">

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Services />

      <Projects />

      <Testimonials />

      <Contact />

      <Footer />

      <ScrollTop />

    </div>
  );
}

export default App;