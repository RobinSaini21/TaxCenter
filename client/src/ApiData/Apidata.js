import React, { useEffect,useState } from 'react';
import axios from 'axios';
//https://apisetu.gov.in/api/pan
//`http://apilayer.net/api/validate${access_key}`
//"?access_key=12009281e35296599f69804863513cb5&number=&country_code=IN&format=1"
function Apidata() {
  const phonenumber = "7419028942"
  const country_code = "IN"
  const access_key = `?access_key=12009281e35296599f69804863513cb5&number=${phonenumber}&country_code=${country_code}&format=1`
    const myApiData = () =>{
    axios.get(`http://apilayer.net/api/validate${access_key}`, {
   
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
