import React from "react";
import styles from "./nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={`${styles.item} ${styles.image}`}>
        <img
          className={styles.image}
          src="https://cdn.icon-icons.com/icons2/2941/PNG/512/home_house_icon_183822.png"
        ></img>
        <NavLink to="/Profile" activeClassName={styles.active}>
          Profile
        </NavLink>
      </div>
      <div className={`${styles.item} ${styles.image}`}>
        <img
          className={styles.image}
          src="https://cdn.icon-icons.com/icons2/2941/PNG/512/message_icon_183786.png"
        ></img>
        <NavLink to="/Dialogs" activeClassName={styles.active}>
          Messages
        </NavLink>
      </div>
      <div className={`${styles.item} ${styles.image}`}>
        <img
          className={styles.image}
          src="https://cdn.icon-icons.com/icons2/2941/PNG/512/document_file_text_icon_183798.png"
        ></img>
        <NavLink to="/News" activeClassName={styles.active}>
          News
        </NavLink>
      </div>
      <div className={`${styles.item} ${styles.image}`}>
        <img
          className={styles.image}
          src="https://cdn.icon-icons.com/icons2/2946/PNG/512/play_icon_184304.png"
        ></img>
        <NavLink to="/Music" activeClassName={styles.active}>
          Music
        </NavLink>
      </div>
      <div className={`${styles.item} ${styles.image}`}>
        <img
          className={styles.image}
          src="https://cdn.icon-icons.com/icons2/2941/PNG/512/setting_settings_icon_183789.png"
        ></img>
        <NavLink to="/Settings" activeClassName={styles.active}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
