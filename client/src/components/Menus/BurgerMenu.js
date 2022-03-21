import React, { useState } from "react";
import { logoutSuccess } from "../../Store/actions/AuthActions";
import { useDispatch } from "react-redux";
// import Burger_menu_logo from '../../public/Logo/hamburger-button-menu.png'
 import Burger from '../../Logo/hamburger-button-menu.png' 
import './BurgerMenu.css'
import { Link } from "react-router-dom";
const BurgerMenu = () => {
    
  const dispatch = useDispatch()
  const [show,setShow] = useState(false)
  const handleSubmit = () => {
    dispatch(logoutSuccess());
  };
  const showHide = () => {
    setShow(!show);
  };
  console.log(show);
  return (
    
    <div>
      <button className="Btn_Vertical_Text" onClick={showHide} style={{ border: "none" }}>
        ...
      </button>
      {show ? (
     
          <ul class="list-group">
  <Link to={"/profile"}>
  <li class="list-group-item">MY PROFILE</li>
  </Link>
  <Link to={'/'}>
  <li class="list-group-item" onClick={handleSubmit} style={{ cursor: "pointer" }}> LOGOUT</li>
  </Link>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>
     
        
      ) : (
       null
      )}
    </div>
  );
}

export default BurgerMenu