import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../styles/scrolltop.css";

function ScrollTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          className="scroll-top"
          onClick={scrollTop}
          aria-label="Scroll To Top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

export default ScrollTop;