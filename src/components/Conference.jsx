import React from "react";
import "./About.css"; // Import CSS file for styling
import ieee_mp from "../assets/images/home_page/MP-ieee2.png";
import { width } from "@mui/system";

const Conference = () => {
  return (
    <div className="about-container">
      <h1>About the Conference</h1>
      <div className="about-content">
        <div
          className="about-text-start-right"
          style={{ textAlign: "justify" }}
        >
          <p style={{ color: "purple", fontSize: "17px", fontWeight: "550" }}>
            The International Conference on “Intelligent Signal Processing and
            Effective Communication Technologies” is a dynamic platform designed
            to foster interdisciplinary dialogue, share cutting-edge research,
            and catalyze meaningful collaborations. Whether you're an academic,
            industry professional, or enthusiast, this conference offers
            unparalleled opportunities to engage with the latest trends,
            breakthroughs, and best practices in the Signal Processing &
            Communication field.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              color: "purple",
              fontSize: "17px",
              fontWeight: "550",
            }}
          >
            <div className="ieee-text">
              Further, this conference is{" "}
              <b>sponsored by the IEEE MP Section</b>, underscoring its
              alignment with the highest standards of academic and technical
              excellence. Authors will have the unique opportunity to have their
              papers published in IEEE proceedings, amplifying the visibility
              and impact of their research on a global scale.
            </div>
            <div>
              <img className="ieee-img" src={ieee_mp} alt="Gwalior Fort" />
            </div>
          </div>

          <p
            style={{
              marginTop: "10px",
              color: "purple",
              fontSize: "17px",
              fontWeight: "550",
            }}
          >
            <b>
              Accepted papers will be submitted for inclusion into IEEE Xplore
              subject to meeting IEEE Xplore’s scope and quality requirements.
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Conference;
