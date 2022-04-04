import { Formik } from "formik";
import MyGoolgeLogin from "../GoogleLogin/GoolgeLogin";
import Facebook from "../GoogleLogin/FacebookLogin";
import { apiregister } from "../../services/AuthApi";
import { useNavigate } from "react-router";
import { registerSuccess } from "../../Store/actions/AuthActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { userDbid } from "../../Store/actions/AuthActions";
import instance from "../../http/Instance";

const Register = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const userLoggedIn = useSelector((store) => store.auth.userLoggedIn);
  const auth = useSelector((store) => store.auth.auth_token);
  useEffect(() => {
    if (userLoggedIn) {
      Navigate(`/basicuser/${auth}`);
    }
  },[userLoggedIn]);
  const intialData = {
    email: "",
    password: "",
    confirm_password: "",
  };
  const registrationSchema = (values) => {
    const errors = {};
    if (!values.email) {
      document.getElementById("email").style.borderColor = "red";
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
      document.getElementById("password").style.borderColor = "red";
    } else if (values.password.length > 20) {
      errors.password = "password must be 20 characters or less";
    } else if (!/\d/.test(values.password)) {
      errors.password = "strong password";
    }
    if (values.confirm_password != values.password) {
      errors.confirm_password = "password is not matching";
      document.getElementById("password_confirm").style.borderColor = "red";
    }
    return errors;
  };
  return (
    <div>
      <Formik
        initialValues={intialData}
        validate={registrationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          const email = values.email;
          const password = values.password;
          const apidata = { email, password };
          const ares = await apiregister(apidata);
          const auth_token = ares.data;
          const data = { email, auth_token };
          await instance.get("/verfiy", {
              headers: {
                Authorization: `token ${auth_token}`,
              },
            })
            .then((res) => {
              console.log(res)
              const data = res.data.user_id;
             dispatch(userDbid(data))
        
            })
            .catch((error) => {
              console.error(error);
            });
          dispatch(registerSuccess(data));

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
          <form type="submit" onSubmit={handleSubmit}>
            <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
              <div class="card card0 border-0">
                <div class="row d-flex">
                  <div class="col-lg-6">
                    <div class="card1 pb-5">
                      <div class="row">
                        {" "}
                        <img
                          src="https://i.imgur.com/CXQmsmF.png"
                          class="logo"
                        />{" "}
                      </div>
                      <div class="row px-3 justify-content-center mt-4 mb-5 border-line">
                        {" "}
                        <img
                          src="https://i.imgur.com/uNGdWHi.png"
                          class="image"
                        />{" "}
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="card2 card border-0 px-4 py-5">
                      <div class="row mb-4 px-3 text-center">
                        <h6 class="mb-0 mr-4 mt-2">Sign in with</h6>
                        <div
                          class="d-flex justify-content-end"
                          style={{ width: "370px" }}
                        >
                          <Facebook />
                        </div>
                        <div
                          class="goBtn d-flex justify-content-start"
                          style={{ width: "370px" }}
                        >
                          <MyGoolgeLogin />
                        </div>
                      </div>
                      <div class="row px-3 mb-4">
                        <div class="line"></div>{" "}
                        <small class="or text-center">Or</small>
                        <div class="line"></div>
                      </div>
                      <div class="row px-3">
                        {" "}
                        <label class="mb-1">
                          <h6 class="mb-0 text-sm">Email Address</h6>
                        </label>{" "}
                        <input
                          class="mb-4"
                          type="text"
                          id="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          placeholder="Enter a valid email address"
                        />
                        <span style={{ color: "red" }}>{errors.email}</span>
                      </div>
                      <div class="row px-3">
                        {" "}
                        <label class="mb-1">
                          <h6 class="mb-0 text-sm">Password</h6>
                        </label>{" "}
                        <input
                          class="mb-4"
                          type="password"
                          id="password"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          placeholder="Enter Password"
                        />
                        <span style={{ color: "red" }}>{errors.email}</span>
                      </div>
                      <div class="row px-3">
                        {" "}
                        <label class="mb-1">
                          <h6 class="mb-0 text-sm">Confirm Password</h6>
                        </label>{" "}
                        <input
                          type="password"
                          name="confirm_password"
                          id="password_confirm"
                          value={values.confirm_password}
                          onChange={handleChange}
                          placeholder="Confirm Password"
                        />
                        <span style={{ color: "red" }}>{errors.password}</span>
                      </div>
                      <div class="row px-3 mb-4">
                        <a href="#" class="ml-auto mb-0 text-sm">
                          You agree to the terms and conditions of the website.
                        </a>
                      </div>
                      <div class="row mb-3 px-3">
                        {" "}
                        <button
                          type="submit"
                          class="btn btn-primary text-center"
                          type="submit"
                        >
                          Login
                        </button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-blue py-4">
                  <div class="row px-3">
                    {" "}
                    <small class="ml-4 ml-sm-5 mb-2">
                      Copyright &copy; 2019. All rights reserved.
                    </small>
                    <div class="social-contact ml-4 ml-sm-auto">
                      {" "}
                      <span class="fa fa-facebook mr-4 text-sm"></span>{" "}
                      <span class="fa fa-google-plus mr-4 text-sm"></span>{" "}
                      <span class="fa fa-linkedin mr-4 text-sm"></span>{" "}
                      <span class="fa fa-twitter mr-4 mr-sm-5 text-sm"></span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
