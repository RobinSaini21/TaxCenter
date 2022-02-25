import React from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

function ContactDetails() {
    const Navigate = useNavigate();
  const dispatch = useDispatch();
  const intialData = {
    address: "",
    premise: "",
    street: "",
    area: "",
    town: "",
    pincode: "",
    state: "",
    country: "",
    //CONTACT DETAILS
    email: "",
    moblienum: "",
    aadharnum: "",
  };
  const basicRegistrationSchema = (values) => {
    const errors = {};
    if (!values.address) {
      errors.address = "Required";
    }
    if(!values.premise){
        errors.premise = "Required"
    }
    if(!values.street){
        errors.street = "Required"
    }
    if(!values.area){
        errors.area = "Required"
    }
    if(!values.town){
        errors.town = "Required"
    }
    if(!values.pincode){
        errors.pincode = "Required"
    }
    if(!values.state){
        errors.state = "Required"
    }
    if(!values.country){
        errors.country = "Required"
    }
    if(!values.email){
        errors.email = "Required"
    }
    if(!values.moblienum){
        errors.moblienum = "Required"
    }
    if(!values.aadharnum){
        errors.aadharnum = "Required"
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
                <h4>Please complete your Contact Details</h4>
                <p>
                This is a mandatory requirement from the Government
                </p>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control item"
                  type="text"
                  placeholder="Floor/Door/Block No"
                  name="address"
                  // value={values.pan}
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.address}</span>
              </div>

              <div class="form-group">
                <input
                  type="text"
                  class="form-control item"
                  placeholder="Premise Building"
                  name="premise"
                  // value={values.pan}
                  value={values.premise}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {/* <span style={{color:"red" }} >{errors.email}</span> */}
                <span style={{ color: "red" }}>{errors.premise}</span>
              </div>
              <div class="form-group">
                <input
                  class="form-control item"
                  type="text"
                  placeholder="Street/Road"
                  name="street"
                  // value={values.pan}
                  value={values.street}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.street}</span>
                {/* <span style={{color:"red" }} >{errors.firstname}</span> */}
              </div>
              <div class="form-group">
                <input
                  class="form-control item"
                  type="text"
                  placeholder="Area/Locality"
                  name="area"
                  // value={values.pan}
                  value={values.area}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.area}</span>
              </div>
              <div class="form-group">
                <input
                  class="form-control item"
                  type="text"
                  placeholder="Town/City/District"
                  name="town"
                  // value={values.pan}
                  value={values.town}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.town}</span>
                {/* <span style={{color:"red" }} >{errors.lastname}</span> */}
              </div>

              <div class="form-group">
                <input
                  type="text"
                  class="form-control item"
                  id="fathername"
                  placeholder="Pin Code"
                  name="pincode"
                  // value={values.pan}
                  value={values.pincode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.pincode}</span>
                {/* <span style={{color:"red" }} >{errors.fathername}</span> */}
              </div>
              <div class="form-group">
                <input
                  class="form-control item"
                  type="text"
                  placeholder="State"
                  name="state"
                  // value={values.pan}
                  value={values.state}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.state}</span>
              </div>
              <div class="form-group">
                <input
                  class="form-control item"
                  type="Number"
                  placeholder="Country"
                  name="country"
                  value={values.country}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.country}</span>
              </div>
              <div class="form-group">
                <input
                  class="form-control item"
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.email}</span>
              </div>
              <div class="form-group">
                <input
                  class="form-control item"
                  type="Number"
                  placeholder="Moblie Number"
                  name="moblienum"
                  value={values.moblienum}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.moblienum}</span>
              </div>
              <div class="form-group">
                <input
                  class="form-control item"
                  type="Number"
                  placeholder="Aadhar Number"
                  name="aadharnum"
                  value={values.aadharnum}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.aadharnum}</span>
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

export default ContactDetails