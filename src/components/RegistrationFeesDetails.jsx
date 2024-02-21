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
              <th scope="col">Category</th>
              <th
                scope="col"
                colSpan="4"
                className="text-center bg-primary text-white"
              >
                Early Bird Registration
              </th>
              <th
                scope="col"
                colSpan="4"
                className="text-center bg-warning text-white"
              >
                Registration
              </th>
            </tr>
            <tr>
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
            </tr>
            <tr>
              <td></td>
              <td className="bg-light">IAPR/IEEE-SPS</td>
              <td className="bg-light">Non IAPR/IEEE-SPS</td>
              <td className="bg-light">IAPR/IEEE-SPS</td>
              <td className="bg-light">Non IAPR/IEEE-SPS</td>
              <td className="bg-light">IAPR/IEEE-SPS</td>
              <td className="bg-light">Non IAPR/IEEE-SPS</td>
              <td className="bg-light">IAPR/IEEE-SPS</td>
              <td className="bg-light">Non IAPR/IEEE-SPS</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center bg-info text-white">
                Indian Delegates (INR)
              </td>
              <td>8260</td>
              <td>9440</td>
              <td>7434</td>
              <td>8496</td>
              <td>9440</td>
              <td>10620</td>
              <td>8496</td>
              <td>9558</td>
            </tr>
            <tr>
              <td className="text-center bg-info text-white">Listener</td>
              <td>2950</td>
              <td>4130</td>
              <td>2655</td>
              <td>3717</td>
              <td>4130</td>
              <td>5310</td>
              <td>3717</td>
              <td>4779</td>
            </tr>
            <tr>
              <td className="text-center bg-info text-white">
                Foreign Delegates (US $)
              </td>
              <td>236</td>
              <td>295</td>
              <td>177</td>
              <td>206.5</td>
              <td>295</td>
              <td>354</td>
              <td>236</td>
              <td>295</td>
            </tr>
            <tr>
              <td className="text-center bg-info text-white">Listener</td>
              <td>118</td>
              <td>177</td>
              <td>88.5</td>
              <td>118</td>
              <td>118</td>
              <td>177</td>
              <td>88.5</td>
              <td>118</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingComponent;
