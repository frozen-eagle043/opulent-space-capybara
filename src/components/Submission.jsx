import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserInstructionsComponent from "./UserInstructionsComponent";
const SubmissionComponent = () => {
  return (
    <div className="container mt-5" style={{ textAlign: "justify" }}>
      <h2 className="text-center mb-4">Final Paper Submission Guidelines</h2>
      <p>
        Please note that the last date for uploading the final camera-ready
        manuscript is 30-October 2024, 23:59 IST.
      </p>

      <p>
        At least one author must complete registration before uploading the
        final manuscript. See the{" "}
        <a href="registration-link">Registration Page</a> for details.
      </p>

      <h3>1. Preparation of Camera Ready Manuscript</h3>
      <ul>
        <li>
          Authors are requested to submit using the IEEE conference template.
          The IEEE paper template can be downloaded from{" "}
          <a
            href="ieee-template-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          . Use the A4 format. DO NOT use the US Letter format and do not
          paginate your paper.
        </li>
        <li>
          Revise your manuscript as per REVIEWERS' COMMENTS, which are intended
          to improve the quality of your paper before the final publication. The
          listed comments should be addressed carefully in your revision; it is
          mandatory for all authors to incorporate all the changes suggested by
          reviewers and adhere to IEEE conditions, else their paper will be
          excluded from conference proceedings.
        </li>
        <li>
          In accordance with the IEEE policy, plagiarism in any form, at any
          level, is unacceptable. Therefore, the conference reserves the right
          to reject the final manuscript, which is found to have a high degree
          of plagiarism (more than 30%) after registration without refund.
        </li>
      </ul>

      <h3>2. Validate Your Camera Ready Manuscript Using IEEE PDF eXpress</h3>
      <ul>
        <li>
          Add the copyright notice to the bottom left corner of the first page
          of your source document. If necessary, contact Dr. Deepak Kumar
          Dewangan at{" "}
          <a href="mailto:deepakd@iiitm.ac.in">deepakd@iiitm.ac.in</a> for the
          appropriate copyright notice.
        </li>
        <li>
          For papers in which all authors are employed by the US government, the
          copyright notice is: U.S. Government work not protected by U.S.
          copyright
        </li>
        <li>
          For papers in which all authors are employed by a Crown government
          (UK, Canada, and Australia), the copyright notice is:
          XXX-X-XXXX-XXXX-X/XX/XX Crown
        </li>
        <li>
          For papers in which all authors are employed by the European Union,
          the copyright notice is: XXX-X-XXXX-XXXX-X/XX/XX European Union
        </li>
        <li>
          For all other papers, the copyright notice is: XXX-X-XXXX-XXXX-X/XX/XX
          IEEE
        </li>
        <UserInstructionsComponent />
        <li>
          Before creating PDF, proofread the tex or doc file thoroughly to
          confirm that it requires no revision.
        </li>
        <li>Access the IEEE PDF eXpress Plus site.</li>
        <li>For each conference paper, click “Create New Title”.</li>
        <li>
          Enter identifying text for the paper (title is recommended but not
          required).
        </li>
        <li>Click "Submit PDF for Checking".</li>
        <li>
          Click Browse and navigate to the file, and click "Upload File". You
          will receive online and email confirmation of successful upload.
        </li>
        <li>
          You will receive an email with your checked PDF or IEEE PDF eXpress
          Plus-converted PDF attached. If you submitted a PDF for Checking, the
          email will show if your file passed or failed.
        </li>
        <li>
          In case of “fail”, make changes in the paper according to the PDF
          express report and revalidate.
        </li>
      </ul>

      <h3>
        3. Submission of Camera Ready Manuscripts and IEEE eCopyright Form to
        INSPECT-2024
      </h3>
      <p>
        <strong>Step 1:</strong> Login to Microsoft CMT as an author of
        INSPECT2024 (
        <a href="cmt-link" target="_blank" rel="noopener noreferrer">
          here
        </a>
        ) and click the link to submit the eCopyright form. Then follow the
        on-screen instructions.
      </p>
      <p>
        <strong>Step 2:</strong> From the Author Console in CMT, click on the
        link ‘Create Camera Ready Submission’. Submit the IEEE PDF eXpress
        verified paper (as XXX.pdf), duly signed copyright form downloaded from
        IEEE (as CR-XXX.pdf), and Source Editable (Word/LaTeX format) file of
        Camera Ready Copy (in Zip folder) with all supporting files (as
        XXX.zip). Please note that XXX is the three-digit paper ID (zero-padded
        if necessary).
      </p>
      <p>
        <strong>Step 3:</strong> For detailed instructions on how to submit IEEE
        eCopyright form and Camera-Ready Copy on Microsoft CMT, click{" "}
        <a href="instructions-link" target="_blank" rel="noopener noreferrer">
          here
        </a>
        .
      </p>
      <p>
        <strong>Step 4:</strong> Click the “Submit” button or “Save changes”
        button if you're editing a previous submission—at the bottom of the page
        to save all your changes. Unless you press the “Submit”/“Save changes”
        button, any changes you've made to the camera-ready submission
        (including file uploads and changes to the title, abstract, and author
        list) will not be saved.
      </p>
    </div>
  );
};

export default SubmissionComponent;
