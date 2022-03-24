import React from "react";
import { useParams } from "react-router";
import instance from "../http/Instance";
import { useEffect } from "react";
import { useState } from "react";
import UserDetailsPage from "./UserDetailsPage";

const UserDetails = () => {
  const [user, setUser] = useState("");
  const [loading,setLoading] = useState(false)

  const { id } = useParams();
  const profile = async (data) => {
    instance
      .get("/getprofile", {
        headers: {
          Authorization: `${data}`,
        },
      })
      .then((res) => {
        setUser(res.data);
        setLoading(true)
        return res;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const res = profile(id);

    console.log(user);
  }, []);

  const {
    aadharnum,
    email,
    fathername,
    firstname,
    gender,
    lastname,
    middlename,
    mobilenumber,
    pan,
    createdAt,
  } = user;
  console.log(loading)
  return (
<div>

    {!loading ? <h4>Loading</h4>:
      <UserDetailsPage aadharnum={aadharnum} fathername={fathername}
      firstname = {firstname} middlename={middlename} lastname={lastname}
      gender={gender} pan={pan} mobilenumber={mobilenumber} createdAt={createdAt}
      email = {email}
      />
    }
</div>
    
  );
};

export default UserDetails;
