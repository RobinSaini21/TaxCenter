import React from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router";
import { salaryapi } from "../../services/AuthApi";

function Salary() {
  const Navigate = useNavigate();
  const intialData = {
    employername: "",
    employercategory: "",
    whether: "",
    professionaltax: "",
    taxablesalary: "",
  };
  const basicRegistrationSchema = (values) => {
    const errors = {};
    if (!values.employername) {
      //  document.getElementById("employerename").style.borderColor = "red"
      errors.employername = "Required";
    }
    if (!values.employercategory) {
      errors.employercategory = "Required";
    }
    if (!values.whether) {
      errors.whether = "Required";
    }
    if (!values.professionaltax) {
      errors.professionaltax = "Required";
    }
    if (!values.taxablesalary) {
      errors.taxablesalary = "Required";
    }

    return errors;
  };

  return (
    <div>
      <Formik
        initialValues={intialData}
        validate={basicRegistrationSchema}
        onSubmit={(values, { setSubmitting }) => {
          Navigate("/interest");
          const employerename = values.employername;
          const employercategory = values.employercategory;
          const whether = values.whether;
          const professionaltax = values.professionaltax;
          const taxablesalary = values.taxablesalary;
          const data = {
            employerename,
            employercategory,
            whether,
            professionaltax,
            taxablesalary,
          };
          salaryapi(data);
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
                  class="form-control item h-10"
                  id="professionaltax"
                  type="text"
                  placeholder="Employer Name"
                  name="employername"
                  // value={values.pan}
                  value={values.employername}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.employername}</span>
              </div>

              <div class="form-group">
                <select
                  className="sSelect w-100"
                  name="employercategory"
                  id="employercategory"
                  value={values.employercategory}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  // value={gender}
                  // onChange={(e) => selectGender(e.target.value)}
                >
                  <option value="" class="form-control item" disabled>
                    --Please choose an option--
                  </option>
                  <option value="Govt">Govt</option>
                  <option value="Non">Non</option>
                </select>

                <span style={{ color: "red" }}>{errors.employercategory}</span>
              </div>
              <div class="form-group">
                <select
                  className="sSelect w-100"
                  name="whether"
                  id="whether"
                  value={values.whether}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  // value={gender}
                  // onChange={(e) => selectGender(e.target.value)}
                >
                  <option value="" class="form-control item" disabled>
                    --Please choose an option--
                  </option>
                  <option value="Pervious">Pervious</option>
                  <option value="Not">Not</option>
                </select>

                <span style={{ color: "red" }}>{errors.whether}</span>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control item h-10"
                  id="professionaltax"
                  type="number"
                  placeholder="Professional Tax"
                  name="professionaltax"
                  // value={values.pan}
                  value={values.professionaltax}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.professionaltax}</span>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control item"
                  id="taxablesalary"
                  type="number"
                  placeholder="Taxable Salary"
                  name="taxablesalary"
                  // value={values.pan}
                  value={values.taxablesalary}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <span style={{ color: "red" }}>{errors.taxablesalary}</span>
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

export default Salary;
