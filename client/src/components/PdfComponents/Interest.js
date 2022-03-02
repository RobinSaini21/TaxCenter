import React from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router";
import { interestapi } from "../../services/AuthApi";

function Interest() {
  const Navigate = useNavigate();
  const intialData = {
    savinginterest: "",
    fdrinterest: "",
    ppfinterest: "",
  };
  const basicRegistrationSchema = (values) => {
    const errors = {};
    if (!values.savinginterest) {
      document.getElementById("savinginterest").style.borderColor = "red";
      errors.savinginterest = "Required";
    }
    if (!values.fdrinterest) {
      errors.fdrinterest = "Required";
      document.getElementById("fdrinterest").style.borderColor = "red";
    }
    if (!values.ppfinterest) {
      errors.ppfinterest = "Required";
      document.getElementById("ppfinterest").style.borderColor = "red";
    }

    return errors;
  };

  return (
    <div>
      <Formik
        initialValues={intialData}
        validate={basicRegistrationSchema}
        onSubmit={(values, { setSubmitting }) => {
          Navigate("/hp");
          const savinginterest = values.savinginterest;
          const fdrinterest = values.fdrinterest;
          const ppfinterest = values.ppfinterest;
          const data = { savinginterest, fdrinterest, ppfinterest };
          interestapi(data);
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
          <div class="registration-form">
            <form type="submit" onSubmit={handleSubmit}>
              <div>{/* <h4>Let Start With Basic Details</h4>  */}</div>
              <div class="form-group">
                <input
                  class="form-control item"
                  id="savinginterest"
                  type="number"
                  placeholder="Saving Interest"
                  name="savinginterest"
                  // value={values.pan}
                  value={values.savinginterest}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.savinginterest}</span>
              </div>

              <div class="form-group">
                <select
                  className="sSelect w-100"
                  name="fdrinterest"
                  id="fdrinterest"
                  value={values.fdrinterest}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  // value={gender}
                  // onChange={(e) => selectGender(e.target.value)}
                >
                  <option value="" class="form-control item" disabled>
                    --Please choose an option--
                  </option>
                  <option value="POS">POS</option>
                  <option value="NSC">NSC</option>
                </select>

                <span style={{ color: "red" }}>{errors.fdrinterest}</span>
              </div>

              <div class="form-group">
                <input
                  type="number"
                  class="form-control item"
                  id="ppfinterest"
                  type="number"
                  placeholder="PPF Interest"
                  name="ppfinterest"
                  // value={values.pan}
                  value={values.ppfinterest}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <span style={{ color: "red" }}>{errors.ppfinterest}</span>
              <div class="form-group">
                <button type="submit" class="btn btn-block create-account">
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

export default Interest;
