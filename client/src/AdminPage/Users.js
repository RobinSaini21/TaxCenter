import React, { useState } from "react";
import { useSelector } from "react-redux";

function Users() {
  const { apidata } = useSelector((state) => state.api);
  const[show, setShow] = useState(false);
  console.log(Array.isArray(apidata));
  const totalemails = apidata.length;
  console.log(apidata);
const Showdata = () => {
  const listItems = apidata.map((product) => (
    <li class="list-group-item" key={product._id}>
      {product.email}
    </li>))
return(
<ol>{listItems}</ol>
)
}
const NoShowdata = () => {  
  return (
    <>
  <h1>No data is shown</h1>
    </>
  )}


const handleshowData = () =>{
  if(show){
setShow(false)
  }
  else {
    setShow(true)
  }
}
  // const listItems = apidata.map((product) => (
  //   <li class="list-group-item" key={product._id}>
  //     {product.email}  <button onClick={handleshowData}>+</button>
  //   </li>


  return (
    //class="list-group"
    <div>
    <button onClick={handleshowData}> +</button>
 {
   show? <Showdata/>: <NoShowdata/>
 }

    </div>
  );
}

export default Users;
