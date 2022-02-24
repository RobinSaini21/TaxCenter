import React from 'react';
import { Link } from 'react-router-dom';

function Deduction() {
  return (
    <div className="TaxService_P">
   
      <div className="TaxSummar">
        <ul class="list-group">
        <h5 >
Now let's do your deductions
</h5>
<p>All relevant information pertaining to income, deduction, and taxes has been saved.</p>
          <li class="list-group-item">
         <h6> Deductions</h6>
          <p>LIC, pension funds</p>
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
        <h6>  Tax Relief on Salary arrears received</h6>
          <p>Tax Relief u/s 89 is applicable if you have received arrears of Salary. Select “Yes” if you have received any portion of salary(including pension and gratuity) pertaining to earlier years in 2020-21 and tax relief u/s 89 is to be claimed on it.</p>   <div class="form-group">
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
           <h6>Tax Relief on Taxes paid outside India</h6>
           <p>Select "Yes" if you have earned any Income outside India.</p>
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
            <p className="other-list-item" style={{ color: "green" }}>
              Next <br />
              <Link to={"/SavingDeduction"}>Deduction</Link>
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Deduction