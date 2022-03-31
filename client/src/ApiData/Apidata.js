import React, { useEffect,useState } from 'react';
import axios from 'axios';
import instance from '../http/Instance';
import AdminPage from '../AdminPage/AdminPage';
import { array } from 'yup/lib/locale';
import { apidata } from '../Store/actions/ApiActions';
import { useDispatch } from 'react-redux';

//https://apisetu.gov.in/api/pan
//`http://apilayer.net/api/validate${access_key}`
//"?access_key=12009281e35296599f69804863513cb5&number=&country_code=IN&format=1"
function Apidata() {
  const dispatch = useDispatch()
  const[data,setData] = useState('');
  const[totalEmail,setTotalemail] = useState('')
  // const[totaluser,setTotaluser]
  // const phonenumber = "7419028942"
  // const country_code = "IN"
  // const access_key = `?access_key=12009281e35296599f69804863513cb5&number=${phonenumber}&country_code=${country_code}&format=1`
  //   const myApiData = () =>{
  //   axios.get(`http://apilayer.net/api/validate${access_key}`, {
   
  //     }
  //   )
  //   .then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })
  //   }

  
    useEffect(() =>{
      instance.get("http://localhost:4000/mynew", {
  
      }
    )
    .then(function (response) {
const email = response.data;
dispatch(apidata(email))
const totalEmail = email.length
console.log(email.length)
console.log(Array.isArray(email))
setData(email)
    })
    .catch(function (error) {
      console.log(error);
    })

    },[])

;
 return (
<div>

</div>
  )  
}

export default Apidata;


