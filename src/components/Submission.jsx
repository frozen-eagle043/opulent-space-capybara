import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserInstructionsComponent from "./UserInstructionsComponent";
import Button from "react-bootstrap/Button";
const SubmissionComponent = () => {
  return (
    <div
      className="container mt-5"
      style={{ textAlign: "justify", fontWeight: "440" }}
    >
      <div>
        <h2
          style={{ color: "red", margin: "30px" }}
          className="text-center mb-4"
        >
          How to Submit paper in INSPECT-2024
        </h2>
        <p>
          Prospective authors are encouraged to submit full papers in PDF format
          not exceeding 6 pages in double-column includes all figures, tables,
          and references. The paper must follow the standard IEEE template{" "}
          <a
            href="https://www.ieee.org/conferences/publishing/templates.html"
            target="_blank"
          >
            link here
          </a>
          . Papers not compliant with the IEEE template including appropriate
          referencing or exceeding the page limit will be returned without
          review. Only original papers that have not been published or submitted
          for publication elsewhere will be considered. The paper must clearly
          indicate the research area, main results, and contributions.
          <b>
            {" "}
            All Accepted and Presented papers will be submitted for publication
            to IEEE Xplore, which is indexed with world’s leading Abstracting &
            Indexing (A&I) databases (SCOPUS etc.)
          </b>
        </p>
        <p>
          Submission of a scientific paper is considered a commitment that, upon
          acceptance, authors will submit their camera-ready version for
          inclusion in the formal proceedings and will present the paper at the
          conference. Each accepted contribution must have at least one paid
          registration by the time the camera-ready paper is submitted for
          inclusion in the proceedings. INSPECT reserves the right to remove
          from IEEE Xplore papers and posters not presented at the symposium.
        </p>
        <p>
          For you to be able to access the submission system as an author,
          reviewer, program committee member, session chair, etc., you need to
          create an account on <a href="#">(link will be provided later)</a>.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "10px",
          }}
        >
          <Button style={{ borderRadius: "20px" }} href="#" size="lg" center>
            Submit a Paper
          </Button>
        </div>

        <p>
          For the full call for papers click here:{" "}
          <a href="/call-for-paper" target="_blank">
            Call For Papers
          </a>
        </p>

        <p>
          For IEEE templates,{" "}
          <a
            href="https://www.ieee.org/conferences/publishing/templates.html"
            target="_blank"
          >
            Click here
          </a>{" "}
          or choose in{" "}
          <a
            href="https://www.ieee.org/conferences/publishing/templates.html"
            target="_blank"
          >
            <b>Latex</b>
          </a>{" "}
          or in{" "}
          <a
            href="https://www.ieee.org/conferences/publishing/templates.html"
            target="_blank"
          >
            <b>.doc</b>
          </a>
        </p>
        <p>
          Submission Deadline: <b>June 30, 2024</b>
        </p>
        <p>
          Accepted papers will be assigned to a regular technical session. All
          papers will go through a rigorous, single-blind reviewing process. At
          least one author of an accepted paper will have to register at the
          conference in order to submit the final version. All accepted papers
          presented at the conference will be published in the conference
          proceeding and submitted to IEEE Xplore for publication subject to
          their norms. They should satisfy the requirements given in the
          publication policy.
        </p>
        <p>
          The E-Copyright form must be submitted by the author or presenter at
          the time of registration.
        </p>
        <h4>IEEE Policies</h4>
        <p>
          IEEE reserves the right to exclude a paper from distribution after the
          conference (e.g., by not including it in IEEE Xplore) if the paper is
          not presented at the conference. Papers are reviewed on the basis that
          they do not contain plagiarized material and have not been submitted
          to any other conference at the same time (double submission). These
          matters are taken very seriously and IEEE will take action against any
          author who has engaged in either practice.
        </p>
        <p>
          For any clarifications regarding the paper submission guidelines
          please e-mail: inspect_conf@iiitm.ac.in
        </p>
      </div>
      <div style={{ marginTop: "60px" }}>
        <h2
          style={{ color: "red", margin: "30px" }}
          className="text-center mb-4"
        >
          Final Paper Submission Guidelines
        </h2>
        <p>
          Please note that the last date for uploading the final camera-ready
          manuscript is 25 September 2024, 23:59 IST.
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
            Revise your manuscript as per REVIEWERS' COMMENTS, which are
            intended to improve the quality of your paper before the final
            publication. The listed comments should be addressed carefully in
            your revision; it is mandatory for all authors to incorporate all
            the changes suggested by reviewers and adhere to IEEE conditions,
            else their paper will be excluded from conference proceedings.
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
            For papers in which all authors are employed by the US government,
            the copyright notice is: U.S. Government work not protected by U.S.
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
            For all other papers, the copyright notice is:
            XXX-X-XXXX-XXXX-X/XX/XX IEEE
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
            Plus-converted PDF attached. If you submitted a PDF for Checking,
            the email will show if your file passed or failed.
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
          verified paper (as XXX.pdf), duly signed copyright form downloaded
          from IEEE (as CR-XXX.pdf), and Source Editable (Word/LaTeX format)
          file of Camera Ready Copy (in Zip folder) with all supporting files
          (as XXX.zip). Please note that XXX is the three-digit paper ID
          (zero-padded if necessary).
        </p>
        <p>
          <strong>Step 3:</strong> For detailed instructions on how to submit
          IEEE eCopyright form and Camera-Ready Copy on Microsoft CMT, click{" "}
          <a href="instructions-link" target="_blank" rel="noopener noreferrer">
            here
          </a>
          .
        </p>
        <p>
          <strong>Step 4:</strong> Click the “Submit” button or “Save changes”
          button if you're editing a previous submission—at the bottom of the
          page to save all your changes. Unless you press the “Submit”/“Save
          changes” button, any changes you've made to the camera-ready
          submission (including file uploads and changes to the title, abstract,
          and author list) will not be saved.
        </p>
      </div>
    </div>
  );
};

export default SubmissionComponent;
