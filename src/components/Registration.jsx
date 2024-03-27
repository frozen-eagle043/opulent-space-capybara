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
            25 September 2024
          </p>
          <p>
            <strong>Deadline for early bird registration: </strong>
            10 October 2024
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
            For any queries regarding registration kindly contact Dr. Binod
            Prasad (<a href="tel:7001940890">7001940890</a>) or Dr. Pragya Swami
            (<a href="tel:9008391562">9008391562</a>)
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
      <h3 style={{ color: "red" }} className="mb-3 mt-4">
        Registration Guidelines
      </h3>
      <ul className="mb-4">
        <li>Please note that the fees shown above include GST.</li>
        <li>
          Gateway charges <strong>(if any)</strong> must be borne by the
          participant.
        </li>
        <li>
          The IEEE member discount is only applicable if an active IEEE
          membership number (along with a scanned copy of the membership card)
          is provided during registration.
        </li>
        <li>
          Students are defined as full-time students (UG/PG/PhD) enrolled with a
          university/recognized educational body. A scanned copy of the student
          ID must be uploaded during registration.
        </li>
        <li>
          At least one of the authors must complete an author registration by
          the final camera-ready paper submission deadline for their paper to be
          included in the conference's final program.
        </li>
        <li>One author registration covers only one paper.</li>
        <li>
          All registrations include admission to all technical sessions and
          E-proceeding.
        </li>
        <li>
          No refunds will be made (in any case) for any registration category.
        </li>
        <li>
          Registration fee (except for attendees) includes a registration kit,
          refreshments (morning and evening), 2 lunches, one gala dinner, a
          presentation slot, a soft copy of the conference proceedings, a
          presentation certificate, entry to all the technical sessions, and
          cultural events.
        </li>
        <li>
          A registration kit will be provided only to the offline participants.
        </li>
        <li>
          An attendee's registration includes refreshments (morning and
          evening), 2 lunches, an attendee certificate, entry to all the
          technical sessions, and cultural events.
        </li>
      </ul>
    </div>
  );
};

export default RegistrationComponent;
