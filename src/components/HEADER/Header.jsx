import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src="https://cdn.icon-icons.com/icons2/1092/PNG/512/cube_78424.png"
        alt="Logo"
      />
    </header>
  );
};

export default Header;
