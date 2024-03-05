import React from "react";
import about1 from "../assets/images/about/about1.jpeg";
import about2 from "../assets/images/about/about2.jpeg";
import abv_iiitm from "../assets/images/home_page/abv_iiitm.jpg";
import "./About.css"; // Import CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About Institute</h1>
      <div className="about-content">
        <div
          className="about-text-start-right"
          style={{ textAlign: "justify" }}
        >
          <p style={{ color: "purple", fontSize: "17px", fontWeight: "550" }}>
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
            Vajpayee. The beginning of IIITM could be traced back to 1992, when
            MHRD (Presently Ministry of Education, Govt. of India) under Dr. P.
            G. Reddy contemplated setting up of advanced information systems in
            the likes of IIMs and IITs in different locations of India.
            Subsequently in 1995, Government of India based on a report prepared
            by AICTE (All India Council for Technical Education) comprising
            eminent academicians, policy makers, and professionals decided on
            establishing national centres focussed on IT and management
            training. PGDMIT (Post Graduate Diploma in Management and
            Information Technology) was the maiden course initiated in 1998 with
            thirty students, followed by PGDIT (Post Graduate Diploma in
            Information Technology) in 1999, and Ph.D. and 5-year Dual Post
            Graduate programs in 2000.
          </p>
          <div className="about-images-start-left">
            <img className="about-img" src={about2} alt="ABV-IIITM Gwalior" />
          </div>
        </div>
        <div className="about-text-start-left" style={{ textAlign: "justify" }}>
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
        </div>
      </div>
    </div>
  );
};

export default About;
