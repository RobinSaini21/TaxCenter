import React from "react";
import { Link } from "react-router-dom";
import "./TaxService.css";

function Taxsummary() {
  const salary = "84375";
  return (
    <div className="TaxService_P">
      <div className="TaxSummary">
        <ul class="list-group">
          <li class="list-group-item">
            Salary<p className="other-list-item">{salary}</p>
          </li>
          <li class="list-group-item">
            House Property<p className="other-list-item">{salary}</p>
          </li>
          <li class="list-group-item">
            Less: Deductions<p className="other-list-item">{salary}</p>
          </li>
          <li class="list-group-item">
            Total Taxable Income<p className="other-list-item">{salary}</p>
          </li>
          <li class="list-group-item">
            Tax<p className="other-list-item">{salary}</p>
          </li>
          <li class="list-group-item">
            Less: Rebate U,s 874<p className="other-list-item">{salary}</p>
          </li>
          <li class="list-group-item">
            Add Health and Education Cess
            <p className="other-list-item">{salary}</p>
          </li>
          <li class="list-group-item">
            Total Tax<p className="other-list-item">{salary}</p>
          </li>
          <li class="list-group-item">
            Less: Relief<p className="other-list-item">{salary}</p>
          </li>
          <li class="list-group-item">
            TDS<p className="other-list-item">{salary}</p>
          </li>
          <li class="list-group-item">
            Add: Interest<p className="other-list-item">{salary}</p>
          </li>
          <li class="list-group-item">
            Less: Self Assessment Tax<p className="other-list-item">{salary}</p>
          </li>
          <li class="list-group-item">
            Tax Refundable<p className="other-list-item">{salary}</p>
          </li>
          <li class="list-group-item">
            <p className="other-list-item" style={{ color: "green" }}>
              Next <br />
              <Link to={"/AboutIncome"}>
                Continue
              </Link>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Taxsummary;
