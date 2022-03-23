import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { useNavigate } from "react-router";

function AboutIncome() {
  const Navigate = useNavigate();
  const intialData = {
    salary: "",
    hoPro: "",
    lessDe: "",
    totalTaxIn: "",
    tax: "",
    lessRe: "",
    addhealth: "",
    totalTax: "",
    lessRelief: "",
    tsd: "",
    addInterest: "",
    lessSelf: "",
    taxRefundable: "",
  };

  const basicRegistrationSchema = (values) => {
    const errors = {};
    if (!values.salary) {
      errors.salary = "Required";
    }
    if (!values.hoPro) {
      errors.hoPro = "Required";
    }
    if (!values.lessDe) {
      errors.lessDe = "Required";
    }
    if (!values.totalTax) {
      errors.totalTax = "Required";
    }
    if (!values.tax) {
      errors.tax = "Required";
    }
    if (!values.lessRe) {
      errors.lessRe = "Required";
    }
    if (!values.addhealth) {
      errors.addhealth = "Required";
    }
    if (!values.totalTax) {
      errors.totalTax = "Required";
    }
    if (!values.lessRelief) {
      errors.lessRelief = "Required";
    }
    if (!values.tsd) {
      errors.tsd = "Required";
    }
    if (!values.addInterest) {
      errors.addInterest = "Required";
    }
    if (!values.lessSelf) {
      errors.lessSelf = "Required";
    }
    if (!values.taxRefundable) {
      errors.taxRefundable = "Required";
    }
    return errors;
  };
  return (
    <div>
      <Formik
        initialValues={intialData}
        validate={basicRegistrationSchema}
        onSubmit={(values, { setSubmitting }) => {
          Navigate("/SelectRegime");
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
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
        }) => (
          <div>
            <form type="submit" onSubmit={handleSubmit}>
              <div className="TaxService_P">
                <div className="TaxSummary">
                  <ul class="list-group">
                    <li class="list-group-item">
                      Salary{" "}
                      <div class="form-group">
                        <select
                          className="other-list-item"
                          name="salary"
                          id="salary"
                          value={values.salary}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="" class="form-control item" disabled>
                            --Please choose an option--
                          </option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                      <span style={{ color: "red" }}>{errors.salary}</span>
                    </li>
                    <li class="list-group-item">
                      House Property{" "}
                      <div class="form-group">
                        <select
                          className="other-list-item"
                          name="hoPro"
                          id="hoPro"
                          value={values.hoPro}
                          onChange={handleChange}
                        >
                          <option value="" class="form-control item" disabled>
                            --Please choose an option--
                          </option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                      <span style={{ color: "red" }}>{errors.hoPro}</span>
                    </li>
                    <li class="list-group-item">
                      Less: Deductions{" "}
                      <div class="form-group">
                        <select
                          className="other-list-item"
                          name="lessDe"
                          id="lessDe"
                          value={values.lessDe}
                          onChange={handleChange}
                        >
                          <option value="" class="form-control item" disabled>
                            --Please choose an option--
                          </option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                      <span style={{ color: "red" }}>{errors.lessDe}</span>
                    </li>
                    <li class="list-group-item">
                      Total Taxable Income{" "}
                      <div class="form-group">
                        <select
                          className="other-list-item"
                          name="totalTaxIn"
                          id="totalTaxIn"
                          value={values.totalTaxIn}
                          onChange={handleChange}
                        >
                          <option value="" class="form-control item" disabled>
                            --Please choose an option--
                          </option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                      <span style={{ color: "red" }}>{errors.totalTax}</span>
                    </li>
                    <li class="list-group-item">
                      Tax{" "}
                      <div class="form-group">
                        <select
                          className="other-list-item"
                          name="tax"
                          id="tax"
                          value={values.tax}
                          onChange={handleChange}
                        >
                          <option value="" class="form-control item" disabled>
                            --Please choose an option--
                          </option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                      <span style={{ color: "red" }}>{errors.tax}</span>
                    </li>
                    <li class="list-group-item">
                      Less: Rebate U,s 874{" "}
                      <div class="form-group">
                        <select
                          className="other-list-item"
                          name="lessRe"
                          id="lessRe"
                          value={values.lessRe}
                          onChange={handleChange}
                        >
                          <option value="" class="form-control item" disabled>
                            --Please choose an option--
                          </option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                      <span style={{ color: "red" }}>{errors.lessDe}</span>
                    </li>
                    <li class="list-group-item">
                      Add Health and Education Cess{" "}
                      <div class="form-group">
                        <select
                          className="other-list-item"
                          name="addhealth"
                          id="addhealth"
                          value={values.addhealth}
                          onChange={handleChange}
                        >
                          <option value="" class="form-control item" disabled>
                            --Please choose an option--
                          </option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                      <span style={{ color: "red" }}>{errors.addhealth}</span>
                    </li>
                    <li class="list-group-item">
                      Total Tax{" "}
                      <div class="form-group">
                        <select
                          className="other-list-item"
                          name="totalTax"
                          id="totalTax"
                          value={values.totalTax}
                          onChange={handleChange}
                        >
                          <option value="" class="form-control item" disabled>
                            --Please choose an option--
                          </option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                      <span style={{ color: "red" }}>{errors.totalTax}</span>
                    </li>
                    <li class="list-group-item">
                      Less: Relief{" "}
                      <div class="form-group">
                        <select
                          className="other-list-item"
                          name="lessRelief"
                          id="lessRelief"
                          value={values.lessRelief}
                          onChange={handleChange}
                        >
                          <option value="" class="form-control item" disabled>
                            --Please choose an option--
                          </option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                      <span style={{ color: "red" }}>{errors.lessRelief}</span>
                    </li>
                    <li class="list-group-item">
                      TDS{" "}
                      <div class="form-group">
                        <select
                          className="other-list-item"
                          name="tsd"
                          id="tsd"
                          value={values.tsd}
                          onChange={handleChange}
                        >
                          <option value="" class="form-control item" disabled>
                            --Please choose an option--
                          </option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                      <span style={{ color: "red" }}>{errors.tsd}</span>
                    </li>
                    <li class="list-group-item">
                      Add: Interest{" "}
                      <div class="form-group">
                        <select
                          className="other-list-item"
                          name="addInterest"
                          id="addInterest"
                          value={values.addInterest}
                          onChange={handleChange}
                        >
                          <option value="" class="form-control item" disabled>
                            --Please choose an option--
                          </option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                      <span style={{ color: "red" }}>{errors.addInterest}</span>
                    </li>
                    <li class="list-group-item">
                      Less: Self Assessment Tax{" "}
                      <div class="form-group">
                        <select
                          className="other-list-item"
                          name="lessSelf"
                          id="lessSelf"
                          value={values.lessSelf}
                          onChange={handleChange}
                        >
                          <option value="" class="form-control item" disabled>
                            --Please choose an option--
                          </option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                      <span style={{ color: "red" }}>{errors.lessSelf}</span>
                    </li>
                    <li class="list-group-item">
                      Tax Refundable{" "}
                      <div class="form-group">
                        <select
                          className="other-list-item"
                          name="taxRefundable"
                          id="taxRefundable"
                          value={values.taxRefundable}
                          onChange={handleChange}
                        >
                          <option value="" class="form-control item" disabled>
                            --Please choose an option--
                          </option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                        <span style={{ color: "red" }}>
                          {errors.taxRefundable}
                        </span>
                      </div>
                    </li>
                    <li class="list-group-item">
                      <p className="other-list-item" style={{ color: "green" }}>
                        Next <br />
                        <div class="form-group">
                          <button
                            type="submit"
                            class="btn btn-block create-account"
                          >
                            Continue
                          </button>
                        </div>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default AboutIncome;


