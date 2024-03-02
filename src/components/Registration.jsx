import React from "react";
import RegistrationFeesDetails from "./RegistrationFeesDetails";
import "bootstrap/dist/css/bootstrap.min.css";

const RegistrationComponent = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">INSPECT-2024 Registration</h2>
      <div className="col">
        <div style={{ fontSize: "17px" }} className="col-md-7">
          <h3 style={{ color: "red" }} className="mb-3">
            Important Dates
          </h3>
          <p>
            <strong>Deadline for camera-ready submission: </strong>
            30 October 2024
          </p>
          <p>
            <strong>Deadline for early bird registration: </strong>
            15 November 2024
          </p>

          <h3 style={{ color: "red" }} className="mb-3 mt-4">
            Submission Instructions
          </h3>
          <p>
            The account details for payment of Registration fees are given as
            follows:
          </p>
          <ul className="mb-4">
            <li>
              <b>Name: </b>
              ABVIIITMG INSPECT CONFERENCE
            </li>
            <li>
              <b>Account Number: </b>946210110007631
            </li>
            <li>
              <b>Bank Name and Branch: </b>
              Bank of India, IIITM Campus, Morena link road, Gwalior, M.P.
              -474003
            </li>
            <li>
              <b>Account Type: </b>Saving
            </li>
            <li>
              <b>MICR Code: </b>474013010
            </li>
            <li>
              <b>IFSC Code: </b>BKID0009462
            </li>
            <li>
              <b>SWIFT Code: </b>BKIDINBBGWA
            </li>
          </ul>
          <p>
            Use the following link for International Payments.
            <br />
            <a
              href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm"
              className="btn btn-primary mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              International Payments
            </a>
          </p>
          <p>Instructions: Instructions for International Payments</p>
          <p>
            Please enter your paper ID in the remarks column while making the
            payment.
          </p>

          <p>
            After making payment kindly take print/screenshot of your
            registration receipt.
          </p>

          <p>
            Once the registration fees are paid, enter the details in the below
            registration form and upload the receipt.
          </p>

          <p>
            For any queries regarding registration kindly contact Dr. Anjali (
            <a href="tel:8840348439">88403 48439</a>) or Dr. Vivek Tiwari (
            <a href="tel:9630246099">96302 46099</a>)
          </p>
        </div>
        <div className="col-md-6">
          <button
            className="btn btn-primary mt-4"
            onClick={() => window.open("https://www.google.com")}
          >
            Registration Form
          </button>
        </div>
      </div>
      <h3 style={{ color: "red" }} className="mb-3 mt-5">
        Registration Fees Details
      </h3>
      <RegistrationFeesDetails />
    </div>
  );
};

export default RegistrationComponent;
