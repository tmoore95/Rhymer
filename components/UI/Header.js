import React from "react";
import styles from "./Header.module.scss";

const Header = (props) => {
  return (
    <React.Fragment>
      <div className={styles.title}>
        <h1 className={styles.flickerOne}>Rhy</h1>
        <h1 className={styles.flickerTwo}>mer</h1>
      </div>
    </React.Fragment>
  );
};

export default Header;
