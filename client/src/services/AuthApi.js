import instance from "../http/Instance";
import store from "../Store";
const path = {
  GOOGLE_LOGIN: "/Googleuser",
  REGISTER: "/Register",
};

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
    return res;
  } catch (err) {
    return null;
  }
};

export const interestapi = async (data) => {
  try {
    const res = await instance.post("/interest", data);

    console.log(res);
    return res;
  } catch (err) {
    return null;
  }
};

export const salaryapi = async (data) => {
  try {
    const res = await instance.post("/salary", data);
    console.log(res);
    return res;
  } catch (err) {
    return null;
  }
};

export const filenameapi = async (data) => {
  try {
    const res = await instance.post("/filename", data);
    console.log(res);
    return res;
  } catch (err) {
    return null;
  }
};

export const form16api = async (data) => {
  try {
    const res = await instance.post("/form16data", data);
    console.log(res);
    return res;
  } catch (err) {
    return null;
  }
};
export const savingdeductionapi = async (data) => {
  try {
    const res = await instance.post("/deduction", data);
    console.log(res);
    return res;
  } catch (err) {
    return null;
  }
};

export const apincome = async (data) => {
  try {
    const res = await instance.post("/income", data);
    return res;
  } catch (err) {
    return null;
  }
};


export const apiselectregime = async (data) => {
  try {
    const res = await instance.post("/regime", data);
    return res;
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
      console.log(res);
      return res;
      
    })
    .catch((error) => {
      console.error(error);
    });
};
