/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "../components/Footer/FooterComponent";
import styles from "./MainLayout.module.css";

import "bootstrap/dist/css/bootstrap.min.css";

const MainLayout = ({ children }) => {
  return (
    <div>
      <main className={styles.mainStyle}>{children}</main>
    </div>
  );
};

export default MainLayout;