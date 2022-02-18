import instance from "../http/Instance";




export const apiregister = async (data) => {
  try {
    const res = await instance.post("/Register", data);
    console.log(res);
    const token = res.data.token;
localStorage.setItem('APIreg_TOKEN',token)

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
  } catch (err) {
    return null;
  }
};

export const interestapi = async (data) => {
  try {
    const res = await instance.post("/interest", data);
    console.log(res);
  } catch (err) {
    return null;
  }
};

export const salaryapi = async (data) => {
    try {
      const res = await instance.post("/salary", data);
      console.log(res);
    } catch (err) {
      return null;
    }
  };

  export const filenameapi = async (data) => {
    try {
      const res = await instance.post("/filename", data);
      console.log(res);
    } catch (err) {
      return null;
    }
  };