import React, { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import "./FaceBook.css";
import { apigoogleregister, apiregister } from "../../services/AuthApi";
import { loginSuccess } from "../../Store/actions/AuthActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useState } from "react";

const MyGoolgeLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSuccess = async (res) => {
    const token = res.accessToken;
    const useremail = res.profileObj.email;
    const googleId = res.profileObj.googleId;
    const name = res.profileObj.name;
    const gdata = { useremail, googleId, name };
    const response = await apigoogleregister(gdata);
    console.log(response);
    const email = response.data.fulldata.email;
    const auth_token = response.data.fulldata.token;
    const data = { auth_token, email };
    console.log(data);
    dispatch(loginSuccess(data));
    navigate(`/basicuser/${auth_token}`);
  };


  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_API_URL}
        buttonText="Login with Google"
        onSuccess={handleSuccess}
        onFailure={handleSuccess}
        className="btnGoogle"
        textButton="&nbsp;&nbsp;Sign In with Facebook"
      >
        <span className="gl_text">&nbsp;&nbsp;Sign In with Google</span>
      </GoogleLogin>
      <h1></h1>
    </div>
  );
};

export default MyGoolgeLogin;


