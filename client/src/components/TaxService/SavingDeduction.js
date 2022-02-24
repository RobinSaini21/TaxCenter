import axios from "axios";
import { Formik } from "formik";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { basicsuccsess } from "../../Store/actions/PdfActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function SavingDeduction() {
  //   const auth = useSelector((store) => store.auth.auth_token);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const intialData = {
    c80: "",
    ccc80: "",
    dcc80: "",
    dcc801b: "",
    ccd802: "",
    d80: "",
    totalamount: "",
    g80: "",
    tta80: "",
  };
  const basicRegistrationSchema = (values) => {
    const errors = {};
    if (!values.c80) {
      errors.c80 = "Required";
    }
    if (!values.ccc80) {
      errors.ccc80 = "Required";
    }
    if (!values.dcc80) {
      errors.dcc80 = "Required";
    }
    if (!values.dcc801b) {
      errors.dcc801b = "Required";
    }
    if (!values.ccd802) {
      errors.ccd802 = "Required";
    }
    if (!values.d80) {
      errors.d80 = "Required";
    }
    if (!values.totalamount) {
      errors.totalamount = "Required";
    }
    if (!values.g80) {
      errors.g80 = "Required";
    }
    if (!values.tta80) {
      errors.tta80 = "Required";
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
          Navigate("/IncometaxPaid");
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
                <h4>Tax saving deductions</h4>
                <p>
                  Life Insurance, Provident fund, Mutual funds, Pension funds,
                  Medical premium, Donations, etc.
                </p>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control item"
                  type="number"
                  placeholder="80c Tax Saving Investment"
                  name="c80"
                  // value={values.pan}
                  value={values.c80}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.c80}</span>
              </div>

              <div class="form-group">
                <input
                  type="text"
                  class="form-control item"
                  placeholder="80CCC Pension Funds"
                  name="ccc80"
                  // value={values.pan}
                  value={values.ccc80}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {/* <span style={{color:"red" }} >{errors.email}</span> */}
                <span style={{ color: "red" }}>{errors.ccc80}</span>
              </div>
              <div class="form-group">
                <input
                  class="form-control item"
                  type="number"
                  placeholder="80CCD(1) - Self Contribution "
                  name="dcc80"
                  // value={values.pan}
                  value={values.dcc80}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.dcc80}</span>
                {/* <span style={{color:"red" }} >{errors.firstname}</span> */}
              </div>
              <div class="form-group">
                <input
                  class="form-control item"
                  id="middlename"
                  type="number"
                  placeholder=" 80CCD(1B)- Additional Contribution"
                  name="dcc801b"
                  // value={values.pan}
                  value={values.dcc801b}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.dcc801b}</span>
              </div>
              <div class="form-group">
                <input
                  class="form-control item"
                  id="lastname"
                  type="number"
                  placeholder="80CCD(2)- Employers Contribution"
                  name="ccd802"
                  // value={values.pan}
                  value={values.ccd802}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.ccd802}</span>
                {/* <span style={{color:"red" }} >{errors.lastname}</span> */}
              </div>

              <div class="form-group">
                <input
                  type="text"
                  class="form-control item"
                  id="fathername"
                  placeholder="80D Health Insurance"
                  name="d80"
                  // value={values.pan}
                  value={values.d80}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.d80}</span>
                {/* <span style={{color:"red" }} >{errors.fathername}</span> */}
              </div>
              <div class="form-group">
                <input
                  class="form-control item"
                  type="number"
                  placeholder="G80 Donations"
                  name="g80"
                  // value={values.pan}
                  value={values.g80}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.g80}</span>
              </div>
              <div class="form-group">
                <input
                  class="form-control item"
                  type="Number"
                  placeholder="TTA80 - Saving Bank Account Interest"
                  name="totalamount"
                  value={values.totalamount}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.totalamount}</span>
              </div>
              <div class="form-group">
                <input
                  class="form-control item"
                  type="Number"
                  placeholder="TTA80 - Saving Bank Account Interest"
                  name="tta80"
                  value={values.tta80}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.tta80}</span>
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

export default SavingDeduction;
