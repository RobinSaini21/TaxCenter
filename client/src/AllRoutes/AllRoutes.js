import React from "react";
import Section_1 from "../components/homepage/Sections/Section_1";
import TestReg from "../components/register/TestReg";
import TestingDetailForm from "../components/Form/TestingDetailForm";
import Login from "../components/login/Login";
import { BMICalculator } from "../Calculators/BmiCalculators";
import EmiCalculator from "../Calculators/EmiCalculator";
import Allcards from "../myServices/Allcards";
import { useRoutes } from "react-router";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import authReducer from "../Store/Reducer";
import BasicDetailForm from "../components/Form/BasicDetailForm";
import Register from "../components/register/Register";
import UploadPdf from "../components/PdfComponents/Uploadpdf";
import Hp from "../components/PdfComponents/Hp";
import Interest from "../components/PdfComponents/Interest";
import Salary from "../components/PdfComponents/Salary";
import Logout from "../components/login/logout";


function AllRoutes() {
// const {token} = useSelector((state) => authReducer)
const token = localStorage.getItem("User_toker")
// console.log(token)

const ProtectedRoutes = ({ children }) =>{
  return token ? children : <Navigate to="/login"  />
}


  let routes = useRoutes([
    {
      path: "/",
      element: <Section_1 />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
path: 'logout',
element: <Logout/>
    },
   
    {
      path: "/product_launchboard",
      element: <ProtectedRoutes><Allcards/></ProtectedRoutes>,
    },
      {
  path: "/uploadpdf",
  element: <UploadPdf/>
      },
      {
  path: "/hp",
  element: <Hp/>
      },
      {
  path: "/salary",
  element: <Salary/>
      },
      {
  path: "/interest",
  element: <Interest/>
      },
    {
        path: "/basicuser/:id",
        element: <ProtectedRoutes><BasicDetailForm/></ProtectedRoutes>,
        children:[
        ,
          {
            path: "bmi_cal",
            element: <BMICalculator />,
          },
          {
            path: "emi_cal",
            element: <EmiCalculator />,
          }
        ]
      }
      ]);
  return routes;
}

{
  /* <Route path="/" element={<Section_1 />} />
< Route path="/register" element={<TestReg/>}/>
 <Route path="/login" element={<Login />} />
 <Route path="/basicuser" element={<TestingDetailForm/> } />
 <Route path="/product_launchboard" element={<Allcards/>} />
 <Route path="/bmi_cal" element={<BMICalculator/>}></Route>
 <Route path="/emi_cal" element={<EmiCalculator/>}></Route>
</Routes> */
}
export default AllRoutes;
