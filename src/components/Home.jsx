import React, { useEffect, useState } from "react";
//import Header from "./Header";
import Footer from "./Footer";
// import Body from "./Body";
// import { Parallax } from "react-parallax";
import Slider from "react-slick"; // Importing the Slider component
import Navbar from "./Navbar";
//import { Speaker } from "@mui/icons-material";
import Speakers from "./Speaker";
import About from "./About";
import Dates from "./Dates";
//import "./HomeStyle.css"; // Ensure you have imported your CSS styles
import EndorsedBy from "./EndorsedBy";
import SponsoredBy from "./SponsoredBy";
import Container from 'react-bootstrap/Container';

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
      <Slider {...sliderSettings} st>
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
          
      <Container fluid style={{padding: 0}}>
        <EndorsedBy />
      </Container>
    
      <Container fluid style={{padding: 0}}>
        <SponsoredBy />
      </Container>

      <div className="parallax-bg">
      
        <div>
          <Speakers />
        </div>
      </div>
      <div>
        <About />
      </div>
      <div>
        <Dates />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
