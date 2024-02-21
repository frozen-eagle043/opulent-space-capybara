// import React, { useEffect, useState } from "react";

import Slider from "react-slick"; // Importing the Slider component

import About from "./About";
import GeneralChairs from "./GeneralChairs";

import inspect_home from "../assets/images/home_page/inspect_2024.png";
import abv_iiitm from "../assets/images/home_page/abv_iiitm.jpg";
// import iiitm_build from "../assets/images/home_page/iiitm_building.png";
// import fort1 from "../assets/images/home_page/Gwalior_Fort_front.jpg";
import fort2 from "../assets/images/home_page/gwalior_fort_side.png";
// import conv from "../assets/images/home_page/conv.jpg";

const Home = () => {
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const handleScroll = () => {

  //   setScrollPosition(window.scrollY);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // Settings for the slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const loc_images = [inspect_home, abv_iiitm, fort2];

  return (
    <div>
      <div
        style={{
          margin: "5px 90px 20px 90px",
          border: "1px solid white",
          borderRadius: "10px",
          boxShadow: "5px 5px #888888",
        }}
        className="parallax-content"
      >
        <Slider {...sliderSettings} st>
          {loc_images.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt="Slide"
                style={{ width: "100%", height: "700px" }} // {, objectFit: "cover"}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div
        style={{
          fontWeight: "bold",
        }}
      >
        <h1
          style={{
            color: "rgb(235,76,122)",
            color:
              "linear-gradient(90deg, rgba(235,76,122,1) 0%, rgba(114,155,228,1) 100%, rgba(236,50,50,0.6475840336134453) 100%)",
            fontWeight: "bold",
          }}
        >
          Intelligent Signal Processing and Effective Communication Technologies
        </h1>
        <h1
          style={{
            fontWeight: "bold",
          }}
        >
          (INSPECT 2024)
        </h1>
      </div>
      <div>
        <About />
      </div>
      <div>
        <GeneralChairs />
      </div>
    </div>
  );
};

export default Home;
