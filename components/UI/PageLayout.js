import React from "react";
import styles from "./PageLayout.module.scss";

const PageLayout = (props) => {
  return (
    <React.Fragment>
      <div className={styles.body}>{props.children}</div>
    </React.Fragment>
    );
};

export default PageLayout;
