import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { Formik } from "formik";

function OtherInformations() {
  const initialDeduction = {
    familymember: "",
    shares: "",
    civilCode: "",
  };
  const Navigate = useNavigate();
  return (
    <div>
      <Formik
        initialValues={initialDeduction}
        validate={(values) => {
          const errors = {};
          if (!values.familymember) {
            errors.taxpaid = "Required";
          }
          if (!values.shares) {
            errors.shares = "Required";
          }
          if (!values.civilCode) {
            errors.civilCode = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
          Navigate("/FamilyIncome");
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
              <div className="TaxSummary">
                <h5>Now, some other informations</h5>
                <ul class="list-group">
                  <li class="list-group-item">
                    <h4>
                      {" "}
                      Do you have any Foreign bank accounts, shares or property?
                    </h4>
                    <p>
                      Select "Yes" if you have any investment in movable /
                      immovable property outside India
                    </p>
                    <div class="form-group">
                      <select
                        className="other-list-item"
                        name="familymember"
                        id="familymember"
                        value={values.familymember}
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
                      <span style={{ color: "red" }}>{errors.shares}</span>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <h4>
                      {" "}
                      Do you want to include Income of any of your family
                      member?
                    </h4>
                    <p>
                      Select "Yes" if you have to include (club) income of your
                      family members in your Income-tax return.
                    </p>

                    <div class="form-group">
                      <select
                        className="other-list-item"
                        name="shares"
                        id="shares"
                        value={values.shares}
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
                      <span style={{ color: "red" }}>{errors.shares}</span>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <h4>Are you governed by Portuguese Civil Code?</h4>
                    <p>
                      Portuguese civil code is in force in states of Goa, Union
                      Territories of Dadra and Nagar Haveli and Daman and Diu.
                      Select Yes, if you are governed by Portuguese Civil Code.
                      Select No, if not applicable.
                    </p>

                    <div class="form-group">
                      <select
                        className="other-list-item"
                        name="civilCode"
                        id="civilCode"
                        value={values.civilCode}
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
                      <span style={{ color: "red" }}>{errors.civilCode}</span>
                    </div>
                  </li>

                  <li class="list-group-item">
                    <p className="other-list-item" style={{ color: "green" }}>
                      Next <br />
                      {/* <Link to={"/FamilyIncome"}>Other Details</Link> */}
                      <button type="submit" disabled={isSubmitting}>
                        Submit
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

export default OtherInformations;

function SelectRegime() {
  const initialDeduction = {
    familymember: "",
    shares: "",
    civilCode: "",
  };
  const Navigate = useNavigate();
  return (
    <div>
      <Formik
        initialValues={initialDeduction}
        validate={(values) => {
          const errors = {};
          if (!values.familymember) {
            errors.taxpaid = "Required";
          }
          if (!values.shares) {
            errors.shares = "Required";
          }
          if (!values.civilCode) {
            errors.civilCode = "Required";
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
              <div className="TaxSummary">
                <h5>Now, some other informations</h5>
                <ul class="list-group">
                  <li class="list-group-item">
                    <h4>
                      {" "}
                      Do you have any Foreign bank accounts, shares or property?
                    </h4>
                    <p>
                      Select "Yes" if you have any investment in movable /
                      immovable property outside India
                    </p>
                    <div class="form-group">
                      <select
                        className="other-list-item"
                        name="familymember"
                        id="familymember"
                        value={values.familymember}
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
                      <span style={{ color: "red" }}>
                        {errors.familymember}
                      </span>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <h4>
                      {" "}
                      Do you want to include Income of any of your family
                      member?
                    </h4>
                    <p>
                      Select "Yes" if you have to include (club) income of your
                      family members in your Income-tax return.
                    </p>

                    <div class="form-group">
                      <select
                        className="other-list-item"
                        name="shares"
                        id="shares"
                        value={values.shares}
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
                      <span style={{ color: "red" }}>{errors.shares}</span>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <h4>Are you governed by Portuguese Civil Code?</h4>
                    <p>
                      Portuguese civil code is in force in states of Goa, Union
                      Territories of Dadra and Nagar Haveli and Daman and Diu.
                      Select Yes, if you are governed by Portuguese Civil Code.
                      Select No, if not applicable.
                    </p>

                    <div class="form-group">
                      <select
                        className="other-list-item"
                        name="civilCode"
                        id="civilCode"
                        value={values.civilCode}
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
                      <span style={{ color: "red" }}>{errors.civilCode}</span>
                    </div>
                  </li>

                  <li class="list-group-item">
                    <p className="other-list-item" style={{ color: "green" }}>
                      Next <br />
                      {/* <Link to={"/FamilyIncome"}>Other Details</Link> */}
                      <button type="submit" disabled={isSubmitting}>
                        Submit
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
