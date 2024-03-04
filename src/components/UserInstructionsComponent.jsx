import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UserInstructionsTable = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">User Instructions</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">First-time users</th>
            <th scope="col">
              Previous users, but using it the first time for INSPECT-2024
            </th>
            <th scope="col">Returning users</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>a. Click “New Users - Click Here”.</td>
            <td>
              a. Enter XXXXXX as the Conference ID, your email address, and
              enter the password you used for your old account.
            </td>
            <td>
              a. Enter XXXXXX as the Conference ID, email address, and password.
            </td>
          </tr>
          <tr>
            <td>
              b. Enter XXXXXX as the Conference ID, your email address, and
              choose a new password. Continue to enter information as prompted.
            </td>
            <td>
              b. When you click “Login”, you’ll receive an error saying you need
              to set up an account. Simply click “Continue”. By entering your
              previously used email address and password combination, you will
              enable your old account for access to this new conference.
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              c. An Online confirmation will be displayed, and an email
              confirmation will be sent verifying your account setup.
            </td>
            <td>
              c. Check that the contact information is still valid and click
              “Submit”.
            </td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>
              d. You will receive online and email confirmation of successful
              account setup.
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserInstructionsTable;
