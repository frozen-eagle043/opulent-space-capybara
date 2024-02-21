import React from "react";
import RegistrationFeesDetails from "./RegistrationFeesDetails";
import "bootstrap/dist/css/bootstrap.min.css";

const RegistrationComponent = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">INSPECT2024 Registration</h2>
      <div className="col">
        <div className="col-md-6">
          <h3 className="mb-3">Important Dates:</h3>
          <p>
            Deadline for camera-ready submission:{" "}
            <strong>30 October 2024</strong>
          </p>
          <p>
            Deadline for early bird registration:{" "}
            <strong>15 November 2024</strong>
          </p>

          <h3 className="mb-3">Submission Instructions</h3>
          <p>
            The account details for payment of Registration fees are given as
            follows:
          </p>
          <ul className="mb-4">
            <li>Name: ABVIIITMG INSPECT-2024</li>
            <li>Account Number: 946210110007272</li>
            <li>
              Bank Name and Branch: Bank of India, IIITM Campus, Morena link
              road, Gwalior, M.P. -474003
            </li>
            <li>Account Type: Saving</li>
            <li>MICR Code: 474013010</li>
            <li>IFSC Code: BKID0009462</li>
            <li>SWIFT Code: BKIDINBBGWA</li>
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
      <h3 className="mb-3">Registration Fees Details</h3>
      <RegistrationFeesDetails />
    </div>
  );
};

export default RegistrationComponent;
