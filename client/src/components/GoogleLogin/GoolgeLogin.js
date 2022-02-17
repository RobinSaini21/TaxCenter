import React from 'react';
import { GoogleLogin } from 'react-google-login';
import './FaceBook.css';
import axios from 'axios';
import { apigoogleregister, apiregister } from '../../services/AuthApi';
import { loginSuccess } from '../../Store/actions/AuthActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';


function MyGoolgeLogin() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSuccess = res => {
    const auth_token = res.accessToken;
    const email = res.profileObj.email;
    const googleId = res.profileObj.googleId;
    const name = res.profileObj.name;


    const gdata = { auth_token, email, googleId,name };
    const data = {auth_token,email}
    console.log(gdata)
  apigoogleregister(gdata);
  dispatch(loginSuccess(data));
  navigate("/basicuser")
    
  };

    return <div>
    <GoogleLogin
        clientId = {process.env.REACT_APP_GOOGLE_API_URL}
        buttonText="Login with Google"

        onSuccess={handleSuccess}
        onFailure={handleSuccess}
        className="btnGoogle"
        textButton = "&nbsp;&nbsp;Sign In with Facebook" 
      >
    <span className='gl_text'>&nbsp;&nbsp;Sign In with Google</span> 
      </GoogleLogin>
    <h1></h1>
  </div>
}


export default MyGoolgeLogin;


//<meta name="google-signin-client_id" content="12345678-gbgin9h7q69rpjehq1cd2441b4nosnid.apps.googleusercontent.com">