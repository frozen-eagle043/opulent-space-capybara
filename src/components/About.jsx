import React from "react";
import about1 from "../assets/images/about/about1.jpeg";
import about2 from "../assets/images/about/about2.jpeg";
// import ImageCard from "./ImageCard";
//import "./Body.css"; // Only if you have specific styles for Body

const About = () => {
  //   const images = [
  //     "https://media.istockphoto.com/id/636208094/photo/tropical-jungle.jpg",
  //     "https://media.istockphoto.com/id/917911572/photo/standing-woman-on-the-hill-against-mountain-valley.jpg",
  //     // Add more image URLs as needed
  //   ];

  return (
    <div style={{ margin: "4px", padding: "20px" }}>
      <h1>About Us</h1>
      <div className="about" style={{ margin: "10px", padding: "20px" }}>
        <div className="about-text">
          <p>
            Indian Institute of Information Technology and Management (IIITM) in
            Gwalior, Madhya Pradesh is an autonomous institute set by Government
            of India, MHRD (Presently Ministry of Education, Govt. of India) in
            1997. It is an effort by MHRD (Presently Ministry of Education,
            Govt. of India) towards creating professionals in areas of
            management and information technology from the same institute. This
            institute was created for facilitating higher education, research,
            and consultancy in areas of information technology (IT) and business
            management. Initially started as IIITM, this institute was prefixed
            with ABV in 2002 to honour the then Prime Minister Atal Bihari
            Vajpayee.{" "}
          </p>
          <p>
            ABV-IIITM is located on Morena Link Road at a distance of about
            3.5km and 8.5km from Gwalior railway station and Rajmata Vijay Raje
            Scindia city airport respectively. Its location at the foothills of
            Gwalior fort is idyllic for an institute of this stature. Though it
            is not far from city centre it has a tranquil ambiance as desired of
            an academic institute. With nearly four-fifths of the institute
            covered with greenery, the environment is pristine and tranquil.
            Together with academics it offers an ideal surrounding for
            extra-curricular activities.
          </p>
          <p>
            The institute is easily accessible by road, and there are cabs and
            auto-rickshaws to commute from railway station or airport. Shopping
            centres and market places are located nearby and about ten minutes
            driving distance away.
          </p>
        </div>
        <div className="about-img-sec">
          <img className="about-img" src={about2} alt="ABV-IIITM Gwalior" />
          {/* <img src={about1} alt="ABV-IIITM Gwalior" /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
