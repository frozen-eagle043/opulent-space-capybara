import React, { useEffect, useState } from "react";
//import Header from "./Header";
import Footer from "./Footer";
// import Body from "./Body";
// import { Parallax } from "react-parallax";
import Slider from "react-slick"; // Importing the Slider component
import Navbar from "./Navbar";
//import { Speaker } from "@mui/icons-material";
import Speakers from "./Speaker";
//import "./HomeStyle.css"; // Ensure you have imported your CSS styles

// Sample images. Replace these URLs with your own image URLs.
const images = [
  "https://media.licdn.com/dms/image/C5116AQGJS3IC-758ZQ/profile-displaybackgroundimage-shrink_350_1400/0/1579180318391?e=1712188800&v=beta&t=JpZPS4T0hN94saBELFhd6NMvTu1wkr-i-bL8UMZd3H4",
  "https://media.licdn.com/dms/image/C5116AQGJS3IC-758ZQ/profile-displaybackgroundimage-shrink_350_1400/0/1579180318391?e=1712188800&v=beta&t=JpZPS4T0hN94saBELFhd6NMvTu1wkr-i-bL8UMZd3H4",
  "https://media.licdn.com/dms/image/C5116AQGJS3IC-758ZQ/profile-displaybackgroundimage-shrink_350_1400/0/1579180318391?e=1712188800&v=beta&t=JpZPS4T0hN94saBELFhd6NMvTu1wkr-i-bL8UMZd3H4",
];

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Settings for the slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="parallax-content">
      <Navbar />
      <Slider {...sliderSettings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt="Slide"
              style={{ width: "100%", height: "500px", objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>
      <h1>
        Intelligent Signal Processing and Effective Communication Technologies
        (INSPECT 2024)
      </h1>
      <div className="parallax-bg">
        <h2>Welcome to Our Website</h2>
        <div>
          <Speakers />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
