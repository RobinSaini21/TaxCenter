import React from 'react';
import Sidebar from './Navbar_Sidebar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logout from '../../login/logout';
import "./Navbar.css";
import { useDispatch } from 'react-redux';
import { logoutSuccess } from '../../../Store/actions/AuthActions';


function Navbar_2() {
const dispatch = useDispatch()
  const userLoggedIn = useSelector((state) => state.userLoggedIn)
  console.log("Navbar", userLoggedIn)

const Logout_button = () =>{

 return(
  <Link to={"/login"}>
      <button className='nav_btn' >SIGN IN</button>
 </Link>
 )
}
const Login_button = () =>{
  return(
    <Link to={'/'}>
   <button className='nav_btn' onClick={dispatch(logoutSuccess)} >SIGN OUT</button>
  </Link>
  )
}

  return (
    
    <>
    <nav className="navbar navbar-expand-lg navbar-light " style={{background: "#118A85", height: "123px" }} >
  <div className="container">
   
    <a className= "header_nav navbar-brand" href="#" style={{color:"#051C49"}} >Tax Center</a>
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="nav_collapse collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className= "nav_header_link nav-link active" aria-current="page" href="#" style={{color: "white"}} >ABOUT US</a>
        </li>
        <li className="nav-item">
          <a className= "nav_header_link nav-link" href="#" style={{color: "white"}}>PRICING</a>
        </li>
        <li className="nav_header_link nav-item dropdown" style={{color: "white"}}>
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "white"}}>
         SERVICES
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
         <li className="nav-item">
          <a className="nav_header_link nav-link" href="#" style={{color: "white"}}>HELP</a>
        </li>
        <li className="nav-item">
        {userLoggedIn === undefined && true? (
       <Logout_button/>
        ) : (
        <Login_button/>
        )}{" "}
 
          
        </li>
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    </>
  );
}

export default Navbar_2;
