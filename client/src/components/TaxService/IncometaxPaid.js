import React from 'react';
import { Link } from 'react-router-dom';

function IncometaxPaid() {
  return (
    <div className="TaxService_P">
   
    <div className="TaxSummar">
      <ul class="list-group">
      <h5 >
      Let's add details of Income-tax paid
</h5>
<p>Enter details of tax paid by you or on your behalf. Please refer Form 26AS(Tax credit statement) to ensure correct claim for taxes paid.</p>
        <li class="list-group-item">
       <h6>TDS</h6>
        <p>TDS is the amount of tax deducted from amount receivable by you as Income (such as Salary, Bank Interest, Freelancing Income etc).</p>
          <div class="form-group">
            <select
              className="other-list-item"
              name="dd80"
              id="dd80"
              //   value={values.dd80}
              //   onChange={handleChange}
              //   onBlur={handleBlur}
              // value={gender}
              // onChange={(e) => selectGender(e.target.value)}
            >
              <option value="" class="form-control item" disabled>
                --Please choose an option--
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </li>
        <li class="list-group-item">
      <h6>Tax Paid (Advance and Self-Assessment Tax)</h6>
        <p>Tax paid by the taxpayer for the financial year (other than TDS/TCS)</p>   <div class="form-group">
            <select
              className="other-list-item"
              name="dd80"
              id="dd80"
              //   value={values.dd80}
              //   onChange={handleChange}
              //   onBlur={handleBlur}
              // value={gender}
              // onChange={(e) => selectGender(e.target.value)}
            >
              <option value="" class="form-control item" disabled>
                --Please choose an option--
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </li>
        <li class="list-group-item">
          <p className="other-list-item" style={{ color: "green" }}>
            Next <br />
            <Link to={'/'}>TDS</Link>
          </p>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default IncometaxPaid