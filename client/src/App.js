import React from "react";
import "./App.css";
import AllRoutes from "./AllRoutes/AllRoutes";
import Navbar_2 from "./components/homepage/Navbar/Navbar_2";
import axios from "axios";
import { useSelector } from "react-redux";
import instance from "./http/Instance";
import Form16Details from './Form16Details/From16Details'



function App() { 
return (
    
    <div className="App">
<Form16Details/>
       {/* <Navbar_2/> 
      <AllRoutes/>   */}

    </div>
  );
}


export default App;
