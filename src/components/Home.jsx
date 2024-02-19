import React, { useEffect, useState } from "react";
//import Header from "./Header";
// import Footer from "./Footer";
// import Body from "./Body";
// import { Parallax } from "react-parallax";
import Slider from "react-slick"; // Importing the Slider component
// import Navbar from "./Navbar";
//import { Speaker } from "@mui/icons-material";
// import Speakers from "./Speaker";
import About from "./About";
import GeneralChairs from "./GeneralChairs";
// import Dates from "./Dates";
//import "./HomeStyle.css"; // Ensure you have imported your CSS styles
// import EndorsedBy from "./EndorsedBy";
// import SponsoredBy from "./SponsoredBy";
// import Container from "react-bootstrap/Container";
// import CallForPapers from "./CallForPapers";
// import AuthGuidelines from "./AuthGuidelines";
// import Awards from "./Awards";
// import AdvisoryCommittee from "./AdvisoryCommittee";
// import OrganizingCommittee from "./OrganizingCommittee";

// Sample images. Replace these URLs with your own image URLs.
import inspect_home from "../assets/images/home_page/inspect_2024.png";
import abv_iiitm from "../assets/images/home_page/abv_iiitm.jpg";
import iiitm_build from "../assets/images/home_page/iiitm_building.png";
import fort1 from "../assets/images/home_page/Gwalior_Fort_front.jpg";
import fort2 from "../assets/images/home_page/gwalior_fort_side.png";
import conv from "../assets/images/home_page/conv.jpg";

// const images = [
//   "https://media.licdn.com/dms/image/C5116AQGJS3IC-758ZQ/profile-displaybackgroundimage-shrink_350_1400/0/1579180318391?e=1712188800&v=beta&t=JpZPS4T0hN94saBELFhd6NMvTu1wkr-i-bL8UMZd3H4",
//   "https://iiitm.ac.in/images/2023/07/14/13.jpg",
//   "https://static.toiimg.com/photo/103983634.cms",

//   "https://iiitm.ac.in/images/2023/07/14/61.jpg",

// ];

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
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const loc_images = [inspect_home, abv_iiitm, conv, fort1, fort2];

  return (
    <div>
      <div
        style={{
          margin: "5px 90px 20px 90px",
          border: "2px solid white",
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
      {/* <Container fluid style={{ padding: 0 }}>
      <EndorsedBy />
    </Container>

    <Container fluid style={{ padding: 0 }}>
      <SponsoredBy />
    </Container> */}
      {/* <div className="parallax-bg">
      <div>
        <Speakers />
      </div>
    </div> */}
      <div
        style={{
          fontWeight: "bold",
          // background: "rgb(213,223,241)",
          // background:
          //   "linear-gradient(90deg, rgba(213,223,241,1) 100%, rgba(114,155,228,1) 100%, rgba(222,225,231,1) 100%, rgba(0,6,8,0.4823179271708683) 100%, rgba(78,131,242,1) 100%, rgba(0,0,0,1) 100%, rgba(27,26,26,0.6475840336134453) 100%)",
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
