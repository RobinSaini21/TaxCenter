import "./BasicDetailForm.css";
import axios from "axios";
import { Formik } from "formik";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { basicuserdata } from "../../services/AuthApi";
import { clearform16datasuccess } from "../../Store/actions/PdfActions";
import { useDispatch } from "react-redux";
import { basicsuccsess } from "../../Store/actions/PdfActions";
import { useEffect } from "react";
import instance from "../../http/Instance";

const BasicDetailForm =  () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { userDb_Id } = useSelector((state) => state.auth);
  const auth = useSelector((store) => store.auth.auth_token);
  const { form16 } = useSelector((state) => state.form);

  
  const profile = async (data) =>{
     instance.get('/getprofile', {
      headers: {
        Authorization: `${data}`,
      },
    })
    .then((res) => {
      const {data} = res
      dispatch(basicsuccsess(data))
      if(data){
        Navigate( `/product_launchboard/${userDb_Id}`)
      }
    return res
    })
    .catch((error) => {
      console.error(error);
    });
  }
  
  useEffect( async () =>{
   const res = await profile(userDb_Id)
   
  })

  const intialData = {
    pan: "",
    email: "",
    firstname: "",
    middlename: "",
    lastname: "",
    fathername: "",
    mobilenumber: "",
    gender: "",
    aadharnum: "",
    bday: "",
  };
  const basicRegistrationSchema = (values) => {
    const errors = {};
    if (!values.pan) {
      errors.pan = "Required";
    } else if (values.pan.length > 10) {
      errors.pan = "Invalid Pan Card Number Format";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.firstname) {
      errors.firstname = "Required";
    } else if (values.firstname.length < 3) {
      errors.firstname = "firstname must be 3 characters or more";
    }
    if (!values.middlename) {
      errors.middlename = "Required";
    } else if (values.middlename.length < 3) {
      errors.firstname = "middlename must be 3 characters or more";
    }
    if (!values.lastname) {
      errors.lastname = "Required";
    } else if (values.lastname.length < 3) {
      errors.lastname = "lastname must be 3 characters or more";
    }
    if (!values.fathername) {
      errors.fathername = "Required";
    } else if (values.fathername.length < 3) {
      errors.fathername = "fahtername must be 3 characters or more";
    }
    if (!values.aadharnum) {
      errors.aadharnum = "Required";
    } else if (values.aadharnum.length <= 12) {
      errors.aadharnum = "Aadhar number must be 3 characters or more";
    }
    if (!values.mobilenumber) {
      errors.mobilenumber = "Required";
    } else if (values.mobilenumber.length > 10) {
      errors.mobilenumber = "Aadhar number must be 3 characters or more";
    }
    if (!values.gender) {
      errors.gender = "Please Select One";
    }
    if (!values.bday) {
      errors.bday = "Select Your Birthday";
    }

    return errors;
  };

  return (
    <div>
      <Formik
        initialValues={intialData}
        validate={basicRegistrationSchema}
        onSubmit= {async (values, { setSubmitting }) => {
          const pan = values.pan;
          const email = values.email;
          const fathername = values.fathername;
          const firstname = values.firstname;
          const middlename = values.middlename;
          const lastname = values.lastname;
          const mobilenum = values.mobilenumber;
          const aadharnum = values.aadharnum;
          const gender = values.gender;
          const bday = values.bday;

          const basic = {
            userDb_Id,
            pan,
            email,
            firstname,
            middlename,
            lastname,
            mobilenum,
            aadharnum,
            fathername,
            gender,
            bday,
          };
       const res = await basicuserdata(basic)
         console.log("IN BASIC USER FORM",res)
              if (form16) {
                Navigate("/dashboard_Con");
                dispatch(clearform16datasuccess());  
              } else {
                Navigate(`/product_launchboard/${auth}`);
              }
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
              <div>
                <h4>Let Start With Basic Details</h4>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control item"
                  id="pan"
                  type="pan"
                  placeholder="PAN"
                  name="pan"
                  value={values.pan}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.pan}</span>
              </div>

              <div class="form-group">
                <input
                  type="text"
                  class="form-control item"
                  id="email"
                  type="email"
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
                  type="text"
                  class="form-control item"
                  id="bday"
                  name="bday"
                  value={values.bday}
                  onChange={handleChange}
                  label="Choose your birthdate"
                  type="date"
                  defaultValue="2017-05-24"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.bday}</span>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control item"
                  id="firstname"
                  type="firstname"
                  placeholder="Firstname"
                  name="firstname"
                  value={values.firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.firstname}</span>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control item"
                  id="middlename"
                  type="text"
                  placeholder="Middlename"
                  name="middlename"
                  value={values.middlename}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.middlename}</span>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control item"
                  id="lastname"
                  type="Last Name"
                  placeholder="Lastname"
                  name="lastname"
                  value={values.lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.lastname}</span>
              </div>
              <div class="form-group">
                <select
                  className="sSelect w-100"
                  name="gender"
                  id="gender"
                  value={values.gender}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="" class="form-control item" disabled>
                    --Please choose an option--
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <span style={{ color: "red" }}>{errors.gender}</span>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control item"
                  id="fathername"
                  type="fathername"
                  placeholder="Father Name"
                  name="fathername"
                  value={values.fathername}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.fathername}</span>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control item"
                  id="mobilenum"
                  type="number"
                  placeholder="Mobile Number"
                  name="mobilenumber"
                  value={values.mobilenumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.mobilenumber}</span>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control item"
                  type="Number"
                  placeholder="12 digit Aadhar Number"
                  name="aadharnum"
                  maxlength="12"
                  value={values.aadharnum}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span style={{ color: "red" }}>{errors.aadharnum}</span>
              </div>
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
};

export default BasicDetailForm;
