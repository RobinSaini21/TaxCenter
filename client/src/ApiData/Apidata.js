import React, { useEffect,useState } from 'react';
import axios from 'axios';
//https://apisetu.gov.in/api/pan
//`http://apilayer.net/api/validate${access_key}`
function Apidata() {
  const access_key = "?access_key=12009281e35296599f69804863513cb5&number=7419028942&country_code=IN&format=1"
    const myApiData = () =>{
    axios.get("https://apisetu.gov.in/api/pan", {
   
      }
    )
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    }

    useEffect(() =>{
        myApiData();
    })
  return <div>

  </div>;
}

export default Apidata;
