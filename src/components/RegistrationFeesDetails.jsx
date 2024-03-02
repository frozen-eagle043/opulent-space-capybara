import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PricingComponent = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">
        INSPECT 2024, IIITM Gwalior (with GST)
      </h2>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th className="text-center" scope="col">
                Category
              </th>
              <th
                scope="col"
                colSpan="2"
                className="text-center bg-primary text-white"
              >
                Early Bird Registration
              </th>
              <th
                scope="col"
                colSpan="2"
                className="text-center bg-warning text-white"
              >
                Late Registration
              </th>
            </tr>

            {/* <tr>
              <th scope="col"></th>
              <th
                scope="col"
                colSpan="2"
                className="text-center bg-success text-white"
              >
                Academia/Professionals
              </th>
              <th
                scope="col"
                colSpan="2"
                className="text-center bg-info text-white"
              >
                Students (10% Deduction)
              </th>
              <th
                scope="col"
                colSpan="2"
                className="text-center bg-success text-white"
              >
                Academia/Professionals
              </th>
              <th
                scope="col"
                colSpan="2"
                className="text-center bg-info text-white"
              >
                Students (10% Deduction)
              </th>
            </tr> */}
            <tr>
              <td></td>
              <td className="text-center bg-success">IEEE</td>
              <td className="text-center bg-info">Non-IEEE</td>
              <td className="text-center bg-success">IEEE</td>
              <td className="text-center bg-info">Non-IEEE</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center bg-info text-white">Student </td>
              <td className="text-center">INR 5000</td>

              <td className="text-center">INR 5500</td>
              <td className="text-center">INR 6000</td>
              <td className="text-center">INR 6500</td>
            </tr>

            <tr>
              <td className="text-center bg-info text-white">
                Industry/ Academician
              </td>
              <td className="text-center">INR 7000</td>
              <td className="text-center">INR 7500</td>
              <td className="text-center">INR 8000</td>

              <td className="text-center">INR 8500</td>
            </tr>

            <tr>
              <td className="text-center bg-info text-white">
                International Authors
              </td>
              <td colSpan="2" className="text-center">
                US$ 200
              </td>
              <td colSpan="2" className="text-center">
                US$ 250
              </td>
            </tr>
            <tr>
              <td className="text-center bg-info text-white">Attendees</td>
              <td className="text-center" colspan="4">
                INR 2000
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingComponent;
