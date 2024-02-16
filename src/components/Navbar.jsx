import React, { useState } from "react";
import { Link } from "react-router-dom";
import CallForPapers from "./CallForPapers";
//import "./Navbar.css"; // Make sure to create a corresponding CSS file

const Navbar = () => {
  const [isSubmissionOpen, setSubmissionOpen] = useState(false);
  const [isChallengesOpen, setChallengesOpen] = useState(false);
  const [isCommitteeOpen, setCommitteeOpen] = useState(false);
  const [isProgrammeOpen, setProgrammeOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/path-to-your-logo.png" alt="Logo" />{" "}
          {/* Adjust the src to your logo's path */}
        </Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        {/* Submission Dropdown */}
        <li onClick={() => setSubmissionOpen(!isSubmissionOpen)}>
          <Link>Submission +</Link>
          {isSubmissionOpen && (
            <ul className="dropdown">
              <li>
                <Link to="/call-for-paper">Call For Paper</Link>
              </li>
              <li>
                <Link to="/important-dates">Important Dates</Link>
              </li>
              <li>
                <Link to="/author-guidelines">Author Guidelines</Link>
              </li>
              <li>
                <Link to="/camera-ready-submission">
                  Camera Ready Submission
                </Link>
              </li>
              <li>
                <Link to="/presentation-guidelines">
                  Presentation Guidelines
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Challenges Dropdown */}
        <li onClick={() => setChallengesOpen(!isChallengesOpen)}>
          <Link>Challenges +</Link>
          {isChallengesOpen && (
            <ul className="dropdown">
              <li>
                <Link to="/call-for-challenge">Call For Challenge</Link>
              </li>
              <li>
                <Link to="/important-dates-challenge">Important Dates</Link>
              </li>
              <li>
                <Link to="/challenge-author-guidelines">Author Guidelines</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Committee Dropdown */}
        <li onClick={() => setCommitteeOpen(!isCommitteeOpen)}>
          <Link>Committee +</Link>
          {isCommitteeOpen && (
            <ul className="dropdown">
              <li>
                <Link to="/organizing-committee">Organizing committee</Link>
              </li>
              <li>
                <Link to="/advisory-committee">Advisory Committee</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Programme Dropdown */}
        <li onClick={() => setProgrammeOpen(!isProgrammeOpen)}>
          <Link>Programme +</Link>
          {isProgrammeOpen && (
            <ul className="dropdown">
              <li>
                <Link to="/our-speakers">Our Speakers</Link>
              </li>
              <li>
                <Link to="/travel-grant">Travel Grant</Link>
              </li>
              <li>
                <Link to="/program-schedule">Program Schedule</Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link to="/registration">Registration</Link>
        </li>
        <li>
          <Link to="/accommodation">Accommodation</Link>
        </li>
        <li>
          <Link to="/award">Award</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
