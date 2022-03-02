import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { useNavigate } from "react-router";

function IncometaxPaid() {
  const initialDeduction = {
    taxpaid: "",
    finayear: "",
  };
  const Navigate = useNavigate();
  return (
    <div>
      <Formik
        initialValues={initialDeduction}
        validate={(values) => {
          const errors = {};
          if (!values.taxpaid) {
            errors.taxpaid = "Required";
          }
          if (!values.finayear) {
            errors.finayear = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
          Navigate("/TaxDeducted");
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
                  <h5>Let's add details of Income-tax paid</h5>
                  <p>
                    Enter details of tax paid by you or on your behalf. Please
                    refer Form 26AS(Tax credit statement) to ensure correct
                    claim for taxes paid.
                  </p>
                  <li class="list-group-item">
                    <h6>TDS</h6>
                    <p>
                      TDS is the amount of tax deducted from amount receivable
                      by you as Income (such as Salary, Bank Interest,
                      Freelancing Income etc).
                    </p>
                    <div class="form-group">
                      <select
                        className="other-list-item"
                        name="taxpaid"
                        id="taxpaid"
                        value={values.taxpaid}
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
                      <span style={{ color: "red" }}>{errors.taxpaid}</span>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <h6>Tax Paid (Advance and Self-Assessment Tax)</h6>
                    <p>
                      Tax paid by the taxpayer for the financial year (other
                      than TDS/TCS)
                    </p>{" "}
                    <div class="form-group">
                      <select
                        className="other-list-item"
                        name="finayear"
                        id="finayear"
                        value={values.finayear}
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
                      <span style={{ color: "red" }}>{errors.finayear}</span>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <p className="other-list-item" style={{ color: "green" }}>
                      Next <br />
                      {/* <Link to={"/TaxDeducted"}>TDS</Link> */}
                      <button type="submit" disabled={isSubmitting}>
                        TDS
                      </button>
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

export default IncometaxPaid;
