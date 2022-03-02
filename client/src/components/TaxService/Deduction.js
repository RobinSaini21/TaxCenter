import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { Formik } from "formik";

function Deduction() {
  const initialDeduction = {
    lic: "",
    salary: "",
    tax: "",
  };
  const Navigate = useNavigate();
  return (
    <div>
      <Formik
        initialValues={initialDeduction}
        validate={(values) => {
          const errors = {};
          if (!values.lic) {
            errors.lic = "Required";
          }
          if (!values.salary) {
            errors.salary = "Required";
          }
          if (!values.tax) {
            errors.tax = "Required";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
          Navigate("/SavingDeduction");
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="TaxService_P">
              <div className="TaxSummar">
                <ul class="list-group">
                  <h5>Now let's do your deductions</h5>
                  <p>
                    All relevant information pertaining to income, deduction,
                    and taxes has been saved.
                  </p>
                  <li class="list-group-item">
                    <h6> Deductions</h6>
                    <p>LIC, pension funds</p>
                    <div class="form-group">
                      <select
                        className="other-list-item"
                        name="lic"
                        id="lic"
                        value={values.lic}
                        onChange={handleChange}
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
                      <span style={{ color: "red" }}>{errors.lic}</span>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <h6> Tax Relief on Salary arrears received</h6>
                    <p>
                      Tax Relief u/s 89 is applicable if you have received
                      arrears of Salary. Select “Yes” if you have received any
                      portion of salary(including pension and gratuity)
                      pertaining to earlier years in 2020-21 and tax relief u/s
                      89 is to be claimed on it.
                    </p>{" "}
                    <div class="form-group">
                      <select
                        className="other-list-item"
                        name="salary"
                        id="salary"
                        value={values.salary}
                        onChange={handleChange}
                      >
                        <option value="" class="form-control item" disabled>
                          --Please choose an option--
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                      <span style={{ color: "red" }}>{errors.salary}</span>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <h6>Tax Relief on Taxes paid outside India</h6>
                    <p>
                      Select "Yes" if you have earned any Income outside India.
                    </p>
                    <div class="form-group">
                      <select
                        className="other-list-item"
                        name="tax"
                        id="tax"
                        value={values.tax}
                        onChange={handleChange}
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
                      <span style={{ color: "red" }}>{errors.tax}</span>
                    </div>
                  </li>

                  <li class="list-group-item">
                    <p className="other-list-item" style={{ color: "green" }}>
                      Next <br />
                      <button type="submit" disabled={isSubmitting}>
                        Deduction
                      </button>
                      {/* <Link to={"/SavingDeduction"}></Link> */}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Deduction;
