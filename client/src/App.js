import React from "react";
import "./App.css";
import AllRoutes from "./AllRoutes/AllRoutes";
import Navbar_2 from "./components/homepage/Navbar/Navbar_2";
import Apidata from "./ApiData/Apidata";
import AdminPage from "./AdminPage/AdminPage";
import instance from "./http/Instance";
import { useEffect ,useState} from "react";

function App() {


  return (
    <>
      <Navbar_2 />
      <AllRoutes />
<Apidata/>
{/* <AdminPage/> */}
{/* <AdminPage/> */}
    </>
  );
}


export default App;
