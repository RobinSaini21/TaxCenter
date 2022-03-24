import React from "react";
import Section_1 from "../components/homepage/Sections/Section_1";
import Login from "../components/login/Login";
import { BMICalculator } from "../Calculators/BmiCalculators";
import EmiCalculator from "../Calculators/EmiCalculator";
import Allcards from "../myServices/Allcards";
import { useRoutes } from "react-router";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import BasicDetailForm from "../components/Form/BasicDetailForm";
import Register from "../components/register/Register";
import UploadPdf from "../components/PdfComponents/Uploadpdf";
import Hp from "../components/PdfComponents/Hp";
import Interest from "../components/PdfComponents/Interest";
import Salary from "../components/PdfComponents/Salary";
import From16Details from "../Form16Details/From16Details";
import Form16check from "../Form16Details/Form16check";
import ClickContinue from "../components/ClickContinue/ClickContinue";
import Taxsummary from "../components/TaxService/Taxsummary";
import Dashboard from "../Dashboard/DashboardName";
import ResidentialStatus from "../components/TaxService/ResidentialStatus";
import SelectRegime from "../components/TaxService/SelectRegime";
import ChooseTypeofRegime from "../components/TaxService/ChooseTypeofRegime";
import SalaryIncome from "../components/TaxService/SalaryIncome";
import Deduction from "../components/TaxService/Deduction";
import SavingDeduction from "../components/TaxService/SavingDeduction";
import AboutIncome from "../components/TaxService/AboutIncome";
import IncometaxPaid from "../components/TaxService/IncometaxPaid";
import TaxDeducted from "../components/TaxService/TaxDeducted";
import OtherInformations from "../components/TaxService/OtherInformations";
import FamilyIncome from "../components/TaxService/FamilyIncome";
import ContactDetails from "../components/TaxService/ContactDetails";
import BanKDetails from "../components/TaxService/BanKDetails";
import AddBankDetails from "../components/TaxService/AddBankDetails";
import Users from "../AdminPage/Users";
import AdminPage from "../AdminPage/AdminPage";
import Profile from "../components/Profile/Profile";
import UserDetails from "../AdminPage/UserDetails";
import About from "../components/homepage/Sections/About/About";

function AllRoutes() {

  const user = useSelector((store) => store.auth.userLoggedIn);

  const ProtectedRoutes = ({ children }) => {
    return user ? children : <Navigate to="/login" />;
  };

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
      path: "/form16check",
      element: <Form16check />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <ClickContinue />,
    },
    {
      path: "/profile",
      element: <Profile/>
          },
    {
      path: "/dashboard_Con",
      element: <Dashboard />,
    },
    {
      path: "/taxsummary",
      element: <Taxsummary />,
    },
    {
      path: "/TaxDeducted",
element: <TaxDeducted/>
    },
    {
      path: "/ResidentialStatus",
      element: <ResidentialStatus />,
    },
    {
      path: "ChooseTypeofRegime",
      element: <ChooseTypeofRegime />,
    },
    {
      path: "/SelectRegime",
      element: <SelectRegime />,
    },
    {
      path: "/OtherInformations" ,
      element:<OtherInformations/>
    },
{ 
  path:"/FamilyIncome",
  element: <FamilyIncome/>
},
    {
      path: "/product_launchboard/:id",
      element: (
        <ProtectedRoutes>
          <Allcards />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/uploadpdf",
      element: <UploadPdf />,
    },
    {
      path: "/hp",
      element: <Hp />,
    },
    {
      path: "/salary/:id",
      element: <Salary />,
    },
    {
      path: "/interest",
      element: <Interest />,
    },
    { 
      path: "/ContactDetails",
      element: <ContactDetails/>
    },
    {
      path: "/form16/:id",
      element: <From16Details />,
    },
    {
      path: "/basicuser/:id",
      element: (
        <ProtectedRoutes>
          <BasicDetailForm />
        </ProtectedRoutes>
      ),
      children: [
        ,
        {
          path: "bmi_cal",
          element: <BMICalculator />,
        },
        {
          path: "emi_cal",
          element: <EmiCalculator />,
        },
      ],
    },
    {
     path:"/SalaryIncome",
     element: <SalaryIncome/> 
    },
    {
      path: "/Deduction",
      element: <Deduction/>
    },
    {
      path: "/SavingDeduction",
      element: <SavingDeduction/>
    },
    {
      path: "/IncometaxPaid",
element: <IncometaxPaid/>
    },
    {
      path: "/AboutIncome",
      element: <AboutIncome/>
    },
    {
      path: "/BanKDetails",
      element: <BanKDetails/>
    },
    {
      path: "/AddBankDetails",
      element: <AddBankDetails/>
    },
    {
      path: '/admin_user_page',
      element: <Users/>
    },
    {
      path: "/Adminpage",
element: <AdminPage/>
    },
    {
      path: "/user",
      element: <Users/>
    },
    {
      path: "/UserDetails/:id",
      element: <UserDetails/>
    },{
      path: "/About",
      element: <About/>

    }
  ]);
  return routes;
}



export default AllRoutes;
