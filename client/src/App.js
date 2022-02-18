import React from "react";
import "./App.css";
import AllRoutes from "./AllRoutes/AllRoutes";
import Navbar_2 from "./components/homepage/Navbar/Navbar_2";
import axios from "axios";
import { useSelector } from "react-redux";
import instance from "./http/Instance";



function App() { 
//  const token = useSelector(store =>store.auth.auth_token)
//  console.log('AUTH_TOKEN =>' ,token)

// instance.get("/auth",token)
// .then(res =>{
//   console.log(res)
// })

return (
    
    <div className="App">

       <Navbar_2/> 
      <AllRoutes/>  

    </div>
  );
}


export default App;
