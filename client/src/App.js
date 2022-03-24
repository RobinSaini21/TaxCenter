import React,{useState} from "react";
import AllRoutes from "./AllRoutes/AllRoutes";
import Navbar_2 from "./components/homepage/Navbar/Navbar_2";
import SideBar from "./components/SideBarMenu/SideBar";
import LandinPage from "./components/homepage/Sections/LandinPage";
import About from "./components/homepage/Sections/About/About";
import AboutBootStrap from "./components/homepage/Sections/About/AboutBootStrap";


function App() {
  const admin = false;
  return (
    <>
      {/* {admin ? <SideBar /> : <Navbar_2 />}
      <AllRoutes /> */}
      <AboutBootStrap/>
      {/* <LandinPage/> */}
      {/* <About/> */}

    </>
  );
}

export default App;
