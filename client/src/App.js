import React,{useState} from "react";
import AllRoutes from "./AllRoutes/AllRoutes";
import Navbar_2 from "./components/homepage/Navbar/Navbar_2";
import SideBar from "./components/SideBarMenu/SideBar";
import LandinPage from "./components/homepage/Sections/LandinPage";
import About from "./components/homepage/Sections/About/About";
import AboutBootStrap from "./components/homepage/Sections/About/AboutBootStrap";
import Footer from "./components/homepage/Sections/Footer/Footer";
import Career from "./components/homepage/Career/Career";
import TrustandSafty from "./components/homepage/Sections/TrustandSafty/TrustandSafty";
import ClearnadLearn from "./components/homepage/Sections/ClearnadLearn/ClearnadLearn";
import ClearChoricals from "./components/homepage/ClearChoricals/ClearChoricals";
import Glossary from "./components/homepage/Sections/Glossary/Glossary";

const App = () => {

  return (
    <>
      {/* {admin ? <SideBar /> :}
     */}
       <Navbar_2 />
       {/* <LandinPage/> */}
       <AllRoutes />  
{/* <About/> */}
<Footer/>
    </>
  );
}

 {/* <AboutBootStrap/>
   <TrustandSafty/>
   <ClearnadLearn/>
    <ClearChoricals/>
     
      <Glossary/> */}
export default App;
