import React from 'react';
import { Link } from 'react-router-dom';

function OtherInformations() {
  return (
    <div className="TaxService_P">
    <div className="TaxSummary">
        <h5>Now, some other informations</h5>
      <ul class="list-group">
        <li class="list-group-item">
     <h4>   Do you have any Foreign bank accounts, shares or property?</h4>
        <p>Select "Yes" if you have any investment in movable / immovable property outside India</p>
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
        <h4> Do you want to include Income of any of your family member?</h4>
        <p>Select "Yes" if you have to include (club) income of your family members in your Income-tax return.</p>  
          
          
          
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
        <h4>Are you governed by Portuguese Civil Code?</h4>
        <p>Portuguese civil code is in force in states of Goa, Union Territories of Dadra and Nagar Haveli and Daman and Diu. Select Yes, if you are governed by Portuguese Civil Code. Select No, if not applicable.</p>  
          
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
            <Link to={"/FamilyIncome"}>Other Details</Link>
          </p>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default OtherInformations