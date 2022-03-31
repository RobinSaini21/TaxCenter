import React from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router";
import { apiselectregime } from "../../services/AuthApi";
import { useSelector } from "react-redux";

function SelectRegime() {
  const { userDb_Id } = useSelector((state) => state.auth);
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
        onSubmit= { async (values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
         
          const data = {
            regime: values.regime,
            use_id: userDb_Id
          }
          const res = await apiselectregime(data)
          console.log(res)
          Navigate("/ResidentialStatus");
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
                        <h4 class="card-title">
                          Which Tax Regime Have You Opted For?{" "}
                        </h4>

                        <p class="card-text">
                          Old Regime and New Regime are two different ways to
                          calculation of Tax
                        </p>
                        <div className="PanCa">
                          <div class="form-group">
                            <select
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
                              <option value="Let Tax Center decided the description for me">
                                Let Tax Center decided the description for me
                              </option>
                              <option value="Old Regime">Old Regime</option>
                              <option value="New Regime">New Regime</option>
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

export default SelectRegime;
