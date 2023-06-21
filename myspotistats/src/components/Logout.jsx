import React from "react";
import Button from "./UI/Button";

const logoutButtonHandler = (e) => {
  e.preventDefault();
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("expiration");

  window.location.href = "/";
};

const Logout = props => {
  return <Button onClick={logoutButtonHandler} mode={props?.mode || ""}>Logout</Button>;
};

export default Logout;
