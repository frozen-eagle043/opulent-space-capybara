import React from "react";

const Footer = () => (
  <div className="footer">
    <p className="footer-content">
      विश्वजीवनामृतं ज्ञानम् <br />
      <strong>
        अटल बिहरी वाजपेयी भारतीय सूचना प्रौद्योगिकी एवं प्रबंधन संस्थान,
        ग्वालियर
      </strong>{" "}
      <br />
      Atal Bihari Vajpayee Indian Institute of Information Technology and
      Management Gwalior <br />
      Morena Rd, IIITM Campus, Gwalior - 474015, Madhya Pradesh, India <br />
      Email: inspect_conf@iiitm.ac.in <br />
      Ph. No.: +91-9586288218; +91-9109106995
    </p>
    <ul className="footer-links">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/submission">Author Guidelines</a>
      </li>
      {/* <li>
        <a href="/speaker2">Our Speakers</a>
      </li> */}
      <li>
        <a href="https://iiitm.ac.in/index.php/en/">
          ABV-IIITM Gwalior Website
        </a>
      </li>
    </ul>

    <p className="footer-copyright">
      Designed & Developed by: <strong>(ABV-IIITM Gwalior Students)</strong>{" "}
      <br />© 2024 All rights reserved.
    </p>
    {/* <p className="footer-links">
      <a href="/accommodation">Accommodation</a> |{" "}
      <a href="/fellowship">Fellowship</a> | <a href="/sponsor">Sponsor</a> |{" "}
      <a href="/organising-committee">Organising Committee</a>
    </p> */}
  </div>
);

export default Footer;
