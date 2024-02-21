import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import About from "./About";
import GeneralChairs from "./GeneralChairs";

import inspect_home from "../assets/images/home_page/inspect_2024.png";
import abv_iiitm from "../assets/images/home_page/abv_iiitm.jpg";
import fort2 from "../assets/images/home_page/gwalior_fort_side.png";

const Home = () => {
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
          // height: "100vh", // Set height to 20% of the viewport height
          overflow: "hidden", // Hide overflow to keep the height fixed
        }}
      >
        <Slider {...sliderSettings}>
          {loc_images.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt="Slide"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // Ensure the image covers the area
                }}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div
        style={{
          margin: "2px", // Adjusted margin
          border: "1px solid white",
          borderRadius: "10px",
          boxShadow: "5px 5px #888888",
        }}
        className="parallax-content"
      >
        <div style={{ fontWeight: "bold" }}>
          <h1
            style={{
              color: "rgb(235,236,222)",
              background:
                "linear-gradient(180deg, rgba(235,76,122,1) 0%, rgba(114,155,228,1) 100%, rgba(236,50,50,0.6475840336134453) 100%)",
              fontWeight: "bold",
              padding: "10px", // Added padding
            }}
          >
            Intelligent Signal Processing and Effective Communication
            Technologies
          </h1>
          <h1 style={{ fontWeight: "bold" }}> (INSPECT 2024) </h1>
        </div>
        <div>
          <About />
        </div>
        <div>
          <GeneralChairs />
        </div>
      </div>
    </div>
  );
};

export default Home;
