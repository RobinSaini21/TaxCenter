import React from "react";
import { Link } from "react-router-dom";

function TaxDeducted() {
  return (
    <div className="TaxService_P">
      <div className="TaxSummary">
        <h4>Tax Deducted at Source (Other than Salary)</h4>
        <ul class="list-group">
          <li class="list-group-item">
            Name of Deductor<p className="other-list-item"></p>
          </li>
          <li class="list-group-item">
            Section<p className="other-list-item"> 192-Salary</p>
          </li>
          <li class="list-group-item">
            {" "}
            TAN<p className="other-list-item"> PTLS23978D</p>
          </li>
          <li class="list-group-item">
            TDS Deducted <p className="other-list-item">7,000 </p>
          </li>
          <li class="list-group-item">
            <b>Total</b>
            <p className="other-list-item">7,000 </p>
          </li>
          <li class="list-group-item">
            {" "}
            <p className="other-list-item" style={{ color: "green" }}>
              Next <br />
              <Link to={"/OtherInformations"}>
                {/* "/ResidentialStatus" */}
                Other Details Starts
              </Link>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TaxDeducted;
