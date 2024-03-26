import React from "react";

const StudentGrant = () => {
  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">
        Student travel grant to attend the INSPECT 2024 Conference.
      </h3>
      <div>
        <br />
        The student travel grant is designed to provide financial assistance to
        students (based on the submitted paper quality) who demonstrate
        financial need and wish to attend the INSPECT 2024 conference.
      </div>
      <div className="col">
        <div style={{ fontSize: "17px" }} className="col-md-7">
          <h4 style={{ color: "red" }} className="mb-3 mt-4">
            Eligibility Criteria
          </h4>

          <ul className="mb-4">
            <li>
              Applicant must be a full-time student at any educational
              institute.
            </li>
            <li>Applicant must demonstrate financial need.</li>
            <li>Applicant must be in good academic standing.</li>
            <li>
              Applicant must provide proof of acceptance or registration of
              INSPECT 2024.
            </li>
          </ul>
          <h4 style={{ color: "red" }} className="mb-3 mt-4">
            Grant Amount
          </h4>
          <p>
            The grant amount will vary depending on available funds and the
            specific needs of each applicant. Grants may cover travel costs,
            accommodation, and other related expenses.
          </p>
          <h4 style={{ color: "red" }} className="mb-3 mt-4">
            Application Process
          </h4>
          <p>
            Complete the form here -{" "}
            <a href="/student-grant">(Link will be provided later)</a>
          </p>
          <p>
            The following documents will be required to submit the above form:
            <ul className="mb-4">
              <li>Student ID of a recognized educational institute,</li>
              <li>
                documentation demonstrating financial need<b>*</b>,
              </li>
              <li>proof of acceptance/registration to INSPECT 2024</li>
            </ul>
          </p>
          <p>
            <b>*</b>Write a brief statement outlining the applicant&#39;s
            reasons (max 500 words) for seeking financial assistance and how
            attending the event will benefit their academic and professional
            development.
          </p>
          <h4 style={{ color: "red" }} className="mb-3 mt-4">
            Selection Process
          </h4>
          <p>
            A conference committee will review applications. The committee will
            assess applications based on criteria such as financial need,
            academic standing, and alignment with the grant program's goals.
            Grant recipients will be notified of their selection via email.
          </p>
          <h4 style={{ color: "red" }} className="mb-3 mt-4">
            Application Deadline:
          </h4>
          <p>30 September 2024</p>
          <h4 style={{ color: "red" }} className="mb-3 mt-4">
            Contact Information
          </h4>
          <p>
            For inquiries or assistance regarding this grant, please contact at:
            inspect2024@iiitm.ac.in
          </p>

          <h4 style={{ color: "red" }} className="mb-3 mt-4">
            Note:
          </h4>
          <p>
            This grant is subject to the availability of funds and may be
            subject to change or discontinuation at the discretion of conference
            organizers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentGrant;
