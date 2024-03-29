// import React, { useEffect, useState } from "react";

import Slider from "react-slick"; // Importing the Slider component

import About from "./About";
import GeneralChairs from "./GeneralChairs";

import inspect_home from "../assets/images/home_page/inspect_2024.png";
import abv_iiitm from "../assets/images/home_page/abv_iiitm1.png";
// import iiitm_build from "../assets/images/home_page/iiitm_building.png";
// import fort1 from "../assets/images/home_page/Gwalior_Fort_front.jpg";
import fort2 from "../assets/images/home_page/gwalior_fort_side2.png";
// import conv from "../assets/images/home_page/conv.jpg";

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  // const loc_images = [inspect_home, abv_iiitm, fort2];
  const loc_images = [inspect_home];
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
                style={{ width: "100%", height: "80vh" }} // {, objectFit: "cover"}
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
      <div
        style={{
          fontSize: "18px",
          textAlign: "justify",
          margin: "5px 90px 20px 90px",

          padding: "8px",
        }}
      >
        Welcome to the{" "}
        <b>
          2024 International Conference on Intelligent Signal Processing and
          Effective Communication Technologies (INSPECT-2024)
        </b>
        , to be held during <b>7-8th December 2024</b> at Gwalior, India. The
        conference is the premier forum for the presentation of new advances and
        research results in varied disciplines and their associated applications
        in all aspects of Communication Technology, Signal Processing
        Informatics, and Machine Learning that consider the improvement and
        development of quality of human life and better living on earth. In
        addition to the technical sessions, there will be invited sessions,
        panel sessions, and keynote addresses. The aim of the conference is to
        stimulate interaction and convergent among researchers active in the
        areas of Communication Technology, Signal Processing Informatics, and
        Machine Learning.
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
