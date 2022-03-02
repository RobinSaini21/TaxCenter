import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { useNavigate } from "react-router";

function ChooseTypeofRegime() {
  const Navigate = useNavigate();
  return (
    <div>
      <Formik
        initialValues={{ regime: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.regime) {
            errors.regime = "Please Select A Regime";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
          Navigate("/SalaryIncome");
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
            <div>
              <div class="container py-3">
                <div class="title h1 text-center"></div>

                <div class="card">
                  <div class="row ">
                    <div class="col-md-7 px-3">
                      <div class="card-block px-6">
                        <h4 class="card-title">Choose the Type of Return</h4>

                        <p class="card-text">
                          Please select the type of return
                        </p>
                        <div className="PanCa">
                          <p>
                            Is This a New/first (Original) Income-tax Return for
                            the Income earnd between 1st April 2020 and 31st
                            2021 that you are filing this
                          </p>
                          <div class="form-group">
                            <select
                              // className="other-list-item"
                              name="regime"
                              id="regime"
                              value={values.regime}
                              onChange={handleChange}
                            >
                              <option
                                value=""
                                class="form-control item"
                                disabled
                              >
                                --Please choose an option--
                              </option>
                              <option value="Yes (New/Original Return)">
                                Yes (New/Original Return)
                              </option>
                              <option value="No(I'm Filing s Revised Return)">
                                No(I'm Filing s Revised Return)
                              </option>
                            </select>
                            <span style={{ color: "red" }}>
                              {errors.regime}
                            </span>
                          </div>
                          <br />
                        </div>
                        <a href="#" class="mt-auto btn btn-new btn-primary  ">
                          + Add
                        </a>
                      </div>
                    </div>

                    <div class="col-md-5">
                      <div
                        id="CarouselTest"
                        class="carousel slide"
                        data-ride="carousel"
                      >
                        <div className="EDCMEnu">
                          <ol>
                            {/* <a class="dropdown-item" href="#">
                    Continue
                  </a> */}
                            {/* <Link to={`/basicuser/${auth}`} class="dropdown-item">
                    Edit
                  </Link> */}
                            {/* <Link to={"/SalaryIncome"} >
                    Salary
                 </Link> */}
                            <button type="submit" disabled={isSubmitting}>
                              Submit
                            </button>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <br />
              <br />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default ChooseTypeofRegime;
