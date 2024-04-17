import React from "react";
import fort from "../assets/images/home_page/Gwalior_Fort_front.jpg";
import "./About.css"; // Import CSS file for styling

const City = () => {
  return (
    <div className="about-container">
      <h1>About Gwalior</h1>
      <div className="about-content">
        <div
          className="about-text-start-right"
          style={{ textAlign: "justify" }}
        >
          <p style={{ color: "purple", fontSize: "17px", fontWeight: "550" }}>
            Nestled in the heart of India, Gwalior stands as a vibrant city rich
            in history, culture, and architectural marvels. Known for its
            majestic Gwalior Fort, adorned with intricate carvings and
            overlooking the city, Gwalior offers a captivating journey through
            time. As visitors explore the city's palaces, temples, and museums,
            they are transported to eras of valor and grandeur. Moreover, with
            Agra, home to the iconic Taj Mahal, situated within close proximity
            (around 110 KM), Gwalior serves as an ideal base for travelers
            seeking to immerse themselves in the splendor of Mughal
            architecture. Whether marveling at the beauty of the Taj Mahal or
            delving into Gwalior's own rich heritage, visitors are treated to an
            unforgettable experience, where history comes alive amidst the
            timeless allure of these two remarkable cities.
          </p>
          <div className="about-images-start-left">
            <img className="about-img" src={fort} alt="Gwalior Fort" />
          </div>
        </div>
        {/* <div className="about-text-start-left" style={{ textAlign: "justify" }}>
          <p style={{ color: "purple", fontSize: "17px", fontWeight: "550" }}>
            All pervasive growth of IT in India was triggered by Software Policy
            in 1986, Electronic Policy in 1985, and Computer Policy in 1984.
            These three policies in unison led to extensive use of computerised
            methods across different sectors of business, industries, and public
            administration thereby necessitating the need for competent
            professionals at different levels. Infrastructures like Internet,
            INDONET, NICNET, ERNET, and INFLIBNET were established for
            supporting this demand for widespread usage of computerised
            processes. IIITM was set up as an autonomous institute under
            Societies Registration Act. This centrally funded body run by a
            Board of Governors aims at offering education, research, training,
            and consultancy in fields of management and IT in an integrated way.
          </p>
          <p style={{ color: "purple", fontSize: "17px", fontWeight: "550" }}>
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
          <p style={{ color: "purple", fontSize: "17px", fontWeight: "550" }}>
            The institute is easily accessible by road, and there are cabs and
            auto-rickshaws to commute from railway station or airport. Shopping
            centres and market places are located nearby and about ten minutes
            driving distance away.
          </p>
        </div>
        <div className="about-images-start-right">
          <img className="about-img" src={abv_iiitm} alt="ABV-IIITM Gwalior" />
        </div> */}
      </div>
    </div>
  );
};

export default City;
