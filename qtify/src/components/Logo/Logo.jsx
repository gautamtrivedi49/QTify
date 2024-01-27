import React from "react";
import logo from "../../assets/logo.svg";
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <>
      <img
        src={logo}
        alt="logo"
        width={67}
        height={34}
        className={styles.Logo}
      />
    </>
  );
};

export default Logo;
