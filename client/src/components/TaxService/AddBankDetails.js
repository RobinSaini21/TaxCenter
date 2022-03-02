import React from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { Formik } from "formik";

function AddBankDetails() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const intialData = {
    ifscode: "",
    bankname: "",
    accounttype: "",
    accountnumber: "",
  };
  const basicRegistrationSchema = (values) => {
    const errors = {};
    if (!values.ifscode) {
      errors.ifscode = "Required";
    }
    if (!values.bankname) {
      errors.bankname = "Required";
    }
    if (!values.accounttype) {
      errors.accounttype = "Required";
    }
    if (!values.accountnumber) {
      errors.accountnumber = "Required";
    }

    return errors;
  };

  return (
    <div>
      <Formik
        initialValues={intialData}
        validate={basicRegistrationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
          Navigate("/BanKDetails");
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
          <div class="registration-form">
            <form type="submit" onSubmit={handleSubmit}>
              <div>
                <h4>Bank Details</h4>
                <p>Bank Account is mandatory to get refunds</p>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control item"
                  type="text"
                  placeholder="IFSC Code"
                  name="ifscode"
                  // value={values.pan}
                  value={values.ifscode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.ifscode}</span>
              </div>

              <div class="form-group">
                <input
                  type="text"
                  class="form-control item"
                  placeholder="Bank Name"
                  name="bankname"
                  // value={values.pan}
                  value={values.bankname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {/* <span style={{color:"red" }} >{errors.email}</span> */}
                <span style={{ color: "red" }}>{errors.bankname}</span>
              </div>
              <div class="form-group">
                <select
                  className="sSelect w-100"
                  name="accounttype"
                  value={values.accounttype}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  // value={gender}
                  // onChange={(e) => selectGender(e.target.value)}
                >
                  <option value="" class="form-control item" disabled>
                    --Please choose an option--
                  </option>
                  <option value="Saving">Saving</option>
                  <option value="Current">Current</option>
                </select>

                <span style={{ color: "red" }}>{errors.accounttype}</span>
              </div>
              <div class="form-group">
                <input
                  class="form-control item"
                  type="text"
                  placeholder="Town/City/District"
                  name="accountnumber"
                  // value={values.pan}
                  value={values.accountnumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.accountnumber}</span>
                {/* <span style={{color:"red" }} >{errors.lastname}</span> */}
              </div>

              <div class="form-group">
                <button type="submit" class="btn btn-block create-account">
                  {/* <Link to={"/IncometaxPaid"}>
                    Submit
                    </Link> */}
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default AddBankDetails;
