import React from "react";
import logo from "../../assets/logo.svg";

const Logo = () => {
  return (
    <>
      <img
        src={logo}
        alt="logo"
        width={67}
        height={34}
        style={{ marginLeft: "32px" }}
      />
    </>
  );
};

export default Logo;
