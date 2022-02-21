import React from "react";
import "./App.css";
import AllRoutes from "./AllRoutes/AllRoutes";
import Navbar_2 from "./components/homepage/Navbar/Navbar_2";
import axios from "axios";
import { useSelector } from "react-redux";
import instance from "./http/Instance";
import Form16Details from './Form16Details/From16Details';
import Form16check from "./Form16Details/Form16check";



function App() { 
return (
    
  <>
{/* <Form16Details/> */}
       <Navbar_2/> 
      <AllRoutes/>  
   {/* <Form16check/> */}
           

    </>
  );
}


export default App;
