import React from "react";
import "./App.css";
import Login from "./components/login/Login";
import Navbar from "./components/homepage/Navbar/Navbar";
import AllRoutes from "./AllRoutes/AllRoutes";
import storage from "redux-persist/lib/storage";
import persistor from "./Store"
import Navbar_2 from "./components/homepage/Navbar/Navbar_2";
import Register from "./components/register/Register";
import AssistedServices from "./myServices/AssistedServices";
import BasicTestReg from "./components/Form/TestingDetailForm";
import TestReg from "./components/register/TestReg";
import BasicDetailForm from "./components/Form/BasicDetailForm";
import UploadPdf from "./components/PdfComponents/Uploadpdf";
import { useSelector } from "react-redux";
import Salary from "./components/PdfComponents/Salary";
import Interest from "./components/PdfComponents/Interest";
import Hp from "./components/PdfComponents/Hp";
import { useDispatch } from "react-redux";
import { logoutSuccess } from "./Store/actions/AuthActions";



function App() {


return (
    
    <div className="App">

       <Navbar_2/> 
      <AllRoutes/>  

    </div>
  );
}


export default App;
