import instance from "../http/Instance";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import store from "../Store";
import { userDbid } from "../Store/actions/AuthActions";

//"/verfiy"

export const apiregister = async (data) => {
  try {
    const res = await instance.post("/Register", data);
    console.log(res);
    return res;
  } catch (err) {
    return null;
  }
};

export const apigoogleregister = async (data) => {
  try {
    const res = await instance.post("/Googleuser", data);
    return res;
  } catch (err) {
    return null;
  }
};

export const basicuserdata = async (data) => {
  try {
    const res = await instance.post("/userbasicdetails", data);

    console.log(res);
    return res;
  } catch (err) {
    return null;
  }
};
export const logindata = async (data) => {
  try {
    const res = await instance.post("/Login", data);
    console.log(res);
    return res;
  } catch (err) {
    return null;
  }
};

export const hpapi = async (data) => {
  try {
    const res = await instance.post("/hp", data);
    console.log(res);
    return res
  } catch (err) {
    return null;
  }
};

export const interestapi = async (data) => {
  try {
    const res = await instance.post("/interest", data);
  
    console.log(res);
    return res
  } catch (err) {
    return null;
  }
};

export const salaryapi = async (data) => {
  try {
    const res = await instance.post("/salary", data);
    console.log(res);
    return res
  } catch (err) {
    return null;
  }
};

export const filenameapi = async (data) => {
  try {
    const res = await instance.post("/filename", data);
    console.log(res);
    return res
  } catch (err) {
    return null;
  }
};

export const form16api = async (data) => {
  try {
    const res = await instance.post("/form16data", data);
    console.log(res);
    return res
  } catch (err) {
    return null;
  }
};

export const apitokenregister = async (access_token) => {
  await instance
    .get("/verfiy", {
      headers: {
        Authorization: `token ${access_token}`,
      },
    })
    .then((res) => {

      // 
    //   const user_id = res.data.user_id
    // return user_id
   

    const data = res.data.user_id
    console.log("THIS IS MY ACTIONS",store.dispatch(userDbid(data)))
    return res
    })
    .catch((error) => {
      console.error(error);
    });
};
