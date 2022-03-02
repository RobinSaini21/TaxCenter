import React from "react";
import { logoutSuccess } from "../../Store/actions/AuthActions";
import { useDispatch } from "react-redux";

const Logout = () => {
  const dispatch = useDispatch();
  dispatch();
};

export default Logout;
