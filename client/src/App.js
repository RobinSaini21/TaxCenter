import React from "react";
import AllRoutes from "./AllRoutes/AllRoutes";
import Navbar_2 from "./components/homepage/Navbar/Navbar_2";
import SideBar from "./components/SideBarMenu/SideBar";


function App() {
  const admin = false;
  return (
    <>
      {admin ? <SideBar /> : <Navbar_2 />}
      <AllRoutes />
    </>
  );
}

export default App;
