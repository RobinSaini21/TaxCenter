import React from 'react';
import { Link } from 'react-router-dom';

function LoginBtn() {
    return (
        <Link to={"/login"}>
          <button className="nav_btn">LOGIN</button>
        </Link>
      );
}

export default LoginBtn