import React from "react";
import "./App.css";
import AllRoutes from "./AllRoutes/AllRoutes";
import Navbar_2 from "./components/homepage/Navbar/Navbar_2";
import Apidata from "./ApiData/Apidata";
import AdminPage from "./AdminPage/AdminPage";
import instance from "./http/Instance";
import { useEffect ,useState,useRef} from "react"
import SideBar from "./components/SideBarMenu/SideBar";
//'/getprofile'
function App() {
const admin = true
  return (
    <>
     {admin?  <SideBar/>: 
 <Navbar_2 />
     }
      <AllRoutes />
      {/* <SideBar/> */}
    
      {/* <OutsideAlerter/> */}
    </>
  );
}



// function useOutsideAlerter(ref) {
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (ref.current && !ref.current.contains(event.target)) {
//         alert("You clicked outside of me!");
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
    
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [ref]);
// }


//  function OutsideAlerter(props) {
//   const wrapperRef = useRef(null);
//   useOutsideAlerter(wrapperRef);

//   return <div style={{border: "2px solid black",height: "100px "}} ref={wrapperRef}>{props.children}</div>;
// }

export default App;
