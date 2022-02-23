import React from "react";
import "./App.css";
import AllRoutes from "./AllRoutes/AllRoutes";
import Navbar_2 from "./components/homepage/Navbar/Navbar_2";
import axios from "axios";
import { useSelector } from "react-redux";
import instance from "./http/Instance";
import Form16Details from './Form16Details/From16Details';
import Form16check from "./Form16Details/Form16check";
import ClickContinue from "./components/ClickContinue/ClickContinue";
import Dashboard from "./Dashboard/DashboardName";
import TaxService from "./components/TaxService/TaxService";
import Taxsummary from "./components/TaxService/Taxsummary";
import ResidentialStatus from "./components/TaxService/ResidentialStatus";



function App() { 
return (
    
  <>

       <Navbar_2/> 
      <AllRoutes/>  
 {/* <ClickContinue/> */}
        {/* <Dashboard/>   
<TaxService/> */}
{/* <Taxsummary/> */}
{/* <ResidentialStatus/> */}
    </>
  );
}


export default App;
