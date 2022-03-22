import React from "react";
import "./SideBar.css";
import { useState, useRef, useEffect } from "react";
import MenuIcon from "./MenuIcon";
import { sideStyles } from "./SidebarStyles";
import { Link } from "react-router-dom";

const SideBar = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  console.log(show);
  const openSide = () => {
    setShow(!show);
  };
  const closeSide = () => {
    setShow(!show);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        alert("Clicked Outside");
        setShow(!show);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div>
      {show ? (
        <button onClick={openSide} style={sideStyles.buttonstyles}>
          <MenuIcon />
        </button>
      ) : (
        <div ref={ref} class="sidebar-container">
          <div class="sidebar-logo">Project Name</div>
          <button onClick={closeSide} style={sideStyles.buttonstyles}>
            <MenuIcon />
          </button>
          <ul class="sidebar-navigation">
            <li class="header">Navigation</li>
            <li>
              <Link to={"/"} style={sideStyles.linkstyles}>
                <i class="fa fa-home" aria-hidden="true"></i> Homepage
              </Link>
            </li>
            <li>
              <Link to={"/"} style={sideStyles.linkstyles}>
                <i class="fa fa-home" aria-hidden="true"></i> Homepage
              </Link>
            </li>
            <li>
              <Link to={"/"} style={sideStyles.linkstyles}>
                <i class="fa fa-home" aria-hidden="true"></i> Homepage
              </Link>
            </li>
            <li>
              <Link to={"/"} style={sideStyles.linkstyles}>
                <i class="fa fa-home" aria-hidden="true"></i> Homepage
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SideBar;
