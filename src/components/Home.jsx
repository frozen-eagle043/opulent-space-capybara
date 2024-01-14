import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Header />
      <h1>
        {" "}
        Intelligent Signal Processing and Effective Communication Technologies
        (INSPECT 2024){" "}
      </h1>
      <Body />

      <div className={`content ${scrollPosition > 600 ? "ease-in" : ""}`}>
        {/* Your content goes here */}
        <h2>Welcome to Our Website</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          aliquam, odio a consectetur vehicula, mi elit fermentum risus, nec
          tincidunt ligula justo ut ligula. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam aliquam, odio a consectetur
          vehicula, mi elit fermentum risus, nec tincidunt ligula justo ut
          ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam aliquam, odio a consectetur vehicula, mi elit fermentum risus,
          nec tincidunt ligula justo ut ligula. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam aliquam, odio a consectetur
          vehicula, mi elit fermentum risus, nec tincidunt ligula justo ut
          ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam aliquam, odio a consectetur vehicula, mi elit fermentum risus,
          nec tincidunt ligula justo ut ligula. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam aliquam, odio a consectetur
          vehicula, mi elit fermentum risus, nec tincidunt ligula justo ut
          ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam aliquam, odio a consectetur vehicula, mi elit fermentum risus,
          nec tincidunt ligula justo ut ligula.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
