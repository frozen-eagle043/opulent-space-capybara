// import React, { useEffect, useState } from "react";

import Slider from "react-slick"; // Importing the Slider component

import About from "./About";
import GeneralChairs from "./GeneralChairs";

import inspect_home from "../assets/images/home_page/inspect_2024_2.png";

import City from "./City";
import Conference from "./Conference";

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
          International Conference INSPECT-2024{" "}
          <span class="blink_me"> (Hybrid Mode)</span>
        </h1>{" "}
        <h3>to be held from 7-8th December 2024 at ABV-IIITM Gwalior, India</h3>
        {/* <h1
          style={{
            fontWeight: "bold",
          }}
        >
          (INSPECT 2024)
          <span class="blink_me"> "Hybrid Mode"</span>
        </h1> */}
      </div>
      <div
        style={{
          fontSize: "18px",
          textAlign: "justify",
          margin: "5px 90px 20px 90px",

          padding: "8px",
        }}
      >
        We are thrilled to announce the{" "}
        <b>
          2024 IEEE International Conference on Intelligent Signal Processing
          and Effective Communication Technologies (INSPECT)
        </b>
        , to be held in a groundbreaking hybrid format, seamlessly blending
        in-person and virtual participation. Mark your calendars for{" "}
        <b>7-8 December 2024</b>, as we embark on a journey to explore,
        innovate, and connect with global leaders in Intelligent Signal
        Processing and Effective Communication Technologies.
      </div>
      <div>
        <Conference />
      </div>
      <div>
        <About />
      </div>
      <div>
        <City />
      </div>
      <div>
        <GeneralChairs />
      </div>
    </div>
  );
};

export default Home;
